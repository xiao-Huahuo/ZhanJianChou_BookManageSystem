const books = [
  {
    id: 1,
    title: { "zh-CN": "《明朝那些事儿》", "en": "Those Things in the Ming Dynasty", "ja": "《明王朝のあれこれ》" },
    author: "当年明月",
    isbn: "978-7-5404-3705-7",
    description: { "zh-CN": "以史料为基础，以小说笔法，对明朝十七帝和其他人物进行解读。", "en": "Based on historical materials, this book interprets the seventeen emperors and other figures of the Ming Dynasty in a novelistic style.", "ja": "史料を基に、小説の手法で明朝の十七人の皇帝とその他の人物を解読します。" },
    image: "https://picsum.photos/id/237/400/300",
    category: { "zh-CN": "历史", "en": "History", "ja": "歴史" }
  },
  {
    id: 2,
    title: { "zh-CN": "《活着》", "en": "To Live", "ja": "《活きる》" },
    author: "余华",
    isbn: "978-7-5327-7756-7",
    description: { "zh-CN": "讲述了中国农民福贵悲惨而又充满韧性的一生。", "en": "Tells the tragic yet resilient story of a Chinese peasant named Fugui.", "ja": "中国の農民、福貴の悲惨でありながらも強靭な一生を描いています。" },
    image: "https://picsum.photos/id/238/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 3,
    title: { "zh-CN": "《哈利·波特与魔法石》", "en": "Harry Potter and the Philosopher's Stone", "ja": "《ハリー・ポッターと賢者の石》" },
    author: "J.K. 罗琳",
    isbn: "978-7-02-003333-3",
    description: { "zh-CN": "全球畅销的奇幻文学系列第一部，开启魔法世界的冒险。", "en": "The first book in the globally best-selling fantasy series that kicks off the adventure in the magical world.", "ja": "世界的にベストセラーとなったファンタジー文学シリーズの第一作で、魔法の世界の冒険が始まります。" },
    image: "https://picsum.photos/id/239/400/300",
    category: { "zh-CN": "小说", "en": "Fiction", "ja": "小説" }
  },
  {
    id: 4,
    title: { "zh-CN": "《围城》", "en": "Fortress Besieged", "ja": "《囲まれた城》" },
    author: "钱钟书",
    isbn: "978-7-02-002672-0",
    description: { "zh-CN": "钱钟书先生的讽刺小说，被誉为“新儒林外史”。", "en": "A satirical novel by Mr. Qian Zhongshu, hailed as the 'New Unofficial History of the Scholars'.", "ja": "銭鐘書氏の風刺小説で、「新儒林外史」と称されています。" },
    image: "https://picsum.photos/id/240/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 5,
    title: { "zh-CN": "《三体》", "en": "The Three-Body Problem", "ja": "《三体》" },
    author: "刘慈欣",
    isbn: "978-7-5366-9293-0",
    description: { "zh-CN": "中国科幻文学的里程碑之作，探讨宇宙社会学。", "en": "A milestone in Chinese science fiction, exploring cosmic sociology.", "ja": "中国SF文学の金字塔であり、宇宙社会学を探求する作品です。" },
    image: "https://picsum.photos/id/241/400/300",
    category: { "zh-CN": "科学", "en": "Science", "ja": "科学" }
  },
  {
    id: 6,
    title: { "zh-CN": "《百年孤独》", "en": "One Hundred Years of Solitude", "ja": "《百年の孤独》" },
    author: "加西亚·马尔克斯",
    isbn: "978-7-5327-7278-4",
    description: { "zh-CN": "魔幻现实主义的代表作，讲述布恩迪亚家族的兴衰。", "en": "A representative work of magical realism, telling the story of the rise and fall of the Buendía family.", "ja": "魔術的リアリズムの代表作で、ブエンディア一族の盛衰を描いています。" },
    image: "https://picsum.photos/id/242/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 7,
    title: { "zh-CN": "《人类简史：从动物到上帝》", "en": "Sapiens: A Brief History of Humankind", "ja": "《サピエンス全史：文明の構造と人類の幸福》" },
    author: "尤瓦尔·赫拉利",
    isbn: "978-7-5339-4402-9",
    description: { "zh-CN": "一本关于人类历史的宏大叙事，从认知革命到科学革命。", "en": "A grand narrative of human history, from the Cognitive Revolution to the Scientific Revolution.", "ja": "認知革命から科学革命まで、人類の歴史に関する壮大な物語です。" },
    image: "https://picsum.photos/id/243/400/300",
    category: { "zh-CN": "历史", "en": "History", "ja": "歴史" }
  },
  {
    id: 8,
    title: { "zh-CN": "《小王子》", "en": "The Little Prince", "ja": "《星の王子さま》" },
    author: "安托万·德·圣-埃克苏佩里",
    isbn: "978-7-5327-7757-4",
    description: { "zh-CN": "一部充满哲理的童话，献给所有曾经是孩子的大人。", "en": "A philosophical fairy tale dedicated to all adults who were once children.", "ja": "かつて子供だったすべての大人に捧げる、哲学に満ちた童話です。" },
    image: "https://picsum.photos/id/244/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 9,
    title: { "zh-CN": "《1984》", "en": "Nineteen Eighty-Four", "ja": "《1984年》" },
    author: "乔治·奥威尔",
    isbn: "978-7-5447-0624-9",
    description: { "zh-CN": "反乌托邦的经典之作，描绘了一个极权主义社会。", "en": "A classic dystopian novel depicting a totalitarian society.", "ja": "全体主義社会を描いたディストピアの古典的名作です。" },
    image: "https://picsum.photos/id/245/400/300",
    category: { "zh-CN": "小说", "en": "Fiction", "ja": "小説" }
  },
  {
    id: 10,
    title: { "zh-CN": "《月亮与六便士》", "en": "The Moon and Sixpence", "ja": "《月と六ペンス》" },
    author: "毛姆",
    isbn: "978-7-5327-7758-1",
    description: { "zh-CN": "讲述了一个中年男人放弃一切去追求艺术的传奇故事。", "en": "Tells the legendary story of a middle-aged man who gives up everything to pursue art.", "ja": "芸術を追求するためにすべてを捨てた中年男性の伝説的な物語です。" },
    image: "https://picsum.photos/id/246/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 11,
    title: { "zh-CN": "《红楼梦》", "en": "Dream of the Red Chamber", "ja": "《紅楼夢》" },
    author: "曹雪芹",
    isbn: "978-7-02-000220-4",
    description: { "zh-CN": "中国古典四大名著之一，展现了封建社会的百科全书。", "en": "One of the Four Great Classical Novels of Chinese literature, presenting an encyclopedia of feudal society.", "ja": "中国四大奇書の一つで、封建社会の百科事典とも言える作品です。" },
    image: "https://picsum.photos/id/247/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 12,
    title: { "zh-CN": "《傲慢与偏见》", "en": "Pride and Prejudice", "ja": "《高慢と偏見》" },
    author: "简·奥斯汀",
    isbn: "978-7-5447-0625-6",
    description: { "zh-CN": "英国文学史上的经典爱情小说，探讨爱情、婚姻与社会阶层。", "en": "A classic romance novel in English literature, exploring love, marriage, and social class.", "ja": "イギリス文学史上の古典的な恋愛小説で、愛、結婚、社会階級について探求しています。" },
    image: "https://picsum.photos/id/248/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 13,
    title: { "zh-CN": "《乌合之众：大众心理研究》", "en": "The Crowd: A Study of the Popular Mind", "ja": "《群衆心理》" },
    author: "古斯塔夫·勒庞",
    isbn: "978-7-5327-7759-8",
    description: { "zh-CN": "一部对群体心理学进行深入分析的著作，影响深远。", "en": "A profoundly influential work that provides a deep analysis of crowd psychology.", "ja": "群集心理学を深く分析した著作で、広範囲にわたる影響を与えました。" },
    image: "https://picsum.photos/id/249/400/300",
    category: { "zh-CN": "心理学", "en": "Psychology", "ja": "心理学" }
  },
  {
    id: 14,
    title: { "zh-CN": "《影响力》", "en": "Influence: The Psychology of Persuasion", "ja": "《影響力の武器》" },
    author: "罗伯特·西奥迪尼",
    isbn: "978-7-111-20993-2",
    description: { "zh-CN": "心理学经典，揭示了说服和影响他人的六种基本原则。", "en": "A classic in psychology that reveals the six basic principles of persuasion and influence.", "ja": "説得と他者への影響に関する六つの基本原則を明らかにする心理学の古典です。" },
    image: "https://picsum.photos/id/250/400/300",
    category: { "zh-CN": "心理学", "en": "Psychology", "ja": "心理学" }
  },
  {
    id: 15,
    title: { "zh-CN": "《编码：隐匿在计算机软硬件背后的语言》", "en": "Code: The Hidden Language of Computer Hardware and Software", "ja": "《CODE コードから見たコンピュータのからくり》" },
    author: "查尔斯·佩措尔德",
    isbn: "978-7-115-38507-6",
    description: { "zh-CN": "从电报到计算机，用通俗易懂的语言讲述编码的历史与原理。", "en": "From the telegraph to the computer, it explains the history and principles of code in an accessible language.", "ja": "電信からコンピュータまで、コーディングの歴史と原理を分かりやすい言葉で解説します。" },
    image: "https://picsum.photos/id/251/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 16,
    title: { "zh-CN": "《万物简史》", "en": "A Short History of Nearly Everything", "ja": "《万物の歴史》" },
    author: "比尔·布莱森",
    isbn: "978-7-5327-7760-4",
    description: { "zh-CN": "一部关于科学知识的百科全书，以幽默的笔触讲述宇宙万物。", "en": "An encyclopedia of scientific knowledge that humorously tells the story of everything in the universe.", "ja": "科学知識に関する百科事典で、ユーモラスな筆致で宇宙の万物を語ります。" },
    image: "https://picsum.photos/id/252/400/300",
    category: { "zh-CN": "科学", "en": "Science", "ja": "科学" }
  },
  {
    id: 17,
    title: { "zh-CN": "《禅与摩托车维修艺术》", "en": "Zen and the Art of Motorcycle Maintenance", "ja": "《禅とオートバイ修理技術》" },
    author: "罗伯特·M·波西格",
    isbn: "978-7-5327-7761-1",
    description: { "zh-CN": "一部哲学小说，探讨了生活的意义和品质。", "en": "A philosophical novel that explores the meaning and quality of life.", "ja": "生命の意味と質を探求する哲学小説です。" },
    image: "https://picsum.photos/id/253/400/300",
    category: { "zh-CN": "哲学", "en": "Philosophy", "ja": "哲学" }
  },
  {
    id: 18,
    title: { "zh-CN": "《艺术的故事》", "en": "The Story of Art", "ja": "《美術の物語》" },
    author: "E.H.贡布里希",
    isbn: "978-7-5327-7762-8",
    description: { "zh-CN": "西方艺术史的经典入门读物，涵盖从史前到现代的艺术发展。", "en": "A classic introduction to Western art history, covering artistic development from prehistory to the modern era.", "ja": "先史時代から現代までの芸術の発展をカバーする、西洋美術史の古典的な入門書です。" },
    image: "https://picsum.photos/id/254/400/300",
    category: { "zh-CN": "艺术", "en": "Art", "ja": "芸術" }
  },
  {
    id: 19,
    title: { "zh-CN": "《苏菲的世界》", "en": "Sophie's World", "ja": "《ソフィーの世界》" },
    author: "乔斯坦·贾德",
    isbn: "978-7-5327-7763-5",
    description: { "zh-CN": "一部以小说形式介绍西方哲学史的普及读物。", "en": "A popular introductory book to the history of Western philosophy in the form of a novel.", "ja": "西洋哲学史を小説形式で紹介する普及書です。" },
    image: "https://picsum.photos/id/255/400/300",
    category: { "zh-CN": "哲学", "en": "Philosophy", "ja": "哲学" }
  },
  {
    id: 20,
    title: { "zh-CN": "《JavaScript高级程序设计》", "en": "Professional JavaScript for Web Developers", "ja": "《プロフェッショナルJavaScript》" },
    author: "Nicholas C. Zakas",
    isbn: "978-7-115-40398-5",
    description: { "zh-CN": "JavaScript领域的权威指南，深入讲解语言核心和Web API。", "en": "The authoritative guide to JavaScript, with in-depth explanations of the language core and Web APIs.", "ja": "JavaScript分野の権威あるガイドで、言語コアとWeb APIを深く解説します。" },
    image: "https://picsum.photos/id/256/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 21,
    title: { "zh-CN": "《未来简史》", "en": "Homo Deus: A Brief History of Tomorrow", "ja": "《ホモ・デウス：テクノロジーとサピエンスの未来》" },
    author: "尤瓦尔·赫拉利",
    isbn: "978-7-5339-4403-6",
    description: { "zh-CN": "探讨了未来人类将如何演化以及面临的挑战。", "en": "Explores how future humans will evolve and the challenges they will face.", "ja": "未来の人類がどのように進化し、どのような課題に直面するかを探ります。" },
    image: "https://picsum.photos/id/257/400/300",
    category: { "zh-CN": "历史", "en": "History", "ja": "歴史" }
  },
  {
    id: 22,
    title: { "zh-CN": "《乡土中国》", "en": "From the Soil: The Foundations of Chinese Society", "ja": "《郷土中国》" },
    author: "费孝通",
    isbn: "978-7-5327-7764-2",
    description: { "zh-CN": "对中国传统社会结构和文化进行了深刻剖析。", "en": "Provides a profound analysis of the structure and culture of traditional Chinese society.", "ja": "中国の伝統的な社会構造と文化を深く分析しています。" },
    image: "https://picsum.photos/id/258/400/300",
    category: { "zh-CN": "历史", "en": "History", "ja": "歴史" }
  },
  {
    id: 23,
    title: { "zh-CN": "《哥德尔、艾舍尔、巴赫：集异璧之大成》", "en": "Gödel, Escher, Bach: an Eternal Golden Braid", "ja": "《ゲーデル、エッシャー、バッハ：永遠の金の帯》" },
    author: "侯世达",
    isbn: "978-7-5327-7765-9",
    description: { "zh-CN": "一本探讨数学、艺术和人工智能之间深层联系的巨著。", "en": "A monumental work exploring the deep connections between mathematics, art, and artificial intelligence.", "ja": "数学、芸術、人工知能の間の深いつながりを探る大作です。" },
    image: "https://picsum.photos/id/259/400/300",
    category: { "zh-CN": "科学", "en": "Science", "ja": "科学" }
  },
  {
    id: 24,
    title: { "zh-CN": "《物种起源》", "en": "On the Origin of Species", "ja": "《種の起源》" },
    author: "查尔斯·达尔文",
    isbn: "978-7-5327-7766-6",
    description: { "zh-CN": "阐述自然选择理论，生物进化的奠基之作。", "en": "Expounds the theory of natural selection; a foundational work of biological evolution.", "ja": "自然選択説を解説し、生物進化の基礎を築いた作品です。" },
    image: "https://picsum.photos/id/260/400/300",
    category: { "zh-CN": "科学", "en": "Science", "ja": "科学" }
  },
  {
    id: 25,
    title: { "zh-CN": "《梦的解析》", "en": "The Interpretation of Dreams", "ja": "《夢判断》" },
    author: "西格蒙德·弗洛伊德",
    isbn: "978-7-5327-7767-3",
    description: { "zh-CN": "精神分析学的开山之作，探索梦的奥秘。", "en": "The foundational work of psychoanalysis, exploring the mysteries of dreams.", "ja": "精神分析学の創始作であり、夢の謎を探求します。" },
    image: "https://picsum.photos/id/261/400/300",
    category: { "zh-CN": "心理学", "en": "Psychology", "ja": "心理学" }
  },
  {
    id: 26,
    title: { "zh-CN": "《追风筝的人》", "en": "The Kite Runner", "ja": "《君のためなら千回でも》" },
    author: "卡勒德·胡赛尼",
    isbn: "978-7-5327-7768-0",
    description: { "zh-CN": "讲述了阿富汗一对好友的成长与救赎的故事。", "en": "Tells a story of friendship, growth, and redemption between two friends in Afghanistan.", "ja": "アフガニスタンの二人の親友の成長と贖いの物語です。" },
    image: "https://picsum.photos/id/262/400/300",
    category: { "zh-CN": "小说", "en": "Fiction", "ja": "小説" }
  },
  {
    id: 27,
    title: { "zh-CN": "《杀死一只知更鸟》", "en": "To Kill a Mockingbird", "ja": "《アラバマ物語》" },
    author: "哈珀·李",
    isbn: "978-7-5447-0626-3",
    description: { "zh-CN": "一部关于种族歧视和正义的经典小说。", "en": "A classic novel about racial injustice and righteousness.", "ja": "人種差別と正義についての古典的な小説です。" },
    image: "https://picsum.photos/id/263/400/300",
    category: { "zh-CN": "小说", "en": "Fiction", "ja": "小説" }
  },
  {
    id: 28,
    title: { "zh-CN": "《高效能人士的七个习惯》", "en": "The 7 Habits of Highly Effective People", "ja": "《7つの習慣》" },
    author: "史蒂芬·柯维",
    isbn: "978-7-5086-4528-9",
    description: { "zh-CN": "全球畅销的个人成长和领导力指南。", "en": "A globally best-selling guide to personal growth and leadership.", "ja": "世界的にベストセラーとなった個人の成長とリーダーシップのガイドです。" },
    image: "https://picsum.photos/id/264/400/300",
    category: { "zh-CN": "心理学", "en": "Psychology", "ja": "心理学" }
  },
  {
    id: 29,
    title: { "zh-CN": "《非暴力沟通》", "en": "Nonviolent Communication", "ja": "《NVC 人と人との関係にいのちを吹き込む法》" },
    author: "马歇尔·卢森堡",
    isbn: "978-7-5086-5867-8",
    description: { "zh-CN": "教导人们如何非暴力地表达自己，教授同理心技巧。是对人类行为原则的探索。", "en": "Teaches people how to express themselves nonviolently and teaches empathy skills. It is an exploration of the principles of human behavior.", "ja": "人々に非暴力的な自己表現の方法を教え、共感のスキルを授けます。人間行動の原則を探求するものです。" },
    image: "https://picsum.photos/id/265/400/300",
    category: { "zh-CN": "心理学", "en": "Psychology", "ja": "心理学" }
  },
  {
    id: 30,
    title: { "zh-CN": "《算法导论》", "en": "Introduction to Algorithms", "ja": "《アルゴリズムイントロダクション》" },
    author: "托马斯·科尔曼",
    isbn: "978-7-111-20994-9",
    description: { "zh-CN": "计算机科学领域的经典教材，深入讲解各种算法。", "en": "A classic textbook in computer science that provides a deep dive into various algorithms.", "ja": "コンピュータ科学分野の古典的な教科書で、様々なアルゴリズムを深く解説します。" },
    image: "https://picsum.photos/id/266/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 31,
    title: { "zh-CN": "《设计模式》", "en": "Design Patterns: Elements of Reusable Object-Oriented Software", "ja": "《オブジェクト指向における再利用のためのデザインパターン》" },
    author: "埃里希·伽玛等",
    isbn: "978-7-115-38508-3",
    description: { "zh-CN": "软件设计领域的经典，GoF的23种设计模式。", "en": "A classic in software design, featuring the 23 design patterns from the Gang of Four (GoF).", "ja": "ソフトウェア設計の分野における古典であり、GoFによる23のデザインパターンを特集しています。" },
    image: "https://picsum.photos/id/267/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 32,
    title: { "zh-CN": "《中国哲学史》", "en": "A History of Chinese Philosophy", "ja": "《中国哲学史》" },
    author: "冯友兰",
    isbn: "978-7-5327-7769-7",
    description: { "zh-CN": "系统阐述中国哲学思想的发展脉络。", "en": "Systematically expounds the developmental context of Chinese philosophical thought.", "ja": "中国哲学思想の発展の脈絡を体系的に解説しています。" },
    image: "https://picsum.photos/id/268/400/300",
    category: { "zh-CN": "哲学", "en": "Philosophy", "ja": "哲学" }
  },
  {
    id: 33,
    title: { "zh-CN": "《理想国》", "en": "The Republic", "ja": "《国家》" },
    author: "柏拉图",
    isbn: "978-7-5327-7770-3",
    description: { "zh-CN": "西方哲学经典，探讨理想国家和社会。", "en": "A classic of Western philosophy that discusses the ideal state and society.", "ja": "理想的な国家と社会について議論する西洋哲学の古典です。" },
    image: "https://picsum.photos/id/269/400/300",
    category: { "zh-CN": "哲学", "en": "Philosophy", "ja": "哲学" }
  },
  {
    id: 34,
    title: { "zh-CN": "《西方哲学史》", "en": "A History of Western Philosophy", "ja": "《西洋哲学史》" },
    author: "伯特兰·罗素",
    isbn: "978-7-5327-7771-0",
    description: { "zh-CN": "罗素对西方哲学历史的个人解读。", "en": "Russell's personal interpretation of the history of Western philosophy.", "ja": "ラッセルによる西洋哲学史の個人的な解釈です。" },
    image: "https://picsum.photos/id/270/400/300",
    category: { "zh-CN": "哲学", "en": "Philosophy", "ja": "哲学" }
  },
  {
    id: 35,
    title: { "zh-CN": "《美的历史》", "en": "History of Beauty", "ja": "《美の歴史》" },
    author: "翁贝托·艾柯",
    isbn: "978-7-5327-7772-7",
    description: { "zh-CN": "艾柯以插图形式呈现西方美学概念的演变。", "en": "Eco presents the evolution of Western aesthetic concepts in an illustrated format.", "ja": "エーコが西洋の美学的概念の変遷をイラスト形式で提示します。" },
    image: "https://picsum.photos/id/271/400/300",
    category: { "zh-CN": "艺术", "en": "Art", "ja": "芸術" }
  },
  {
    id: 36,
    title: { "zh-CN": "《艺术与幻觉》", "en": "Art and Illusion", "ja": "《芸術と幻影》" },
    author: "E.H.贡布里希",
    isbn: "978-7-5327-7773-4",
    description: { "zh-CN": "探讨艺术中的再现与心理学。", "en": "Explores representation in art and psychology.", "ja": "芸術における再現と心理学を探求します。" },
    image: "https://picsum.photos/id/272/400/300",
    category: { "zh-CN": "艺术", "en": "Art", "ja": "芸術" }
  },
  {
    id: 37,
    title: { "zh-CN": "《菊与刀》", "en": "The Chrysanthemum and the Sword", "ja": "《菊と刀》" },
    author: "鲁思·本尼迪克特",
    isbn: "978-7-5327-7774-1",
    description: { "zh-CN": "二战后对日本民族性格的经典分析。", "en": "A classic post-WWII analysis of the Japanese national character.", "ja": "第二次世界大戦後の日本人の国民性に関する古典的な分析です。" },
    image: "https://picsum.photos/id/273/400/300",
    category: { "zh-CN": "历史", "en": "History", "ja": "歴史" }
  },
  {
    id: 38,
    title: { "zh-CN": "《枪炮、病菌与钢铁》", "en": "Guns, Germs, and Steel", "ja": "《銃・病原菌・鉄》" },
    author: "贾雷德·戴蒙德",
    isbn: "978-7-5327-7775-8",
    description: { "zh-CN": "解释人类社会发展差异的地理和环境因素。", "en": "Explains the geographical and environmental factors behind the developmental differences in human societies.", "ja": "人類社会の発展差異の地理的および環境的要因を説明します。" },
    image: "https://picsum.photos/id/274/400/300",
    category: { "zh-CN": "历史", "en": "History", "ja": "歴史" }
  },
  {
    id: 39,
    title: { "zh-CN": "《自私的基因》", "en": "The Selfish Gene", "ja": "《利己的な遺伝子》" },
    author: "理查德·道金斯",
    isbn: "978-7-5327-7776-5",
    description: { "zh-CN": "普及进化论和基因中心观点的经典。", "en": "A classic that popularizes evolutionary theory and the gene-centered view.", "ja": "進化論と遺伝子中心視点を普及させる古典です。" },
    image: "https://picsum.photos/id/275/400/300",
    category: { "zh-CN": "科学", "en": "Science", "ja": "科学" }
  },
  {
    id: 40,
    title: { "zh-CN": "《时间简史》", "en": "A Brief History of Time", "ja": "《ホーキング、宇宙を語る》" },
    author: "史蒂芬·霍金",
    isbn: "978-7-5327-7777-2",
    description: { "zh-CN": "解释宇宙起源和命运的科普巨著。", "en": "A popular science masterpiece explaining the origin and fate of the universe.", "ja": "宇宙の起源と運命を説明する科学普及の傑作です。" },
    image: "https://picsum.photos/id/276/400/300",
    category: { "zh-CN": "科学", "en": "Science", "ja": "科学" }
  },
  {
    id: 41,
    title: { "zh-CN": "《心理学与生活》", "en": "Psychology and Life", "ja": "《心理学と生活》" },
    author: "理查德·格里格",
    isbn: "978-7-5086-4529-6",
    description: { "zh-CN": "心理学入门经典教材。", "en": "A classic introductory textbook on psychology.", "ja": "心理学入門の古典的な教科書です。" },
    image: "https://picsum.photos/id/277/400/300",
    category: { "zh-CN": "心理学", "en": "Psychology", "ja": "心理学" }
  },
  {
    id: 42,
    title: { "zh-CN": "《社会心理学》", "en": "Social Psychology", "ja": "《社会心理学》" },
    author: "戴维·迈尔斯",
    isbn: "978-7-5086-5868-5",
    description: { "zh-CN": "社会心理学领域的权威教材。", "en": "An authoritative textbook in the field of social psychology.", "ja": "社会心理学分野の権威ある教科書です。" },
    image: "https://picsum.photos/id/278/400/300",
    category: { "zh-CN": "心理学", "en": "Psychology", "ja": "心理学" }
  },
  {
    id: 43,
    title: { "zh-CN": "《颈椎病康复指南》", "en": "Cervical Spondylosis Rehabilitation Guide", "ja": "《頚椎症リハビリガイド》" },
    author: "李华",
    isbn: "978-7-111-20995-6",
    description: { "zh-CN": "关于颈椎病预防和康复的实用指南。", "en": "A practical guide on the prevention and rehabilitation of cervical spondylosis.", "ja": "頚椎症の予防とリハビリテーションに関する実用的なガイドです。" },
    image: "https://picsum.photos/id/279/400/300",
    category: { "zh-CN": "科学", "en": "Science", "ja": "科学" }
  },
  {
    id: 44,
    title: { "zh-CN": "《编程珠玑》", "en": "Programming Pearls", "ja": "《プログラミングパールズ》" },
    author: "乔恩·本特利",
    isbn: "978-7-115-38509-0",
    description: { "zh-CN": "提高编程技巧和思维的经典。", "en": "A classic for improving programming skills and thinking.", "ja": "プログラミングスキルと思考を向上させるための古典です。" },
    image: "https://picsum.photos/id/280/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 45,
    title: { "zh-CN": "《算法之美》", "en": "The Beauty of Algorithms", "ja": "《アルゴリズムの美》" },
    author: "吴军",
    isbn: "978-7-115-40399-2",
    description: { "zh-CN": "用通俗易懂的语言讲述算法的魅力。", "en": "Explains the charm of algorithms in an accessible language.", "ja": "分かりやすい言葉でアルゴリズムの魅力を語ります。" },
    image: "https://picsum.photos/id/281/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 46,
    title: { "zh-CN": "《道德经》", "en": "Tao Te Ching", "ja": "《道徳経》" },
    author: "老子",
    isbn: "978-7-5327-7778-9",
    description: { "zh-CN": "道家思想的经典著作。", "en": "The classic work of Taoist thought.", "ja": "道教思想の古典的な著作です。" },
    image: "https://picsum.photos/id/282/400/300",
    category: { "zh-CN": "哲学", "en": "Philosophy", "ja": "哲学" }
  },
  {
    id: 47,
    title: { "zh-CN": "《论语》", "en": "The Analects of Confucius", "ja": "《論語》" },
    author: "孔子",
    isbn: "978-7-02-000221-1",
    description: { "zh-CN": "儒家思想的核心经典。", "en": "The core classic of Confucian thought.", "ja": "儒教思想の中核をなす古典です。" },
    image: "https://picsum.photos/id/283/400/300",
    category: { "zh-CN": "哲学", "en": "Philosophy", "ja": "哲学" }
  },
  {
    id: 48,
    title: { "zh-CN": "《孙子兵法》", "en": "The Art of War", "ja": "《孫子の兵法》" },
    author: "孙武",
    isbn: "978-7-02-000222-8",
    description: { "zh-CN": "中国古代军事理论经典。", "en": "A classic of ancient Chinese military theory.", "ja": "中国古代の軍事理論の古典です。" },
    image: "https://picsum.photos/id/284/400/300",
    category: { "zh-CN": "历史", "en": "History", "ja": "歴史" }
  },
  {
    id: 49,
    title: { "zh-CN": "《中国通史》", "en": "A General History of China", "ja": "《中国通史》" },
    author: "吕思勉",
    isbn: "978-7-5327-7779-6",
    description: { "zh-CN": "简明扼要的中国历史概览。", "en": "A concise overview of Chinese history.", "ja": "簡潔で要点を押さえた中国史の概観です。" },
    image: "https://picsum.photos/id/285/400/300",
    category: { "zh-CN": "历史", "en": "History", "ja": "歴史" }
  },
  {
    id: 50,
    title: { "zh-CN": "《世界文明史》", "en": "The Story of Civilization", "ja": "《世界文明史》" },
    author: "威尔·杜兰",
    isbn: "978-7-5327-7780-2",
    description: { "zh-CN": "涵盖人类文明发展历程的巨著。", "en": "A monumental work covering the development of human civilization.", "ja": "人類文明の発展過程を網羅した大作です。" },
    image: "https://picsum.photos/id/286/400/300",
    category: { "zh-CN": "历史", "en": "History", "ja": "歴史" }
  },
  {
    id: 51,
    title: { "zh-CN": "《数学之美》", "en": "The Beauty of Mathematics", "ja": "《数学の美》" },
    author: "吴军",
    isbn: "978-7-115-40400-5",
    description: { "zh-CN": "用生动的故事讲述数学的奥秘。", "en": "Tells the mysteries of mathematics through vivid stories.", "ja": "生き生きとした物語で数学の神秘を語ります。" },
    image: "https://picsum.photos/id/287/400/300",
    category: { "zh-CN": "科学", "en": "Science", "ja": "科学" }
  },
  {
    id: 52,
    title: { "zh-CN": "《物理世界奇遇记》", "en": "Mr Tompkins in Wonderland", "ja": "《物理世界冒険記》" },
    author: "乔治·伽莫夫",
    isbn: "978-7-5327-7781-9",
    description: { "zh-CN": "科普物理学基础知识的经典。", "en": "A classic for popularizing basic knowledge of physics.", "ja": "物理学の基礎知識を普及させるための古典です。" },
    image: "https://picsum.photos/id/288/400/300",
    category: { "zh-CN": "科学", "en": "Science", "ja": "科学" }
  },
  {
    id: 53,
    title: { "zh-CN": "《认知心理学》", "en": "Cognitive Psychology", "ja": "《認知心理学》" },
    author: "约翰·安德森",
    isbn: "978-7-5086-4530-2",
    description: { "zh-CN": "认知心理学领域的权威教材。", "en": "An authoritative textbook in the field of cognitive psychology.", "ja": "認知心理学分野の権威ある教科書です。" },
    image: "https://picsum.photos/id/289/400/300",
    category: { "zh-CN": "心理学", "en": "Psychology", "ja": "心理学" }
  },
  {
    id: 54,
    title: { "zh-CN": "《津巴多普通心理学》", "en": "Zimbardo's Introduction to Psychology", "ja": "《ジンバルドー一般心理学》" },
    author: "菲利普·津巴多",
    isbn: "978-7-5086-5869-2",
    description: { "zh-CN": "心理学入门的经典教材。", "en": "A classic introductory textbook to psychology.", "ja": "心理学入門の古典的な教科書です。" },
    image: "https://picsum.photos/id/290/400/300",
    category: { "zh-CN": "心理学", "en": "Psychology", "ja": "心理学" }
  },
  {
    id: 55,
    title: { "zh-CN": "《Effective Java》", "en": "Effective Java", "ja": "《Effective Java》" },
    author: "Joshua Bloch",
    isbn: "978-7-111-20996-3",
    description: { "zh-CN": "Java编程的实践指南。", "en": "A practical guide to Java programming.", "ja": "Javaプログラミングの実践ガイドです。" },
    image: "https://picsum.photos/id/291/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 56,
    title: { "zh-CN": "《深入理解计算机系统》", "en": "Computer Systems: A Programmer's Perspective", "ja": "《コンピュータシステム：プログラマの視点から》" },
    author: "Randal E. Bryant",
    isbn: "978-7-111-20997-0",
    description: { "zh-CN": "理解计算机底层工作原理的经典。", "en": "A classic for understanding the underlying workings of computer systems.", "ja": "コンピュータシステムの根本的な動作原理を理解するための古典です。" },
    image: "https://picsum.photos/id/292/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 57,
    title: { "zh-CN": "《黑客与画家》", "en": "Hackers & Painters", "ja": "《ハッカーと画家》" },
    author: "保罗·格雷厄姆",
    isbn: "978-7-5327-7782-6",
    description: { "zh-CN": "关于编程、创业和互联网文化的文集。", "en": "A collection of essays on programming, startups, and internet culture.", "ja": "プログラミング、スタートアップ、インターネット文化に関するエッセイ集です。" },
    image: "https://picsum.photos/id/293/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 58,
    title: { "zh-CN": "《JavaScript高级编程》", "en": "JavaScript: The Good Parts", "ja": "《JavaScript：優れたパーツ》" },
    author: "Douglas Crockford",
    isbn: "978-7-115-40401-2",
    description: { "zh-CN": "JavaScript的进阶学习指南。", "en": "An advanced learning guide for JavaScript.", "ja": "JavaScriptの上級学習ガイドです。" },
    image: "https://picsum.photos/id/294/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 59,
    title: { "zh-CN": "《C++ Primer》", "en": "C++ Primer", "ja": "《C++プライマー》" },
    author: "Stanley B. Lippman",
    isbn: "978-7-111-20998-7",
    description: { "zh-CN": "C++编程语言的权威教材。", "en": "The authoritative textbook for the C++ programming language.", "ja": "C++プログラミング言語の権威ある教科書です。" },
    image: "https://picsum.photos/id/295/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 60,
    title: { "zh-CN": "《Python编程从入门到实践》", "en": "Python Crash Course", "ja": "《Pythonクラッシュコース》" },
    author: "Eric Matthes",
    isbn: "978-7-115-40402-9",
    description: { "zh-CN": "Python编程的入门书籍。", "en": "An introductory book to Python programming.", "ja": "Pythonプログラミングの入門書です。" },
    image: "https://picsum.photos/id/296/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 61,
    title: { "zh-CN": "《数据结构与算法分析》", "en": "Data Structures and Algorithm Analysis", "ja": "《データ構造とアルゴリズム分析》" },
    author: "Mark Allen Weiss",
    isbn: "978-7-111-20999-4",
    description: { "zh-CN": "经典的数据结构与算法教材。", "en": "A classic textbook on data structures and algorithms.", "ja": "データ構造とアルゴリズムに関する古典的な教科書です。" },
    image: "https://picsum.photos/id/297/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 62,
    title: { "zh-CN": "《计算机网络：自顶向下方法》", "en": "Computer Networking: A Top-Down Approach", "ja": "《コンピュータネットワーク：トップダウンアプローチ》" },
    author: "James F. Kurose",
    isbn: "978-7-111-21000-7",
    description: { "zh-CN": "计算机网络领域的经典教材。", "en": "A classic textbook in the field of computer networking.", "ja": "コンピュータネットワーク分野の古典的な教科書です。" },
    image: "https://picsum.photos/id/298/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 63,
    title: { "zh-CN": "《操作系统：精髓与设计原理》", "en": "Operating Systems: Internals and Design Principles", "ja": "《オペレーティングシステム：内部と設計原理》" },
    author: "William Stallings",
    isbn: "978-7-111-21001-4",
    description: { "zh-CN": "深入理解操作系统原理。", "en": "A deep dive into the principles of operating systems.", "ja": "オペレーティングシステムの原理を深く理解します。" },
    image: "https://picsum.photos/id/299/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 64,
    title: { "zh-CN": "《数据库系统概念》", "en": "Database System Concepts", "ja": "《データベースシステム概念》" },
    author: "Abraham Silberschatz",
    isbn: "978-7-111-21002-1",
    description: { "zh-CN": "数据库领域的权威教材。", "en": "The authoritative textbook in the field of databases.", "ja": "データベース分野の権威ある教科書です。" },
    image: "https://picsum.photos/id/300/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 65,
    title: { "zh-CN": "《深入浅出设计模式》", "en": "Head First Design Patterns", "ja": "《ヘッドファースト デザインパターン》" },
    author: "Elisabeth Freeman",
    isbn: "978-7-115-40403-6",
    description: { "zh-CN": "通过生动有趣的方式讲解设计模式。", "en": "Explains design patterns in a lively and interesting way.", "ja": "生き生きとして面白い方法でデザインパターンを解説します。" },
    image: "https://picsum.photos/id/301/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 66,
    title: { "zh-CN": "《代码大全》", "en": "Code Complete", "ja": "《コードコンプリート》" },
    author: "Steve McConnell",
    isbn: "978-7-115-40404-3",
    description: { "zh-CN": "软件构建的百科全书。", "en": "An encyclopedia of software construction.", "ja": "ソフトウェア構築の百科事典です。" },
    image: "https://picsum.photos/id/302/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 67,
    title: { "zh-CN": "《重构：改善既有代码的设计》", "en": "Refactoring: Improving the Design of Existing Code", "ja": "《リファクタリング：既存のコードを改善する》" },
    author: "Martin Fowler",
    isbn: "978-7-115-40405-0",
    description: { "zh-CN": "软件重构的经典著作。", "en": "A classic work on software refactoring.", "ja": "ソフトウェアリファクタリングに関する古典的な著作です。" },
    image: "https://picsum.photos/id/303/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 68,
    title: { "zh-CN": "《 Clean Code 》", "en": "Clean Code", "ja": "《クリーンコード》" },
    author: "Robert C. Martin",
    isbn: "978-7-115-40406-7",
    description: { "zh-CN": "关于编写可读、可维护代码的实践。", "en": "Practices for writing readable and maintainable code.", "ja": "読みやすく、保守しやすいコードを書くための実践です。" },
    image: "https://picsum.photos/id/304/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 69,
    title: { "zh-CN": "《The Pragmatic Programmer》", "en": "The Pragmatic Programmer", "ja": "《達人プログラマー》" },
    author: "Andrew Hunt",
    isbn: "978-7-115-40407-4",
    description: { "zh-CN": "程序员的修炼之道。", "en": "The path of cultivation for programmers.", "ja": "プログラマーの修練の道です。" },
    image: "https://picsum.photos/id/305/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 70,
    title: { "zh-CN": "《Head First Java》", "en": "Head First Java", "ja": "《ヘッドファースト Java》" },
    author: "Kathy Sierra",
    isbn: "978-7-115-40408-1",
    description: { "zh-CN": "Java编程的入门和实践。", "en": "Introduction and practice of Java programming.", "ja": "Javaプログラミングの入門と実践です。" },
    image: "https://picsum.photos/id/306/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 71,
    title: { "zh-CN": "《HTML和CSS设计与构建网站》", "en": "HTML and CSS: Design and Build Websites", "ja": "《HTML&CSS：ウェブサイトのデザインと構築》" },
    author: "Jon Duckett",
    isbn: "978-7-115-40409-8",
    description: { "zh-CN": "Web前端开发的入门书籍。", "en": "An introductory book for web front-end development.", "ja": "Webフロントエンド開発の入門書です。" },
    image: "https://picsum.photos/id/307/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 72,
    title: { "zh-CN": "《你不知道的JavaScript》", "en": "You Don't Know JS", "ja": "《JavaScript：あなたが知らないこと》" },
    author: "Kyle Simpson",
    isbn: "978-7-115-40410-4",
    description: { "zh-CN": "深入理解JavaScript语言。", "en": "A deep understanding of the JavaScript language.", "ja": "JavaScript言語を深く理解します。" },
    image: "https://picsum.photos/id/308/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 73,
    title: { "zh-CN": "《Vue.js实战》", "en": "Vue.js in Action", "ja": "《Vue.js 実践》" },
    author: "梁灏",
    isbn: "978-7-115-40411-1",
    description: { "zh-CN": "Vue.js前端框架的实战指南。", "en": "A practical guide to the Vue.js front-end framework.", "ja": "Vue.jsフロントエンドフレームワークの実践ガイドです。" },
    image: "https://picsum.photos/id/309/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 74,
    title: { "zh-CN": "《React小书》", "en": "The Little Book of React", "ja": "《React小冊子》" },
    author: "程墨",
    isbn: "978-7-115-40412-8",
    description: { "zh-CN": "React前端框架的入门书籍。", "en": "An introductory book to the React front-end framework.", "ja": "Reactフロントエンドフレームワークの入門書です。" },
    image: "https://picsum.photos/id/310/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 75,
    title: { "zh-CN": "《Angular权威指南》", "en": "The Definitive Guide to Angular", "ja": "《Angular権威ガイド》" },
    author: "Jeffrey Richter",
    isbn: "978-7-115-40413-5",
    description: { "zh-CN": "Angular前端框架的权威指南。", "en": "The authoritative guide to the Angular front-end framework.", "ja": "Angularフロントエンドフレームワークの権威あるガイドです。" },
    image: "https://picsum.photos/id/311/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 76,
    title: { "zh-CN": "《Node.js开发实战》", "en": "Node.js in Action", "ja": "《Node.js開発実践》" },
    author: "桑世龙",
    isbn: "978-7-115-40414-2",
    description: { "zh-CN": "Node.js后端开发的实战指南。", "en": "A practical guide to Node.js back-end development.", "ja": "Node.jsバックエンド開発の実践ガイドです。" },
    image: "https://picsum.photos/id/312/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 77,
    title: { "zh-CN": "《深入浅出Node.js》", "en": "Deep Dive into Node.js", "ja": "《Node.jsの深層》" },
    author: "朴灵",
    isbn: "978-7-115-40415-9",
    description: { "zh-CN": "深入理解Node.js的原理与实践。", "en": "A deep understanding of the principles and practices of Node.js.", "ja": "Node.jsの原理と実践を深く理解します。" },
    image: "https://picsum.photos/id/313/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 78,
    title: { "zh-CN": "《MongoDB权威指南》", "en": "MongoDB: The Definitive Guide", "ja": "《MongoDB権威ガイド》" },
    author: "Kristina Chodorow",
    isbn: "978-7-115-40416-6",
    description: { "zh-CN": "MongoDB数据库的权威指南。", "en": "The authoritative guide to the MongoDB database.", "ja": "MongoDBデータベースの権威あるガイドです。" },
    image: "https://picsum.photos/id/314/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 79,
    title: { "zh-CN": "《Redis设计与实现》", "en": "Redis Design and Implementation", "ja": "《Redisの設計と実装》" },
    author: "黄健宏",
    isbn: "978-7-115-40417-3",
    description: { "zh-CN": "Redis数据库的内部实现原理。", "en": "The internal implementation principles of the Redis database.", "ja": "Redisデータベースの内部実装原理です。" },
    image: "https://picsum.photos/id/315/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 80,
    title: { "zh-CN": "《Docker从入门到实践》", "en": "Docker from Scratch to Practice", "ja": "《Docker入門から実践まで》" },
    author: "DaoCloud",
    isbn: "978-7-115-40418-0",
    description: { "zh-CN": "Docker容器技术的入门与实践。", "en": "Introduction and practice of Docker container technology.", "ja": "Dockerコンテナ技術の入門と実践です。" },
    image: "https://picsum.photos/id/316/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 81,
    title: { "zh-CN": "《Kubernetes权威指南》", "en": "Kubernetes: The Definitive Guide", "ja": "《Kubernetes権威ガイド》" },
    author: "龚正",
    isbn: "978-7-115-40419-7",
    description: { "zh-CN": "Kubernetes容器编排的权威指南。", "en": "The authoritative guide to Kubernetes container orchestration.", "ja": "Kubernetesコンテナオーケストレーションの権威あるガイドです。" },
    image: "https://picsum.photos/id/317/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 82,
    title: { "zh-CN": "《微服务设计》", "en": "Building Microservices", "ja": "《マイクロサービス設計》" },
    author: "Sam Newman",
    isbn: "978-7-115-40420-3",
    description: { "zh-CN": "微服务架构的设计原则与实践。", "en": "Design principles and practices of microservice architecture.", "ja": "マイクロサービスアーキテクチャの設計原則と実践です。" },
    image: "https://picsum.photos/id/318/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 83,
    title: { "zh-CN": "《领域驱动设计》", "en": "Domain-Driven Design", "ja": "《ドメイン駆動設計》" },
    author: "Eric Evans",
    isbn: "978-7-115-40421-0",
    description: { "zh-CN": "DDD的经典著作。", "en": "The classic work on DDD.", "ja": "DDDの古典的な著作です。" },
    image: "https://picsum.photos/id/319/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 84,
    title: { "zh-CN": "《架构整洁之道》", "en": "Clean Architecture", "ja": "《クリーンアーキテクチャ》" },
    author: "Robert C. Martin",
    isbn: "978-7-115-40422-7",
    description: { "zh-CN": "软件架构设计的原则与实践。", "en": "Principles and practices of software architecture design.", "ja": "ソフトウェアアーキテクチャ設計の原則と実践です。" },
    image: "https://picsum.photos/id/320/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 85,
    title: { "zh-CN": "《人月神话》", "en": "The Mythical Man-Month", "ja": "《人月の神話》" },
    author: "Fred Brooks",
    isbn: "978-7-115-40423-4",
    description: { "zh-CN": "软件工程的经典著作。", "en": "A classic work on software engineering.", "ja": "ソフトウェア工学の古典的な著作です。" },
    image: "https://picsum.photos/id/321/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 86,
    title: { "zh-CN": "《浪潮之巅》", "en": "The Crest of the Wave", "ja": "《波の頂点》" },
    author: "吴军",
    isbn: "978-7-115-40424-1",
    description: { "zh-CN": "讲述IT产业发展的历史和规律。", "en": "Tells the history and laws of the development of the IT industry.", "ja": "IT産業の発展の歴史と法則を語ります。" },
    image: "https://picsum.photos/id/322/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 87,
    title: { "zh-CN": "《软技能：代码之外的生存指南》", "en": "Soft Skills: The Software Developer's Life Manual", "ja": "《ソフトスキル：コード以外の生存ガイド》" },
    author: "John Sonmez",
    isbn: "978-7-115-40425-8",
    description: { "zh-CN": "程序员职业发展和个人成长。", "en": "Career development and personal growth for programmers.", "ja": "プログラマーのキャリア開発と個人の成長。" },
    image: "https://picsum.photos/id/323/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 88,
    title: { "zh-CN": "《编码的奥秘》", "en": "The Secret of Coding", "ja": "《コーディングの秘密》" },
    author: "查尔斯·佩措尔德",
    isbn: "978-7-115-40426-5",
    description: { "zh-CN": "深入浅出地讲解编码原理。", "en": "Explains the principles of coding in a simple and profound way.", "ja": "コーディングの原理を分かりやすく解説します。" },
    image: "https://picsum.photos/id/324/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 89,
    title: { "zh-CN": "《网络是怎样连接的》", "en": "How Networks Are Connected", "ja": "《ネットワークはどのようにつながっているのか》" },
    author: "户根勤",
    isbn: "978-7-115-40427-2",
    description: { "zh-CN": "图解计算机网络基础知识。", "en": "Illustrated basic knowledge of computer networks.", "ja": "図解コンピュータネットワークの基礎知識。" },
    image: "https://picsum.photos/id/325/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 90,
    title: { "zh-CN": "《图解HTTP》", "en": "Illustrated HTTP", "ja": "《図解HTTP》" },
    author: "上野宣",
    isbn: "978-7-115-40428-9",
    description: { "zh-CN": "图解HTTP协议原理。", "en": "Illustrated principles of the HTTP protocol.", "ja": "図解HTTPプロトコルの原理。" },
    image: "https://picsum.photos/id/326/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 91,
    title: { "zh-CN": "《图解TCP/IP》", "en": "Illustrated TCP/IP", "ja": "《図解TCP/IP》" },
    author: "竹下隆史",
    isbn: "978-7-115-40429-6",
    description: { "zh-CN": "图解TCP/IP协议原理。", "en": "Illustrated principles of the TCP/IP protocol.", "ja": "図解TCP/IPプロトコルの原理。" },
    image: "https://picsum.photos/id/327/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 92,
    title: { "zh-CN": "《深入理解C++11》", "en": "A Deep Dive into C++11", "ja": "《C++11の深層理解》" },
    author: "M. Josuttis",
    isbn: "978-7-115-40430-2",
    description: { "zh-CN": "C++11新特性的深入讲解。", "en": "An in-depth explanation of the new features of C++11.", "ja": "C++11の新機能の詳細な解説。" },
    image: "https://picsum.photos/id/328/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 93,
    title: { "zh-CN": "《Effective C++》", "en": "Effective C++", "ja": "《Effective C++》" },
    author: "Scott Meyers",
    isbn: "978-7-111-21003-8",
    description: { "zh-CN": "C++编程的55个经验。", "en": "55 specific ways to improve your C++ programming.", "ja": "C++プログラミングの55の経験。" },
    image: "https://picsum.photos/id/329/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 94,
    title: { "zh-CN": "《深入理解JVM虚拟机》", "en": "Understanding the JVM", "ja": "《JVM仮想マシンの深層理解》" },
    author: "周志明",
    isbn: "978-7-115-40431-9",
    description: { "zh-CN": "Java虚拟机原理的深入剖析。", "en": "An in-depth analysis of the principles of the Java Virtual Machine.", "ja": "Java仮想マシンの原理の詳細な分析。" },
    image: "https://picsum.photos/id/330/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 95,
    title: { "zh-CN": "《Spring实战》", "en": "Spring in Action", "ja": "《Spring実践》" },
    author: "Craig Walls",
    isbn: "978-7-115-40432-6",
    description: { "zh-CN": "Spring框架的实战指南。", "en": "A practical guide to the Spring Framework.", "ja": "Springフレームワークの実践ガイド。" },
    image: "https://picsum.photos/id/331/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 96,
    title: { "zh-CN": "《MyBatis从入门到精通》", "en": "MyBatis from Scratch to Mastery", "ja": "《MyBatis入門から精通まで》" },
    author: "杨开振",
    isbn: "978-7-115-40433-3",
    description: { "zh-CN": "MyBatis框架的入门与实践。", "en": "Introduction and practice of the MyBatis framework.", "ja": "MyBatisフレームワークの入門と実践。" },
    image: "https://picsum.photos/id/332/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 97,
    title: { "zh-CN": "《Netty实战》", "en": "Netty in Action", "ja": "《Netty実践》" },
    author: "Norman Maurer",
    isbn: "978-7-115-40434-0",
    description: { "zh-CN": "Netty高性能网络编程框架。", "en": "The Netty high-performance network programming framework.", "ja": "Netty高性能ネットワークプログラミングフレームワーク。" },
    image: "https://picsum.photos/id/333/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 98,
    title: { "zh-CN": "《Kafka权威指南》", "en": "Kafka: The Definitive Guide", "ja": "《Kafka権威ガイド》" },
    author: "Neha Narkhede",
    isbn: "978-7-115-40435-7",
    description: { "zh-CN": "Kafka消息队列的权威指南。", "en": "The authoritative guide to the Kafka message queue.", "ja": "Kafkaメッセージキューの権威あるガイド。" },
    image: "https://picsum.photos/id/334/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 99,
    title: { "zh-CN": "《Hadoop权威指南》", "en": "Hadoop: The Definitive Guide", "ja": "《Hadoop権威ガイド》" },
    author: "Tom White",
    isbn: "978-7-115-40436-4",
    description: { "zh-CN": "Hadoop大数据平台的权威指南。", "en": "The authoritative guide to the Hadoop big data platform.", "ja": "Hadoopビッグデータプラットフォームの権威あるガイド。" },
    image: "https://picsum.photos/id/335/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 100,
    title: { "zh-CN": "《Spark大数据处理》", "en": "Learning Spark: Lightning-Fast Data Analytics", "ja": "《Sparkビッグデータ処理》" },
    author: "Holden Karau",
    isbn: "978-7-115-40437-1",
    description: { "zh-CN": "Spark大数据处理框架。", "en": "The Spark big data processing framework.", "ja": "Sparkビッグデータ処理フレームワーク。" },
    image: "https://picsum.photos/id/336/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 101,
    title: { "zh-CN": "《TensorFlow实战Google深度学习框架》", "en": "TensorFlow in Action: Google's Deep Learning Framework", "ja": "《TensorFlow実践Googleディープラーニングフレームワーク》" },
    author: "李嘉璇",
    isbn: "978-7-115-40438-8",
    description: { "zh-CN": "TensorFlow深度学习框架的实战。", "en": "Practical application of the TensorFlow deep learning framework.", "ja": "TensorFlowディープラーニングフレームワークの実践。" },
    image: "https://picsum.photos/id/337/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 102,
    title: { "zh-CN": "《Python机器学习》", "en": "Python Machine Learning", "ja": "《Python機械学習》" },
    author: "Sebastian Raschka",
    isbn: "978-7-115-40439-5",
    description: { "zh-CN": "Python机器学习实践。", "en": "Practical machine learning with Python.", "ja": "Python機械学習の実践。" },
    image: "https://picsum.photos/id/338/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 103,
    title: { "zh-CN": "《深度学习》", "en": "Deep Learning", "ja": "《ディープラーニング》" },
    author: "Ian Goodfellow",
    isbn: "978-7-115-40440-1",
    description: { "zh-CN": "深度学习的圣经。", "en": "The bible of deep learning.", "ja": "ディープラーニングの聖書。" },
    image: "https://picsum.photos/id/339/400/300",
    category: { "zh-CN": "计算机", "en": "Computer Science", "ja": "コンピュータ" }
  },
  {
    id: 104,
    title: { "zh-CN": "《统计学习方法》", "en": "Statistical Learning Methods", "ja": "《統計的学習法》" },
    author: "李航",
    isbn: "978-7-115-40441-8",
    description: { "zh-CN": "机器学习的数学基础。", "en": "The mathematical foundations of machine learning.", "ja": "機械学習の数学的基礎。" },
    image: "https://picsum.photos/id/340/400/300",
    category: { "zh-CN": "科学", "en": "Science", "ja": "科学" }
  },
  {
    id: 105,
    title: { "zh-CN": "《高等数学》", "en": "Advanced Mathematics", "ja": "《高等数学》" },
    author: "同济大学数学系",
    isbn: "978-7-04-000001-1",
    description: { "zh-CN": "经典大学数学教材。", "en": "A classic university mathematics textbook.", "ja": "古典的な大学数学の教科書。" },
    image: "https://picsum.photos/id/341/400/300",
    category: { "zh-CN": "科学", "en": "Science", "ja": "科学" }
  },
  {
    id: 106,
    title: { "zh-CN": "《线性代数》", "en": "Linear Algebra", "ja": "《線形代数》" },
    author: "同济大学数学系",
    isbn: "978-7-04-000002-8",
    description: { "zh-CN": "经典线性代数教材。", "en": "A classic linear algebra textbook.", "ja": "古典的な線形代数の教科書。" },
    image: "https://picsum.photos/id/342/400/300",
    category: { "zh-CN": "科学", "en": "Science", "ja": "科学" }
  },
  {
    id: 107,
    title: { "zh-CN": "《概率论与数理统计》", "en": "Probability and Mathematical Statistics", "ja": "《確率論と数理統計学》" },
    author: "浙江大学数学系",
    isbn: "978-7-04-000003-5",
    description: { "zh-CN": "概率论与数理统计教材。", "en": "A textbook on probability theory and mathematical statistics.", "ja": "確率論と数理統計学の教科書。" },
    image: "https://picsum.photos/id/343/400/300",
    category: { "zh-CN": "科学", "en": "Science", "ja": "科学" }
  },
  {
    id: 108,
    title: { "zh-CN": "《离散数学及其应用》", "en": "Discrete Mathematics and Its Applications", "ja": "《離散数学とその応用》" },
    author: "Kenneth Rosen",
    isbn: "978-7-111-21004-5",
    description: { "zh-CN": "离散数学的经典教材。", "en": "A classic textbook on discrete mathematics.", "ja": "離散数学の古典的な教科書。" },
    image: "https://picsum.photos/id/344/400/300",
    category: { "zh-CN": "科学", "en": "Science", "ja": "科学" }
  },
  {
    id: 109,
    title: { "zh-CN": "《普通物理学》", "en": "General Physics", "ja": "《一般物理学》" },
    author: "程守洙",
    isbn: "978-7-04-000004-2",
    description: { "zh-CN": "经典大学物理教材。", "en": "A classic university physics textbook.", "ja": "古典的な大学物理学の教科書。" },
    image: "https://picsum.photos/id/345/400/300",
    category: { "zh-CN": "科学", "en": "Science", "ja": "科学" }
  },
  {
    id: 110,
    title: { "zh-CN": "《化学原理》", "en": "Principles of Chemistry", "ja": "《化学の原理》" },
    author: "Zumdal",
    isbn: "978-7-04-000005-9",
    description: { "zh-CN": "经典大学化学教材。", "en": "A classic university chemistry textbook.", "ja": "古典的な大学化学の教科書。" },
    image: "https://picsum.photos/id/346/400/300",
    category: { "zh-CN": "科学", "en": "Science", "ja": "科学" }
  },
  {
    id: 111,
    title: { "zh-CN": "《生物学》", "en": "Biology", "ja": "《生物学》" },
    author: "Campbell",
    isbn: "978-7-04-000006-6",
    description: { "zh-CN": "经典大学生物学教材。", "en": "A classic university biology textbook.", "ja": "古典的な大学生物学の教科書。" },
    image: "https://picsum.photos/id/347/400/300",
    category: { "zh-CN": "科学", "en": "Science", "ja": "科学" }
  },
  {
    id: 112,
    title: { "zh-CN": "《地球科学概论》", "en": "Introduction to Earth Science", "ja": "《地球科学概論》" },
    author: "王德滋",
    isbn: "978-7-04-000007-3",
    description: { "zh-CN": "地球科学的入门教材。", "en": "An introductory textbook to earth science.", "ja": "地球科学の入門教科書。" },
    image: "https://picsum.photos/id/348/400/300",
    category: { "zh-CN": "科学", "en": "Science", "ja": "科学" }
  },
  {
    id: 113,
    title: { "zh-CN": "《天文学概论》", "en": "Introduction to Astronomy", "ja": "《天文学概論》" },
    author: "李竞",
    isbn: "978-7-04-000008-0",
    description: { "zh-CN": "天文学的入门教材。", "en": "An introductory textbook to astronomy.", "ja": "天文学の入門教科書。" },
    image: "https://picsum.photos/id/349/400/300",
    category: { "zh-CN": "科学", "en": "Science", "ja": "科学" }
  },
  {
    id: 114,
    title: { "zh-CN": "《中国近代史》", "en": "A Modern History of China", "ja": "《中国近代史》" },
    author: "蒋廷黻",
    isbn: "978-7-5404-3706-4",
    description: { "zh-CN": "简明扼要的中国近代史。", "en": "A concise modern history of China.", "ja": "簡潔明瞭な中国近代史。" },
    image: "https://picsum.photos/id/350/400/300",
    category: { "zh-CN": "历史", "en": "History", "ja": "歴史" }
  },
  {
    id: 115,
    title: { "zh-CN": "《全球通史》", "en": "A Global History", "ja": "《グローバル通史》" },
    author: "L.S. 斯塔夫里阿诺斯",
    isbn: "978-7-5404-3707-1",
    description: { "zh-CN": "世界历史的经典巨著。", "en": "A classic masterpiece of world history.", "ja": "世界史の古典的な大作。" },
    image: "https://picsum.photos/id/351/400/300",
    category: { "zh-CN": "历史", "en": "History", "ja": "歴史" }
  },
  {
    id: 116,
    title: { "zh-CN": "《罗马帝国衰亡史》", "en": "The Decline and Fall of the Roman Empire", "ja": "《ローマ帝国衰亡史》" },
    author: "爱德华·吉本",
    isbn: "978-7-5404-3708-8",
    description: { "zh-CN": "经典史学巨著。", "en": "A classic historical masterpiece.", "ja": "古典的な歴史学の大作。" },
    image: "https://picsum.photos/id/352/400/300",
    category: { "zh-CN": "历史", "en": "History", "ja": "歴史" }
  },
  {
    id: 117,
    title: { "zh-CN": "《万历十五年》", "en": "1587, a Year of No Significance", "ja": "《万暦十五年》" },
    author: "黄仁宇",
    isbn: "978-7-5404-3709-5",
    description: { "zh-CN": "以小见大的明朝历史分析。", "en": "An analysis of Ming Dynasty history from a micro-perspective.", "ja": "小から大を見る明朝の歴史分析。" },
    image: "https://picsum.photos/id/353/400/300",
    category: { "zh-CN": "历史", "en": "History", "ja": "歴史" }
  },
  {
    id: 118,
    title: { "zh-CN": "《史记》", "en": "Records of the Grand Historian", "ja": "《史記》" },
    author: "司马迁",
    isbn: "978-7-02-000223-5",
    description: { "zh-CN": "中国古代史学经典。", "en": "A classic of ancient Chinese historiography.", "ja": "中国古代史学の古典。" },
    image: "https://picsum.photos/id/354/400/300",
    category: { "zh-CN": "历史", "en": "History", "ja": "歴史" }
  },
  {
    id: 119,
    title: { "zh-CN": "《资治通鉴》", "en": "Zizhi Tongjian", "ja": "《資治通鑑》" },
    author: "司马光",
    isbn: "978-7-02-000224-2",
    description: { "zh-CN": "编年体通史巨著。", "en": "A monumental chronological general history.", "ja": "編年体の通史の大作。" },
    image: "https://picsum.photos/id/355/400/300",
    category: { "zh-CN": "历史", "en": "History", "ja": "歴史" }
  },
  {
    id: 120,
    title: { "zh-CN": "《三国演义》", "en": "Romance of the Three Kingdoms", "ja": "《三国志演義》" },
    author: "罗贯中",
    isbn: "978-7-02-000225-9",
    description: { "zh-CN": "中国古典四大名著之一。", "en": "One of the Four Great Classical Novels of Chinese literature.", "ja": "中国四大奇書の一つ。" },
    image: "https://picsum.photos/id/356/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 121,
    title: { "zh-CN": "《水浒传》", "en": "Water Margin", "ja": "《水滸伝》" },
    author: "施耐庵",
    isbn: "978-7-02-000226-6",
    description: { "zh-CN": "中国古典四大名著之一。", "en": "One of the Four Great Classical Novels of Chinese literature.", "ja": "中国四大奇書の一つ。" },
    image: "https://picsum.photos/id/357/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 122,
    title: { "zh-CN": "《西游记》", "en": "Journey to the West", "ja": "《西遊記》" },
    author: "吴承恩",
    isbn: "978-7-02-000227-3",
    description: { "zh-CN": "中国古典四大名著之一。", "en": "One of the Four Great Classical Novels of Chinese literature.", "ja": "中国四大奇書の一つ。" },
    image: "https://picsum.photos/id/358/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 123,
    title: { "zh-CN": "《悲惨世界》", "en": "Les Misérables", "ja": "《レ・ミゼラブル》" },
    author: "维克多·雨果",
    isbn: "978-7-5327-7783-6",
    description: { "zh-CN": "法国文学的经典巨著。", "en": "A classic masterpiece of French literature.", "ja": "フランス文学の古典的な大作。" },
    image: "https://picsum.photos/id/359/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 124,
    title: { "zh-CN": "《战争与和平》", "en": "War and Peace", "ja": "《戦争と平和》" },
    author: "列夫·托尔斯泰",
    isbn: "978-7-5327-7784-3",
    description: { "zh-CN": "俄国文学的巅峰之作。", "en": "The pinnacle of Russian literature.", "ja": "ロシア文学の頂点。" },
    image: "https://picsum.photos/id/360/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 125,
    title: { "zh-CN": "《静静的顿河》", "en": "And Quiet Flows the Don", "ja": "《静かなるドン》" },
    author: "米哈伊尔·肖洛霍夫",
    isbn: "978-7-5327-7785-0",
    description: { "zh-CN": "苏联文学的经典。", "en": "A classic of Soviet literature.", "ja": "ソビエト文学の古典。" },
    image: "https://picsum.photos/id/361/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 126,
    title: { "zh-CN": "《罪与罚》", "en": "Crime and Punishment", "ja": "《罪と罰》" },
    author: "陀思妥耶夫斯基",
    isbn: "978-7-5327-7786-7",
    description: { "zh-CN": "俄国心理小说经典。", "en": "A classic of Russian psychological fiction.", "ja": "ロシア心理小説の古典。" },
    image: "https://picsum.photos/id/362/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 127,
    title: { "zh-CN": "《麦田里的守望者》", "en": "The Catcher in the Rye", "ja": "《ライ麦畑でつかまえて》" },
    author: "J.D.塞林格",
    isbn: "978-7-5447-0627-0",
    description: { "zh-CN": "美国文学的经典。", "en": "A classic of American literature.", "ja": "アメリカ文学の古典。" },
    image: "https://picsum.photos/id/363/400/300",
    category: { "zh-CN": "小说", "en": "Fiction", "ja": "小説" }
  },
  {
    id: 128,
    title: { "zh-CN": "《了不起的盖茨比》", "en": "The Great Gatsby", "ja": "《グレート・ギャツビー》" },
    author: "F.斯科特·菲茨杰拉德",
    isbn: "978-7-5447-0628-7",
    description: { "zh-CN": "美国文学的经典小说。", "en": "A classic novel of American literature.", "ja": "アメリカ文学の古典小説。" },
    image: "https://picsum.photos/id/364/400/300",
    category: { "zh-CN": "小说", "en": "Fiction", "ja": "小説" }
  },
  {
    id: 129,
    title: { "zh-CN": "《挪威的森林》", "en": "Norwegian Wood", "ja": "《ノルウェイの森》" },
    author: "村上春树",
    isbn: "978-7-5327-7787-4",
    description: { "zh-CN": "日本文学的代表作。", "en": "A representative work of Japanese literature.", "ja": "日本文学の代表作。" },
    image: "https://picsum.photos/id/365/400/300",
    category: { "zh-CN": "小说", "en": "Fiction", "ja": "小説" }
  },
  {
    id: 130,
    title: { "zh-CN": "《白夜行》", "en": "Journey Under the Midnight Sun", "ja": "《白夜行》" },
    author: "东野圭吾",
    isbn: "978-7-5327-7788-1",
    description: { "zh-CN": "日本推理小说。", "en": "A Japanese mystery novel.", "ja": "日本の推理小説。" },
    image: "https://picsum.photos/id/366/400/300",
    category: { "zh-CN": "小说", "en": "Fiction", "ja": "小説" }
  },
  {
    id: 131,
    title: { "zh-CN": "《解忧杂货店》", "en": "The Miracles of the Namiya General Store", "ja": "《ナミヤ雑貨店の奇蹟》" },
    author: "东野圭吾",
    isbn: "978-7-5327-7789-8",
    description: { "zh-CN": "日本温情小说。", "en": "A heartwarming Japanese novel.", "ja": "日本の心温まる小説。" },
    image: "https://picsum.photos/id/367/400/300",
    category: { "zh-CN": "小说", "en": "Fiction", "ja": "小説" }
  },
  {
    id: 132,
    title: { "zh-CN": "《明天的记忆》", "en": "Memories of Tomorrow", "ja": "《明日の記憶》" },
    author: "东野圭吾",
    isbn: "978-7-5327-7790-4",
    description: { "zh-CN": "日本科幻小说。", "en": "A Japanese science fiction novel.", "ja": "日本のSF小説。" },
    image: "https://picsum.photos/id/368/400/300",
    category: { "zh-CN": "小说", "en": "Fiction", "ja": "小説" }
  },
  {
    id: 133,
    title: { "zh-CN": "《秘密》", "en": "Naoko", "ja": "《秘密》" },
    author: "东野圭吾",
    isbn: "978-7-5327-7791-1",
    description: { "zh-CN": "日本奇幻小说。", "en": "A Japanese fantasy novel.", "ja": "日本のファンタジー小説。" },
    image: "https://picsum.photos/id/369/400/300",
    category: { "zh-CN": "小说", "en": "Fiction", "ja": "小説" }
  },
  {
    id: 134,
    title: { "zh-CN": "《恶意》", "en": "Malice", "ja": "《悪意》" },
    author: "东野圭吾",
    isbn: "978-7-5327-7792-8",
    description: { "zh-CN": "日本悬疑小说。", "en": "A Japanese suspense novel.", "ja": "日本のサスペンス小説。" },
    image: "https://picsum.photos/id/370/400/300",
    category: { "zh-CN": "小说", "en": "Fiction", "ja": "小説" }
  },
  {
    id: 135,
    title: { "zh-CN": "《彷徨》", "en": "Wandering", "ja": "《彷徨》" },
    author: "鲁迅",
    isbn: "978-7-02-000228-0",
    description: { "zh-CN": "鲁迅短篇小说集。", "en": "A collection of short stories by Lu Xun.", "ja": "魯迅の短編集。" },
    image: "https://picsum.photos/id/371/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 136,
    title: { "zh-CN": "《呐喊》", "en": "Call to Arms", "ja": "《吶喊》" },
    author: "鲁迅",
    isbn: "978-7-02-000229-7",
    description: { "zh-CN": "鲁迅短篇小说集。", "en": "A collection of short stories by Lu Xun.", "ja": "魯迅の短編集。" },
    image: "https://picsum.photos/id/372/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 137,
    title: { "zh-CN": "《朝花夕拾》", "en": "Dawn Blossoms Plucked at Dusk", "ja": "《朝花夕拾》" },
    author: "鲁迅",
    isbn: "978-7-02-000230-3",
    description: { "zh-CN": "鲁迅散文集。", "en": "A collection of essays by Lu Xun.", "ja": "魯迅のエッセイ集。" },
    image: "https://picsum.photos/id/373/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 138,
    title: { "zh-CN": "《狂人日记》", "en": "A Madman's Diary", "ja": "《狂人日記》" },
    author: "鲁迅",
    isbn: "978-7-02-000231-0",
    description: { "zh-CN": "鲁迅小说代表作。", "en": "A representative novel by Lu Xun.", "ja": "魯迅の代表的な小説。" },
    image: "https://picsum.photos/id/374/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 139,
    title: { "zh-CN": "《骆驼祥子》", "en": "Rickshaw Boy", "ja": "《駱駝祥子》" },
    author: "老舍",
    isbn: "978-7-5327-7793-5",
    description: { "zh-CN": "老舍小说代表作。", "en": "A representative novel by Lao She.", "ja": "老舎の代表的な小説。" },
    image: "https://picsum.photos/id/375/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 140,
    title: { "zh-CN": "《雷雨》", "en": "Thunderstorm", "ja": "《雷雨》" },
    author: "曹禺",
    isbn: "978-7-5327-7794-2",
    description: { "zh-CN": "曹禺话剧代表作。", "en": "A representative play by Cao Yu.", "ja": "曹禺の代表的な戯曲。" },
    image: "https://picsum.photos/id/376/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 141,
    title: { "zh-CN": "《茶馆》", "en": "Teahouse", "ja": "《茶館》" },
    author: "老舍",
    isbn: "978-7-5327-7795-9",
    description: { "zh-CN": "老舍话剧代表作。", "en": "A representative play by Lao She.", "ja": "老舎の代表的な戯曲。" },
    image: "https://picsum.photos/id/377/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 142,
    title: { "zh-CN": "《边城》", "en": "The Border Town", "ja": "《辺城》" },
    author: "沈从文",
    isbn: "978-7-5327-7796-6",
    description: { "zh-CN": "沈从文小说代表作。", "en": "A representative novel by Shen Congwen.", "ja": "沈従文の代表的な小説。" },
    image: "https://picsum.photos/id/378/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 143,
    title: { "zh-CN": "《平凡的世界》", "en": "Ordinary World", "ja": "《平凡な世界》" },
    author: "路遥",
    isbn: "978-7-5327-7797-3",
    description: { "zh-CN": "路遥长篇小说代表作。", "en": "A representative long novel by Lu Yao.", "ja": "路遥の代表的な長編小説。" },
    image: "https://picsum.photos/id/379/400/300",
    category: { "zh-CN": "小说", "en": "Fiction", "ja": "小説" }
  },
  {
    id: 144,
    title: { "zh-CN": "《白鹿原》", "en": "White Deer Plain", "ja": "《白鹿原》" },
    author: "陈忠实",
    isbn: "978-7-5327-7798-0",
    description: { "zh-CN": "陈忠实长篇小说代表作。", "en": "A representative long novel by Chen Zhongshi.", "ja": "陳忠実の代表的な長編小説。" },
    image: "https://picsum.photos/id/380/400/300",
    category: { "zh-CN": "小说", "en": "Fiction", "ja": "小説" }
  },
  {
    id: 145,
    title: { "zh-CN": "《许三观卖血记》", "en": "Chronicle of a Blood Merchant", "ja": "《許三観売血記》" },
    author: "余华",
    isbn: "978-7-5327-7799-7",
    description: { "zh-CN": "余华小说代表作。", "en": "A representative novel by Yu Hua.", "ja": "余華の代表的な小説。" },
    image: "https://picsum.photos/id/381/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 146,
    title: { "zh-CN": "《兄弟》", "en": "Brothers", "ja": "《兄弟》" },
    author: "余华",
    isbn: "978-7-5327-7800-0",
    description: { "zh-CN": "余华长篇小说。", "en": "A long novel by Yu Hua.", "ja": "余華の長編小説。" },
    image: "https://picsum.photos/id/382/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 147,
    title: { "zh-CN": "《我们仨》", "en": "We Three", "ja": "《私たち三人》" },
    author: "杨绛",
    isbn: "978-7-5327-7801-7",
    description: { "zh-CN": "杨绛回忆散文。", "en": "A memoir essay by Yang Jiang.", "ja": "楊絳の回想録エッセイ。" },
    image: "https://picsum.photos/id/383/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 148,
    title: { "zh-CN": "《傅雷家书》", "en": "Fu Lei's Family Letters", "ja": "《傅雷家信》" },
    author: "傅雷",
    isbn: "978-7-5327-7802-4",
    description: { "zh-CN": "傅雷与儿子傅聪的家书集。", "en": "A collection of letters between Fu Lei and his son Fu Cong.", "ja": "傅雷と息子傅聰の間の手紙集。" },
    image: "https://picsum.photos/id/384/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 149,
    title: { "zh-CN": "《平凡的谎言》", "en": "Just After Sunset", "ja": "《平凡な嘘》" },
    author: "史蒂芬·金",
    isbn: "978-7-5327-7803-1",
    description: { "zh-CN": "史蒂芬·金短篇小说集。", "en": "A collection of short stories by Stephen King.", "ja": "スティーヴン・キングの短編集。" },
    image: "https://picsum.photos/id/385/400/300",
    category: { "zh-CN": "小说", "en": "Fiction", "ja": "小説" }
  },
  {
    id: 150,
    title: { "zh-CN": "《肖申克的救赎》", "en": "The Shawshank Redemption", "ja": "《ショーシャンクの空に》" },
    author: "史蒂芬·金",
    isbn: "978-7-5447-0629-4",
    description: { "zh-CN": "史蒂芬·金中篇小说。", "en": "A novella by Stephen King.", "ja": "スティーヴン・キングの中編小説。" },
    image: "https://picsum.photos/id/386/400/300",
    category: { "zh-CN": "小说", "en": "Fiction", "ja": "小説" }
  },
  {
    id: 151,
    title: { "zh-CN": "《绿里奇迹》", "en": "The Green Mile", "ja": "《グリーンマイル》" },
    author: "史蒂芬·金",
    isbn: "978-7-5447-0630-0",
    description: { "zh-CN": "史蒂芬·金小说。", "en": "A novel by Stephen King.", "ja": "スティーヴン・キングの小説。" },
    image: "https://picsum.photos/id/387/400/300",
    category: { "zh-CN": "小说", "en": "Fiction", "ja": "小説" }
  },
  {
    id: 152,
    title: { "zh-CN": "《达芬奇密码》", "en": "The Da Vinci Code", "ja": "《ダ・ヴィンチ・コード》" },
    author: "丹·布朗",
    isbn: "978-7-5447-0631-7",
    description: { "zh-CN": "丹·布朗悬疑小说。", "en": "A suspense novel by Dan Brown.", "ja": "ダン・ブラウンのサスペンス小説。" },
    image: "https://picsum.photos/id/388/400/300",
    category: { "zh-CN": "小说", "en": "Fiction", "ja": "小説" }
  },
  {
    id: 153,
    title: { "zh-CN": "《天使与魔鬼》", "en": "Angels & Demons", "ja": "《天使と悪魔》" },
    author: "丹·布朗",
    isbn: "978-7-5447-0632-4",
    description: { "zh-CN": "丹·布朗悬疑小说。", "en": "A suspense novel by Dan Brown.", "ja": "ダン・ブラウンのサスペンス小説。" },
    image: "https://picsum.photos/id/389/400/300",
    category: { "zh-CN": "小说", "en": "Fiction", "ja": "小説" }
  },
  {
    id: 154,
    title: { "zh-CN": "《地狱》", "en": "Inferno", "ja": "《インフェルノ》" },
    author: "丹·布朗",
    isbn: "978-7-5447-0633-1",
    description: { "zh-CN": "丹·布朗悬疑小说。", "en": "A suspense novel by Dan Brown.", "ja": "ダン・ブラウンのサスペンス小説。" },
    image: "https://picsum.photos/id/390/400/300",
    category: { "zh-CN": "小说", "en": "Fiction", "ja": "小説" }
  },
  {
    id: 155,
    title: { "zh-CN": "《起源》", "en": "Origin", "ja": "《オリジン》" },
    author: "丹·布朗",
    isbn: "978-7-5447-0634-8",
    description: { "zh-CN": "丹·布朗悬疑小说。", "en": "A suspense novel by Dan Brown.", "ja": "ダン・ブラウンのサスペンス小説。" },
    image: "https://picsum.photos/id/391/400/300",
    category: { "zh-CN": "小说", "en": "Fiction", "ja": "小説" }
  },
  {
    id: 156,
    title: { "zh-CN": "《大侦探福尔摩斯全集》", "en": "The Complete Sherlock Holmes", "ja": "《シャーロック・ホームズ全集》" },
    author: "阿瑟·柯南·道尔",
    isbn: "978-7-5447-0635-5",
    description: { "zh-CN": "经典侦探小说。", "en": "Classic detective fiction.", "ja": "古典的な探偵小説。" },
    image: "https://picsum.photos/id/392/400/300",
    category: { "zh-CN": "小说", "en": "Fiction", "ja": "小説" }
  },
  {
    id: 157,
    title: { "zh-CN": "《阿加莎·克里斯蒂侦探小说集》", "en": "The Agatha Christie Detective Novel Collection", "ja": "《アガサ・クリスティ探偵小説集》" },
    author: "阿加莎·克里斯蒂",
    isbn: "978-7-5447-0636-2",
    description: { "zh-CN": "经典侦探小说。", "en": "Classic detective fiction.", "ja": "古典的な探偵小説。" },
    image: "https://picsum.photos/id/393/400/300",
    category: { "zh-CN": "小说", "en": "Fiction", "ja": "小説" }
  },
  {
    id: 158,
    title: { "zh-CN": "《福尔摩斯探案全集》", "en": "The Complete Adventures of Sherlock Holmes", "ja": "《シャーロック・ホームズの冒険全集》" },
    author: "阿瑟·柯南·道尔",
    isbn: "978-7-5447-0637-9",
    description: { "zh-CN": "经典侦探小说。", "en": "Classic detective fiction.", "ja": "古典的な探偵小説。" },
    image: "https://picsum.photos/id/394/400/300",
    category: { "zh-CN": "小说", "en": "Fiction", "ja": "小説" }
  },
  {
    id: 159,
    title: { "zh-CN": "《东方快车谋杀案》", "en": "Murder on the Orient Express", "ja": "《オリエント急行殺人事件》" },
    author: "阿加莎·克里斯蒂",
    isbn: "978-7-5447-0638-6",
    description: { "zh-CN": "经典推理小说。", "en": "A classic mystery novel.", "ja": "古典的な推理小説。" },
    image: "https://picsum.photos/id/395/400/300",
    category: { "zh-CN": "小说", "en": "Fiction", "ja": "小説" }
  },
  {
    id: 160,
    title: { "zh-CN": "《无人生还》", "en": "And Then There Were None", "ja": "《そして誰もいなくなった》" },
    author: "阿加莎·克里斯蒂",
    isbn: "978-7-5447-0639-3",
    description: { "zh-CN": "经典推理小说。", "en": "A classic mystery novel.", "ja": "古典的な推理小説。" },
    image: "https://picsum.photos/id/396/400/300",
    category: { "zh-CN": "小说", "en": "Fiction", "ja": "小説" }
  },
  {
    id: 161,
    title: { "zh-CN": "《罗生门》", "en": "Rashomon", "ja": "《羅生門》" },
    author: "芥川龙之介",
    isbn: "978-7-5327-7804-8",
    description: { "zh-CN": "日本经典短篇小说集。", "en": "A classic collection of Japanese short stories.", "ja": "日本の古典的な短編集。" },
    image: "https://picsum.photos/id/397/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 162,
    title: { "zh-CN": "《人间失格》", "en": "No Longer Human", "ja": "《人間失格》" },
    author: "太宰治",
    isbn: "978-7-5327-7805-5",
    description: { "zh-CN": "日本经典小说。", "en": "A classic Japanese novel.", "ja": "日本の古典小説。" },
    image: "https://picsum.photos/id/398/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 163,
    title: { "zh-CN": "《雪国》", "en": "Snow Country", "ja": "《雪国》" },
    author: "川端康成",
    isbn: "978-7-5327-7806-2",
    description: { "zh-CN": "日本经典小说。", "en": "A classic Japanese novel.", "ja": "日本の古典小説。" },
    image: "https://picsum.photos/id/399/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 164,
    title: { "zh-CN": "《心》", "en": "Kokoro", "ja": "《こころ》" },
    author: "夏目漱石",
    isbn: "978-7-5327-7807-9",
    description: { "zh-CN": "日本经典小说。", "en": "A classic Japanese novel.", "ja": "日本の古典小説。" },
    image: "https://picsum.photos/id/400/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 165,
    title: { "zh-CN": "《局外人》", "en": "The Stranger", "ja": "《異邦人》" },
    author: "阿尔贝·加缪",
    isbn: "978-7-5327-7808-6",
    description: { "zh-CN": "存在主义文学经典。", "en": "A classic of existentialist literature.", "ja": "実存主義文学の古典。" },
    image: "https://picsum.photos/id/401/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 166,
    title: { "zh-CN": "《鼠疫》", "en": "The Plague", "ja": "《ペスト》" },
    author: "阿尔贝·加缪",
    isbn: "978-7-5327-7809-3",
    description: { "zh-CN": "存在主义文学经典。", "en": "A classic of existentialist literature.", "ja": "実存主義文学の古典。" },
    image: "https://picsum.photos/id/402/400/300",
    category: { "zh-CN": "文学", "en": "Literature", "ja": "文学" }
  },
  {
    id: 167,
    title: { "zh-CN": "《西西弗斯神话》", "en": "The Myth of Sisyphus", "ja": "《シーシュポスの神話》" },
    author: "阿尔贝·加缪",
    isbn: "978-7-5327-7810-9",
    description: { "zh-CN": "存在主义哲学经典。", "en": "A classic of existentialist philosophy.", "ja": "実存主義哲学の古典。" },
    image: "https://picsum.photos/id/403/400/300",
    category: { "zh-CN": "哲学", "en": "Philosophy", "ja": "哲学" }
  },
  {
    id: 168,
    title: { "zh-CN": "《存在与时间》", "en": "Being and Time", "ja": "《存在と時間》" },
    author: "马丁·海德格尔",
    isbn: "978-7-5327-7811-6",
    description: { "zh-CN": "存在主义哲学经典。", "en": "A classic of existentialist philosophy.", "ja": "実存主義哲学の古典。" },
    image: "https://picsum.photos/id/404/400/300",
    category: { "zh-CN": "哲学", "en": "Philosophy", "ja": "哲学" }
  },
  {
    id: 169,
    title: { "zh-CN": "《查拉图斯特拉如是说》", "en": "Thus Spoke Zarathustra", "ja": "《ツァラトゥストラはかく語りき》" },
    author: "弗里德里希·尼采",
    isbn: "978-7-5327-7812-3",
    description: { "zh-CN": "尼采哲学经典。", "en": "A classic of Nietzschean philosophy.", "ja": "ニーチェ哲学の古典。" },
    image: "https://picsum.photos/id/405/400/300",
    category: { "zh-CN": "哲学", "en": "Philosophy", "ja": "哲学" }
  },
  {
    id: 170,
    title: { "zh-CN": "《悲剧的诞生》", "en": "The Birth of Tragedy", "ja": "《悲劇の誕生》" },
    author: "弗里德里希·尼采",
    isbn: "978-7-5327-7813-0",
    description: { "zh-CN": "尼采哲学经典。", "en": "A classic of Nietzschean philosophy.", "ja": "ニーチェ哲学の古典。" },
    image: "https://picsum.photos/id/406/400/300",
    category: { "zh-CN": "哲学", "en": "Philosophy", "ja": "哲学" }
  },
  {
    id: 171,
    title: { "zh-CN": "《哲学的故事》", "en": "The Story of Philosophy", "ja": "《哲学の物語》" },
    author: "威尔·杜兰",
    isbn: "978-7-5327-7814-7",
    description: { "zh-CN": "哲学入门读物。", "en": "An introductory reader on philosophy.", "ja": "哲学入門書。" },
    image: "https://picsum.photos/id/407/400/300",
    category: { "zh-CN": "哲学", "en": "Philosophy", "ja": "哲学" }
  },
  {
    id: 172,
    title: { "zh-CN": "《西方哲学史讲演录》", "en": "Lectures on the History of Western Philosophy", "ja": "《西洋哲学史講義録》" },
    author: "黑格尔",
    isbn: "978-7-5327-7815-4",
    description: { "zh-CN": "黑格尔哲学经典。", "en": "A classic of Hegelian philosophy.", "ja": "ヘーゲル哲学の古典。" },
    image: "https://picsum.photos/id/408/400/300",
    category: { "zh-CN": "哲学", "en": "Philosophy", "ja": "哲学" }
  },
  {
    id: 173,
    title: { "zh-CN": "《纯粹理性批判》", "en": "Critique of Pure Reason", "ja": "《純粋理性批判》" },
    author: "伊曼努尔·康德",
    isbn: "978-7-5327-7816-1",
    description: { "zh-CN": "康德哲学经典。", "en": "A classic of Kantian philosophy.", "ja": "カント哲学の古典。" },
    image: "https://picsum.photos/id/409/400/300",
    category: { "zh-CN": "哲学", "en": "Philosophy", "ja": "哲学" }
  },
  {
    id: 174,
    title: { "zh-CN": "《小逻辑》", "en": "The Encyclopedia Logic", "ja": "《小論理学》" },
    author: "黑格尔",
    isbn: "978-7-5327-7817-8",
    description: { "zh-CN": "黑格尔哲学入门。", "en": "An introduction to Hegelian philosophy.", "ja": "ヘーゲル哲学入門。" },
    image: "https://picsum.photos/id/410/400/300",
    category: { "zh-CN": "哲学", "en": "Philosophy", "ja": "哲学" }
  },
  {
    id: 175,
    title: { "zh-CN": "《论自由》", "en": "On Liberty", "ja": "《自由論》" },
    author: "约翰·密尔",
    isbn: "978-7-5327-7818-5",
    description: { "zh-CN": "政治哲学经典。", "en": "A classic of political philosophy.", "ja": "政治哲学の古典。" },
    image: "https://picsum.photos/id/411/400/300",
    category: { "zh-CN": "哲学", "en": "Philosophy", "ja": "哲学" }
  },
  {
    id: 176,
    title: { "zh-CN": "《君主论》", "en": "The Prince", "ja": "《君主論》" },
    author: "马基雅维利",
    isbn: "978-7-5327-7819-2",
    description: { "zh-CN": "政治哲学经典。", "en": "A classic of political philosophy.", "ja": "政治哲学の古典。" },
    image: "https://picsum.photos/id/412/400/300",
    category: { "zh-CN": "哲学", "en": "Philosophy", "ja": "哲学" }
  },
  {
    id: 177,
    title: { "zh-CN": "《利维坦》", "en": "Leviathan", "ja": "《リヴァイアサン》" },
    author: "托马斯·霍布斯",
    isbn: "978-7-5327-7820-8",
    description: { "zh-CN": "政治哲学经典。", "en": "A classic of political philosophy.", "ja": "政治哲学の古典。" },
    image: "https://picsum.photos/id/413/400/300",
    category: { "zh-CN": "哲学", "en": "Philosophy", "ja": "哲学" }
  },
  {
    id: 178,
    title: { "zh-CN": "《社会契约论》", "en": "The Social Contract", "ja": "《社会契約論》" },
    author: "让-雅克·卢梭",
    isbn: "978-7-5327-7821-5",
    description: { "zh-CN": "政治哲学经典。", "en": "A classic of political philosophy.", "ja": "政治哲学の古典。" },
    image: "https://picsum.photos/id/414/400/300",
    category: { "zh-CN": "哲学", "en": "Philosophy", "ja": "哲学" }
  },
  {
    id: 179,
    title: { "zh-CN": "《资本论》", "en": "Das Kapital", "ja": "《資本論》" },
    author: "卡尔·马克思",
    isbn: "978-7-5327-7822-2",
    description: { "zh-CN": "经济学和哲学经典。", "en": "A classic of economics and philosophy.", "ja": "経済学と哲学の古典。" },
    image: "https://picsum.photos/id/415/400/300",
    category: { "zh-CN": "哲学", "en": "Philosophy", "ja": "哲学" }
  },
  {
    id: 180,
    title: { "zh-CN": "《全球化：一部历史》", "en": "Globalization: A History", "ja": "《グローバリゼーション：ある歴史》" },
    author: "彼得·伯克",
    isbn: "978-7-5404-3710-1",
    description: { "zh-CN": "全球化历史研究。", "en": "A historical study of globalization.", "ja": "グローバリゼーションの歴史研究。" },
    image: "https://picsum.photos/id/416/400/300",
    category: { "zh-CN": "历史", "en": "History", "ja": "歴史" }
  },
  {
    id: 181,
    title: { "zh-CN": "《历史的观念》", "en": "The Idea of History", "ja": "《歴史の観念》" },
    author: "R.G.科林伍德",
    isbn: "978-7-5404-3711-8",
    description: { "zh-CN": "历史哲学经典。", "en": "A classic of the philosophy of history.", "ja": "歴史哲学の古典。" },
    image: "https://picsum.photos/id/417/400/300",
    category: { "zh-CN": "历史", "en": "History", "ja": "歴史" }
  },
  {
    id: 182,
    title: { "zh-CN": "《历史是什么》", "en": "What Is History?", "ja": "《歴史とは何か》" },
    author: "E.H.卡尔",
    isbn: "978-7-5404-3712-5",
    description: { "zh-CN": "历史理论经典。", "en": "A classic of historical theory.", "ja": "歴史理論の古典。" },
    image: "https://picsum.photos/id/418/400/300",
    category: { "zh-CN": "历史", "en": "History", "ja": "歴史" }
  },
  {
    id: 183,
    title: { "zh-CN": "《菊次郎的夏天》", "en": "Kikujiro's Summer", "ja": "《菊次郎の夏》" },
    author: "北野武",
    isbn: "978-7-5447-0640-9",
    description: { "zh-CN": "日本电影剧本。", "en": "A Japanese film screenplay.", "ja": "日本の映画脚本。" },
    image: "https://picsum.photos/id/419/400/300",
    category: { "zh-CN": "艺术", "en": "Art", "ja": "芸術" }
  },
  {
    id: 184,
    title: { "zh-CN": "《百年电影》", "en": "A Century of Cinema", "ja": "《百年映画》" },
    author: "马丁·斯科塞斯",
    isbn: "978-7-5447-0641-6",
    description: { "zh-CN": "电影史概览。", "en": "An overview of film history.", "ja": "映画史概観。" },
    image: "https://picsum.photos/id/420/400/300",
    category: { "zh-CN": "艺术", "en": "Art", "ja": "芸術" }
  },
  {
    id: 185,
    title: { "zh-CN": "《认识电影》", "en": "Understanding Movies", "ja": "《映画を理解する》" },
    author: "路易斯·贾内蒂",
    isbn: "978-7-5447-0642-3",
    description: { "zh-CN": "电影艺术入门。", "en": "An introduction to the art of film.", "ja": "映画芸術入門。" },
    image: "https://picsum.photos/id/421/400/300",
    category: { "zh-CN": "艺术", "en": "Art", "ja": "芸術" }
  },
  {
    id: 186,
    title: { "zh-CN": "《电影的艺术》", "en": "Film Art: An Introduction", "ja": "《映画の芸術》" },
    author: "大卫·波德维尔",
    isbn: "978-7-5447-0643-0",
    description: { "zh-CN": "电影理论经典。", "en": "A classic of film theory.", "ja": "映画理論の古典。" },
    image: "https://picsum.photos/id/422/400/300",
    category: { "zh-CN": "艺术", "en": "Art", "ja": "芸術" }
  },
  {
    id: 187,
    title: { "zh-CN": "《西方美术史》", "en": "A History of Western Art", "ja": "《西洋美術史》" },
    author: "马尔科姆·阿基博尔德",
    isbn: "978-7-5327-7823-9",
    description: { "zh-CN": "西方美术史入门。", "en": "An introduction to the history of Western art.", "ja": "西洋美術史入門。" },
    image: "https://picsum.photos/id/423/400/300",
    category: { "zh-CN": "艺术", "en": "Art", "ja": "芸術" }
  },
  {
    id: 188,
    title: { "zh-CN": "《中国美术史》", "en": "A History of Chinese Art", "ja": "《中国美術史》" },
    author: "王伯敏",
    isbn: "978-7-5327-7824-6",
    description: { "zh-CN": "中国美术史入门。", "en": "An introduction to the history of Chinese art.", "ja": "中国美術史入門。" },
    image: "https://picsum.photos/id/424/400/300",
    category: { "zh-CN": "艺术", "en": "Art", "ja": "芸術" }
  },
  {
    id: 189,
    title: { "zh-CN": "《艺术概论》", "en": "Introduction to Art", "ja": "《芸術概論》" },
    author: "彭吉象",
    isbn: "978-7-5327-7825-3",
    description: { "zh-CN": "艺术理论入门。", "en": "An introduction to art theory.", "ja": "芸術理論入門。" },
    image: "https://picsum.photos/id/425/400/300",
    category: { "zh-CN": "艺术", "en": "Art", "ja": "芸術" }
  },
  {
    id: 190,
    title: { "zh-CN": "《设计心理学》", "en": "The Design of Everyday Things", "ja": "《デザインの心理学》" },
    author: "唐纳德·A·诺曼",
    isbn: "978-7-5086-4531-9",
    description: { "zh-CN": "设计与心理学结合。", "en": "The combination of design and psychology.", "ja": "デザインと心理学の融合。" },
    image: "https://picsum.photos/id/426/400/300",
    category: { "zh-CN": "心理学", "en": "Psychology", "ja": "心理学" }
  },
  {
    id: 191,
    title: { "zh-CN": "《决策与判断》", "en": "Decision and Judgment", "ja": "《意思決定と判断》" },
    author: "斯科特·普劳斯",
    isbn: "978-7-5086-5870-8",
    description: { "zh-CN": "决策心理学。", "en": "The psychology of decision-making.", "ja": "意思決定の心理学。" },
    image: "https://picsum.photos/id/427/400/300",
    category: { "zh-CN": "心理学", "en": "Psychology", "ja": "心理学" }
  },
  {
    id: 192,
    title: { "zh-CN": "《思考，快与慢》", "en": "Thinking, Fast and Slow", "ja": "《ファスト＆スロー》" },
    author: "丹尼尔·卡尼曼",
    isbn: "978-7-5086-5871-5",
    description: { "zh-CN": "行为经济学经典。", "en": "A classic of behavioral economics.", "ja": "行動経済学の古典。" },
    image: "https://picsum.photos/id/428/400/300",
    category: { "zh-CN": "心理学", "en": "Psychology", "ja": "心理学" }
  },
  {
    id: 193,
    title: { "zh-CN": "《影响力2》", "en": "Influence: Science and Practice", "ja": "《影響力の武器2》" },
    author: "罗伯特·西奥迪尼",
    isbn: "978-7-5086-5872-2",
    description: { "zh-CN": "影响力续集。", "en": "The sequel to Influence.", "ja": "影響力の続編。" },
    image: "https://picsum.photos/id/429/400/300",
    category: { "zh-CN": "心理学", "en": "Psychology", "ja": "心理学" }
  },
  {
    id: 194,
    title: { "zh-CN": "《情商》", "en": "Emotional Intelligence", "ja": "《EQ こころの知能指数》" },
    author: "丹尼尔·戈尔曼",
    isbn: "978-7-5086-4532-6",
    description: { "zh-CN": "情商理论。", "en": "The theory of emotional intelligence.", "ja": "感情的知性の理論。" },
    image: "https://picsum.photos/id/430/400/300",
    category: { "zh-CN": "心理学", "en": "Psychology", "ja": "心理学" }
  },
  {
    id: 195,
    title: { "zh-CN": "《怪诞行为学》", "en": "Predictably Irrational", "ja": "《予想どおりに不合理》" },
    author: "丹·艾瑞里",
    isbn: "978-7-5086-5873-9",
    description: { "zh-CN": "行为经济学。", "en": "Behavioral economics.", "ja": "行動経済学。" },
    image: "https://picsum.photos/id/431/400/300",
    category: { "zh-CN": "心理学", "en": "Psychology", "ja": "心理学" }
  },
  {
    id: 196,
    title: { "zh-CN": "《拖延心理学》", "en": "The Procrastination Equation", "ja": "《先延ばし心理学》" },
    author: "简·博克",
    isbn: "978-7-5086-5874-6",
    description: { "zh-CN": "拖延症心理分析。", "en": "A psychological analysis of procrastination.", "ja": "先延ばし症の心理分析。" },
    image: "https://picsum.photos/id/432/400/300",
    category: { "zh-CN": "心理学", "en": "Psychology", "ja": "心理学" }
  },
  {
    id: 197,
    title: { "zh-CN": "《原生家庭》", "en": "Toxic Parents", "ja": "《毒になる親》" },
    author: "苏珊·福沃德",
    isbn: "978-7-5086-5875-3",
    description: { "zh-CN": "原生家庭对人的影响。", "en": "The impact of the family of origin on a person.", "ja": "原生家庭が人に与える影響。" },
    image: "https://picsum.photos/id/433/400/300",
    category: { "zh-CN": "心理学", "en": "Psychology", "ja": "心理学" }
  },
  {
    id: 198,
    title: { "zh-CN": "《被讨厌的勇气》", "en": "The Courage to Be Disliked", "ja": "《嫌われる勇気》" },
    author: "岸见一郎",
    isbn: "978-7-5086-5876-0",
    description: { "zh-CN": "阿德勒心理学入门。", "en": "An introduction to Adlerian psychology.", "ja": "アドラー心理学入門。" },
    image: "https://picsum.photos/id/434/400/300",
    category: { "zh-CN": "心理学", "en": "Psychology", "ja": "心理学" }
  },
  {
    id: 199,
    title: { "zh-CN": "《精力管理》", "en": "The Power of Full Engagement", "ja": "《精力管理》" },
    author: "吉姆·洛尔",
    isbn: "978-7-5086-5877-7",
    description: { "zh-CN": "高效精力管理。", "en": "Efficient energy management.", "ja": "効率的な精力管理。" },
    image: "https://picsum.photos/id/435/400/300",
    category: { "zh-CN": "心理学", "en": "Psychology", "ja": "心理学" }
  },
  {
    id: 200,
    title: { "zh-CN": "《掌控习惯》", "en": "Atomic Habits", "ja": "《アトミック・ハビッツ》" },
    author: "詹姆斯·克利尔",
    isbn: "978-7-5086-5878-4",
    description: { "zh-CN": "习惯养成方法。", "en": "Methods for habit formation.", "ja": "習慣形成の方法。" },
    image: "https://picsum.photos/id/436/400/300",
    category: { "zh-CN": "心理学", "en": "Psychology", "ja": "心理学" }
  }
];