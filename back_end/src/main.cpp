#include "global.hpp"
#include "crow.h"
#include "database.hpp"

// 包含所有路由模块
#include "public_routes.hpp"
#include "user_routes.hpp"
#include "admin_routes.hpp"
int main() {
    try {
        // 1. 初始化
        crow::SimpleApp app;
        Database db(DATABASEJSON);

        // 2. 注册所有路由
        PublicRoutes::register_routes(app, db);
        UserRoutes::register_routes(app, db);
        AdminRoutes::register_routes(app, db);

        // 3. 设置日志级别
        app.loglevel(crow::LogLevel::Info);

        // 4. 启动服务器
        app.port(18080).multithreaded().run();

    }catch(std::exception&e) {
        std::cerr << "Error: " << e.what() << std::endl;
        return 250;
    } catch (...) {
        std::cerr << "Unknown error occurred." << std::endl;
        return 250;
	}
    return 0;
}