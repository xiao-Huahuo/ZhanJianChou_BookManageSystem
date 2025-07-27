document.addEventListener('DOMContentLoaded', () => {
  // --- 1. 定义和应用语言与主题 ---
  const currentLang = localStorage.getItem('lang') || 'zh-CN';
  const currentTheme = localStorage.getItem('theme') || 'light';
  window.currentLang = currentLang; // 设置为全局变量，方便其他脚本访问

  // 应用主题
  if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // --- 2. 认证守卫 (用于需要登录的页面) ---
  const isProtectedPage = !document.body.id || (document.body.id !== 'login-page' && document.body.id !== 'registration-page');
  const currentUser = sessionStorage.getItem('currentUser');

  if (isProtectedPage && !currentUser) {
    // 确保翻译对象已加载，以便弹出正确语言的提示
    const alertMsg = (typeof translations !== 'undefined' && translations[currentLang]?.alert_login_prompt) 
                     ? translations[currentLang].alert_login_prompt 
                     : 'Please log in first!'; // Fallback
    alert(alertMsg);
    window.location.href = 'login.html';
    return; // 停止后续脚本执行
  }
  
  // --- 3. 应用所有静态文本翻译 ---
  if (typeof translations !== 'undefined' && translations[currentLang]) {
    // 翻译页面标题
    const titleElement = document.querySelector('title');
    if (titleElement) {
        const titleKey = titleElement.getAttribute('data-translate-key');
        if (titleKey && translations[currentLang][titleKey]) {
            document.title = translations[currentLang][titleKey];
        }
    }
    
    // 翻译所有带 data-translate-key 的元素
    document.querySelectorAll('[data-translate-key]').forEach(element => {
      const key = element.getAttribute('data-translate-key');
      if (translations[currentLang][key]) {
        let text = translations[currentLang][key];

        // 处理带 {name} 占位符的文本
        if (text.includes('{name}') && currentUser) {
          const users = JSON.parse(localStorage.getItem('users')) || [];
          const userInfo = users.find(u => u.username === currentUser);
          if (userInfo) {
            text = text.replace('{name}', userInfo.name);
          }
        }
        
        // 优先处理占位符翻译
        const placeholderKey = element.getAttribute('data-translate-key-placeholder');
        if (placeholderKey && translations[currentLang][placeholderKey]) {
             element.placeholder = translations[currentLang][placeholderKey];
        } else if (element.placeholder) {
            element.placeholder = text;
        } else {
             element.textContent = text;
        }
      }
    });
  }

  // --- 4. 通用UI元素事件监听 ---
  // 侧边栏 Toggle
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  if (sidebarToggle && sidebar) {
      sidebarToggle.addEventListener('click', (e) => {
          e.stopPropagation();
          sidebar.classList.toggle('-translate-x-full');
      });
  }

  // 登出按钮
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
          sessionStorage.removeItem('currentUser');
          const alertMsg = translations[currentLang]?.alert_logout_success || '您已成功登出！';
          alert(alertMsg);
          window.location.href = 'login.html';
      });
  }
  
  // --- 5. 侧边栏活动状态 ---
  const currentPath = window.location.pathname.split('/').pop();
  if (currentPath) {
      const sidebarItems = document.querySelectorAll('#sidebar .sidebar-item');
      sidebarItems.forEach(item => {
          const href = item.getAttribute('href');
          if (href === currentPath) {
              item.classList.add('active');
          } else {
              item.classList.remove('active');
          }
      });
  }

  // --- 6. 背景图片切换 ---
  const backgroundSlideshow = document.getElementById('background-slideshow');
  if (backgroundSlideshow) {
    const backgroundImages = ['images/background1.jpg', 'images/background2.jpg', 'images/background3.jpg'];
    if (backgroundImages.length > 0) {
        backgroundSlideshow.style.backgroundImage = `url('${backgroundImages[0]}')`;
        let currentImageIndex = 0;
        const changeBackgroundImage = () => {
            currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
            backgroundSlideshow.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
        }
        if (backgroundImages.length > 1) {
            setInterval(changeBackgroundImage, 15000);
        }
    }
  }

  // --- 7. 用户信息显示 (用于需要登录的页面) ---
  if (isProtectedPage && currentUser) {
      const userNameDisplay = document.getElementById('user-name-display');
      const userRoleDisplay = document.getElementById('user-role-display');
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const userInfo = users.find(u => u.username === currentUser);

      if (userInfo) {
          if (userNameDisplay) {
              userNameDisplay.textContent = userInfo.name;
          }
          if (userRoleDisplay) {
              // 使用翻译来显示用户角色
              userRoleDisplay.textContent = translations[currentLang]?.identity_user || 'User';
          }
      }
  }
});