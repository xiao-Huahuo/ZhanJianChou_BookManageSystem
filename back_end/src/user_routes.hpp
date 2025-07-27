#ifndef USER_ROUTES_HPP
#define USER_ROUTES_HPP
#include "global.hpp"
#include "crow.h"
#include "database.hpp"
#include "api_helpers.hpp"
#include <chrono>

// 包含 date.h 库以进行跨平台的时间格式化
#include "date/date.h"

namespace UserRoutes {

    void register_routes(crow::SimpleApp& app, Database& db) {
        // GET /api/user/data
        CROW_ROUTE(app, "/api/user/data").methods(crow::HTTPMethod::Get)
            ([&](const crow::request& req, crow::response& res) {
            add_cors_headers(res);
            auto username = req.get_header_value("X-Username");

            json user;
            if (username.empty() || !db.get_user(username, user)) {
                res.code = 401;
                return res.end("{\"success\": false, \"message\": \"Unauthorized\"}");
            }

            user.erase("password");
            res.code = 200;
            res.write(user.dump());
            res.end();
                });

        // PUT /api/user/data
        CROW_ROUTE(app, "/api/user/data").methods(crow::HTTPMethod::Put, crow::HTTPMethod::Options)
            ([&](const crow::request& req, crow::response& res) {
            if (req.method == crow::HTTPMethod::Options) { return handle_options(res); }
            add_cors_headers(res);

            auto username = req.get_header_value("X-Username");
            json user_check;
            if (username.empty() || !db.get_user(username, user_check)) {
                res.code = 401;
                return res.end("{\"success\": false, \"message\": \"Unauthorized\"}");
            }

            auto body = crow::json::load(req.body);
            json filtered_update;

            // 只允许更新特定字段
            if (body.has("name")) filtered_update["name"] = body["name"].s();
            if (body.has("email")) filtered_update["email"] = body["email"].s();

            db.update_user(username, filtered_update);

            res.code = 200;
            res.write("{\"success\": true, \"message\": \"Profile updated\"}");
            res.end();
                });
        // GET /api/user/notifications
        CROW_ROUTE(app, "/api/user/notifications").methods(crow::HTTPMethod::Get)
            ([&](const crow::request& req, crow::response& res) {
            add_cors_headers(res);
            res.code = 200;
            res.write("[]");
            res.end();
                });

        // POST /api/books/{bookId}/borrow 
        CROW_ROUTE(app, "/api/books/<int>/borrow").methods(crow::HTTPMethod::Post, crow::HTTPMethod::Options)
            ([&](const crow::request& req, crow::response& res, int bookId) {
            if (req.method == crow::HTTPMethod::Options) return handle_options(res);
            add_cors_headers(res);
            auto username = req.get_header_value("X-Username");

            try {
                json data;
                db.get_data(data);

                if (username.empty() || !data["users"].contains(username)) {
                    throw std::runtime_error("Unauthorized");
                }

                std::string book_id_str = std::to_string(bookId);
                if (data["globalBookStatus"].contains(book_id_str)) {
                    throw std::runtime_error("Book is already borrowed");
                }

                const auto now = std::chrono::system_clock::now();
                const std::string now_str = date::format("%FT%TZ", now);

                // 原子性更新
                data["globalBookStatus"][book_id_str] = { {"status", "borrowed"}, {"borrowedBy", username} };
                data["users"][username]["borrowedBooks"].push_back({ {"id", bookId}, {"borrowDate", now_str} });

                db.set_data(data); // 全部成功才保存

                res.code = 200;
                res.write("{\"success\": true, \"message\": \"Book borrowed successfully\"}");
            }
            catch (const std::exception& e) {
                res.code = 400;
                res.write("{\"success\": false, \"message\": \"" + std::string(e.what()) + "\"}");
            }
            res.end();
                });

        // POST /api/books/{bookId}/return
        CROW_ROUTE(app, "/api/books/<int>/return").methods(crow::HTTPMethod::Post, crow::HTTPMethod::Options)
            ([&](const crow::request& req, crow::response& res, int bookId) {
            if (req.method == crow::HTTPMethod::Options) { return handle_options(res); }
            add_cors_headers(res);
            auto username = req.get_header_value("X-Username");

            json data;
            db.get_data(data);

            if (username.empty() || !data["users"].contains(username)) {
                res.code = 401; return res.end("{\"success\": false, \"message\": \"Unauthorized\"}");
            }

            auto& borrowed_books = data["users"][username]["borrowedBooks"];
            auto it = std::find_if(borrowed_books.begin(), borrowed_books.end(),
                [bookId](const json& book) { return book["id"] == bookId; });

            if (it == borrowed_books.end()) {
                res.code = 404;
                return res.end("{\"success\": false, \"message\": \"User has not borrowed this book\"}");
            }

            json history_item = *it;

            // 使用 date.h 库获取UTC时间字符串
            const auto now = std::chrono::system_clock::now();
            const std::string now_str = date::format("%FT%TZ", now);
            history_item["returnDate"] = now_str;

            data["users"][username]["borrowingHistory"].push_back(history_item);

            borrowed_books.erase(it);
            data["globalBookStatus"].erase(std::to_string(bookId));

            db.set_data(data);
            res.code = 200;
            res.write("{\"success\": true, \"message\": \"Book returned successfully\"}");
            res.end();
                });

        // POST /api/books/{bookId}/favorite
        CROW_ROUTE(app, "/api/books/<int>/favorite").methods(crow::HTTPMethod::Post, crow::HTTPMethod::Options)
            ([&](const crow::request& req, crow::response& res, int bookId) {
            if (req.method == crow::HTTPMethod::Options) { return handle_options(res); }
            add_cors_headers(res);
            auto username = req.get_header_value("X-Username");

            json data;
            db.get_data(data);

            if (username.empty() || !data["users"].contains(username)) {
                res.code = 401; return res.end("{\"success\": false, \"message\": \"Unauthorized\"}");
            }

            auto& collections = data["users"][username]["collections"];
            auto it = std::find(collections.begin(), collections.end(), bookId);

            if (it != collections.end()) {
                collections.erase(it);
            }
            else {
                collections.push_back(bookId);
            }

            db.set_data(data);
            res.code = 200;
            res.write("{\"success\": true, \"message\": \"Operation successful\"}");
            res.end();
                });

        // POST /api/feedback
        CROW_ROUTE(app, "/api/feedback").methods(crow::HTTPMethod::Post, crow::HTTPMethod::Options)
            ([&](const crow::request& req, crow::response& res) {
            if (req.method == crow::HTTPMethod::Options) { return handle_options(res); }
            add_cors_headers(res);

            auto username = req.get_header_value("X-Username");
            json data;
            db.get_data(data);

            if (username.empty() || !data["users"].contains(username)) {
                res.code = 401; return res.end("{\"success\": false, \"message\": \"Unauthorized\"}");
            }

            auto body = crow::json::load(req.body);
            if (!body.has("content")) {
                res.code = 400; return res.end("{\"success\": false, \"message\": \"Content is required\"}");
            }

            // 使用 date.h 库获取UTC时间字符串
            const auto now = std::chrono::system_clock::now();
            const std::string now_str = date::format("%FT%TZ", now);

            json feedback_item = {
                {"username", username},
                {"content", body["content"].s()},
                {"date", now_str}
            };
            data["feedback"].push_back(feedback_item);
            db.set_data(data);

            res.code = 201;
            res.write("{\"success\": true, \"message\": \"Feedback submitted\"}");
            res.end();
                });
    }

} // namespace UserRoutes

#endif // USER_ROUTES_HPP