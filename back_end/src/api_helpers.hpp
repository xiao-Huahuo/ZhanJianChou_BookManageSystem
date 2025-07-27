#ifndef API_HELPERS_HPP
#define API_HELPERS_HPP
#include "global.hpp"
#include "crow.h"
#include "database.hpp"

void add_cors_headers(crow::response& res) {
    res.add_header("Access-Control-Allow-Origin", "*");
    res.add_header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.add_header("Access-Control-Allow-Headers", "Content-Type, X-Username");
}

// 检查用户是否为管理员 (已更新)
bool is_admin(const crow::request& req, Database& db) {
    auto username = req.get_header_value("X-Username");
    if (username.empty()) {
        return false;
    }
    json user;
    if (db.get_user(username, user)) {
        return user.contains("role") && user["role"] == "admin";
    }
    return false;
}

void handle_options(crow::response& res) {
    add_cors_headers(res);
    res.code = 204;
    res.end();
}


#endif // API_HELPERS_HPP