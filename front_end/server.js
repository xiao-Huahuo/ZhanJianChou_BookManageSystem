require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { SocksProxyAgent } = require('socks-proxy-agent');
const { setGlobalDispatcher, Agent } = require('undici');
const fetch = require('node-fetch');

// --- 代理配置 ---
const proxyUrl = "socks5://127.0.0.1:7890";
const proxyAgent = new SocksProxyAgent(proxyUrl);

setGlobalDispatcher(new Agent({
  connect: (opts) => ({
    ...opts,
    agent: proxyAgent,
  })
}));

const app = express();
const PORT = process.env.PORT || 3000;

// --- 中间件 ---
app.use(bodyParser.json());

// **重要：使用你新的 'testfolder' 文件夹来提供静态文件**
app.use(express.static(path.join(__dirname, 'testfolder')));

// --- 测试路由 ---
app.get('/', (req, res) => {
  // 当用户访问根目录时，可以考虑重定向到主页
  res.redirect('/user-page.html');
});

// --- Kimi AI 问答接口 ---
app.post('/api/ask-ai', async (req, res) => {
  try {
    const { query, book } = req.body;
    if (!query || !book) {
      return res.status(400).json({ error: 'Query and book data are required.' });
    }

    const apiKey = process.env.KIMI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'KIMI_API_KEY is not set in the .env file.' });
    }

    const url = `https://api.moonshot.cn/v1/chat/completions`;
    
    const requestPayload = {
      model: "moonshot-v1-8k",
      messages: [
        {
          role: "system",
          content: `你是一个专业的图书助手，正在回答关于《${book.title}》的问题。书籍信息如下： - 作者: ${book.author} - 简介: ${book.description} 请基于这些信息和你的知识，提供详细、准确、流畅的回答。如果问题超出了书籍的直接范围，请基于相关知识进行扩展。`
        },
        {
          role: "user",
          content: query
        }
      ],
      temperature: 0.7,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestPayload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Kimi API Error:', errorData);
      return res.status(response.status).json({
        error: `Kimi API error: ${response.statusText}`,
        details: errorData
      });
    }

    const data = await response.json();
    
    if (!data.choices || data.choices.length === 0 || !data.choices[0].message.content) {
      throw new Error('Invalid response format from Kimi API. No content found.');
    }
    
    const aiReply = data.choices[0].message.content;
    res.json({ reply: aiReply });

  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({
      error: 'Failed to process AI request',
      details: error.message
    });
  }
});

// --- 启动服务器 ---
app.listen(PORT, () => {
  console.log(`服务器已在 http://localhost:${PORT} 上运行`);
  console.log(`Kimi API Key: ${process.env.KIMI_API_KEY ? 'Loaded' : 'Missing! Check your .env file.'}`);
});