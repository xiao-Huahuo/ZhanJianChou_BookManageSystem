// --- 全局模拟数据库对象 ---
const DB = {
    DATA_KEY: 'librarySystemData',

    // 初始化数据库
    init: function() {
        try {
            let data = localStorage.getItem(this.DATA_KEY);
            if (!data) {
                console.log("Initializing database for the first time...");
                const defaultData = {
                    // 全局图书状态，用于跟踪哪本书被谁借了
                    globalBookStatus: {}, 
                    // 用户数据存储
                    users: {
                        "zhangsan": {
                            password: "123",
                            name: "张三",
                            email: "zhangsan@example.com",
                            collections: [], 
                            borrowedBooks: [], 
                            borrowingHistory: [] 
                        },
                        "lisi": {
                            password: "456",
                            name: "李四",
                            email: "lisi@example.com",
                            collections: [],
                            borrowedBooks: [],
                            borrowingHistory: []
                        }
                    },
                    // 当前登录的用户名
                    currentUser: null 
                };
                this.saveData(defaultData);
            }
        } catch (e) {
            console.error("LocalStorage is not available.", e);
            alert("此浏览器不支持本地存储，系统可能无法正常工作。");
        }
    },

    // --- 核心数据读写 ---
    getData: function() {
        try {
            return JSON.parse(localStorage.getItem(this.DATA_KEY));
        } catch (e) {
            console.error("Failed to parse data from localStorage", e);
            return null;
        }
    },

    saveData: function(data) {
        try {
            localStorage.setItem(this.DATA_KEY, JSON.stringify(data));
            // 派发一个存储事件，让所有打开的页面都能监听到数据变化并更新UI
            window.dispatchEvent(new Event('storage'));
        } catch (e) {
            console.error("Failed to save data to localStorage", e);
        }
    },

    // --- 用户认证与会话管理 ---

    // (新功能) 用户注册
    registerUser: function(username, password, name, email) {
        const data = this.getData();
        if (!data) {
            return { success: false, message: "数据库错误，请稍后再试。" };
        }

        if (data.users[username]) {
            return { success: false, message: "该用户名已被注册。" };
        }
        
        if (!username || !password || !name) {
            return { success: false, message: "用户名、密码和姓名不能为空。" };
        }

        // 为新用户创建独立的、空的个人数据
        data.users[username] = {
            password: password,
            name: name,
            email: email || "",
            collections: [],
            borrowedBooks: [],
            borrowingHistory: []
        };

        this.saveData(data);
        return { success: true, message: "注册成功！现在您可以登录了。" };
    },

    login: function(username, password) {
        const data = this.getData();
        if (!data) return false;
        const user = data.users[username];
        if (user && user.password === password) {
            // 登录成功后，设置currentUser
            data.currentUser = username;
            this.saveData(data);
            return true;
        }
        return false;
    },

    logout: function() {
        const data = this.getData();
        if (!data) return;
        // 登出时，清除currentUser
        data.currentUser = null;
        this.saveData(data);
    },

    getCurrentUser: function() {
        const data = this.getData();
        return data ? data.currentUser : null;
    },

    // 这个函数是实现数据隔离的关键
    getCurrentUserData: function() {
        const data = this.getData();
        const currentUser = this.getCurrentUser(); // 获取当前登录用户的用户名
        if (!data || !currentUser) return null;
        // 从users对象中，精确地返回当前登录用户的数据
        return JSON.parse(JSON.stringify(data.users[currentUser])); 
    },
    
    // --- 核心业务逻辑 ---
    
    // 获取图书列表时，会结合全局状态和当前用户的个人收藏状态
    getBooksWithContext: function(allBookData) {
        const data = this.getData();
        const currentUserData = this.getCurrentUserData();
        const collections = currentUserData ? currentUserData.collections : [];

        if (!data) return allBookData;

        return allBookData.map(book => {
            // 从 globalBookStatus 获取书的全局状态
            const statusInfo = data.globalBookStatus[book.id] || { status: 'available', borrowedBy: null };
            return {
                ...book,
                status: statusInfo.status,
                borrowedBy: statusInfo.borrowedBy,
                // 从当前用户的收藏列表判断是否已收藏
                isFavorited: collections.includes(book.id)
            };
        });
    },
    
    // 收藏操作只影响当前登录用户的collections数组
    toggleFavorite: function(bookId) {
        const data = this.getData();
        const currentUser = this.getCurrentUser();
        if (!data || !currentUser) { alert("请先登录！"); return; }

        const userCollections = data.users[currentUser].collections;
        const bookIndex = userCollections.indexOf(bookId);

        if (bookIndex > -1) {
            userCollections.splice(bookIndex, 1);
        } else {
            userCollections.push(bookId);
        }
        this.saveData(data);
    },

    // 借书操作会同时更新全局状态和用户个人状态
    borrowBook: function(bookId) {
        const data = this.getData();
        const currentUser = this.getCurrentUser();
        if (!data || !currentUser) { alert("请先登录！"); return false; }

        // 关键检查：使用 globalBookStatus 检查书是否可借
        if (data.globalBookStatus[bookId]?.status === 'borrowed') {
            alert("抱歉，这本书已经被借走了。");
            return false;
        }
        
        // 1. 更新全局状态，标记为“已借出”并记录借阅者
        data.globalBookStatus[bookId] = { status: 'borrowed', borrowedBy: currentUser };
        
        // 2. 在当前用户的 borrowedBooks 数组中添加一条记录
        const newBorrowRecord = { id: bookId, borrowDate: new Date().toISOString() };
        data.users[currentUser].borrowedBooks.push(newBorrowRecord);

        this.saveData(data);
        alert('借阅成功！');
        return true;
    },

    // 还书操作同样会更新全局和个人状态
    returnBook: function(bookId) {
        if (!confirm('您确定要归还这本书吗？')) return;

        const data = this.getData();
        const currentUser = this.getCurrentUser();
        if (!data || !currentUser) { alert("请先登录！"); return; }
        
        const user = data.users[currentUser];
        const bookIndex = user.borrowedBooks.findIndex(book => book.id === bookId);
        
        if (bookIndex === -1) {
            alert("错误：在您的借阅列表中未找到此书。");
            return;
        }

        // 1. 从用户借阅列表移至历史记录
        const returnedBookRecord = user.borrowedBooks.splice(bookIndex, 1)[0];
        returnedBookRecord.returnDate = new Date().toISOString();
        user.borrowingHistory.push(returnedBookRecord);

        // 2. 更新全局状态，标记为“可借阅”
        data.globalBookStatus[bookId] = { status: 'available', borrowedBy: null };

        this.saveData(data);
        alert('归还成功！');
    }
};

// 每次加载脚本时都初始化一次数据库检查
DB.init();
