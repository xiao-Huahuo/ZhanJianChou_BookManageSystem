#include "crow.h"
#include "database.hpp"
#include "api_helpers.hpp"
#include "global.hpp"
#include <nlohmann/json.hpp>

namespace AdminRoutes {
    void register_routes(crow::SimpleApp& app, Database& db) {
        // ����������������׼JSON��Ӧ
        auto build_response = [](int status, bool success, const std::string& message) {
            crow::response res(status);
            nlohmann::json json_response = {
                {"success", success},
                {"message", message}
            };
            res.write(json_response.dump());
            res.set_header("Content-Type", "application/json");
            return res;
            };

        // ͼ�����·����
        auto& admin_book_route = CROW_ROUTE(app, "/api/admin/books/<int>");

        // PUT ����ͼ����Ϣ
        admin_book_route.methods("PUT"_method, "OPTIONS"_method)(
            [&db, build_response](const crow::request& req, int bookId) {
                if (req.method == "OPTIONS"_method) {
                    auto res = crow::response(204);
                    add_cors_headers(res);
                    return res;
                }

                // Ȩ����֤
                if (!is_admin(req, db)) {
                    return build_response(403, false, "Forbidden");
                }

                try {
                    // ������֤
                    auto updated_data = nlohmann::json::parse(req.body);
                    if (!updated_data.is_object()) {
                        throw std::runtime_error("Invalid book data format");
                    }

                    // ҵ���߼�
                    nlohmann::json data;
                    db.get_data(data);

                    auto it = std::find_if(data["books"].begin(), data["books"].end(),
                        [bookId](const auto& book) { return book["id"] == bookId; });

                    if (it == data["books"].end()) {
                        return build_response(404, false, "Book not found");
                    }

                    // ���������޸ĵ��ֶ�
                    const std::set<std::string> allowed_fields = {
                        "title", "author", "category", "isbn",
                        "description", "image"
                    };

                    for (const auto& [key, value] : updated_data.items()) {
                        if (allowed_fields.count(key)) {
                            (*it)[key] = value;
                        }
                    }

                    db.set_data(data);
                    return build_response(200, true, "Book updated successfully");

                }
                catch (const std::exception& e) {
                    return build_response(400, false, e.what());
                }
            }
            );

        // DELETE ɾ��ͼ��
        admin_book_route.methods("DELETE"_method, "OPTIONS"_method)(
            [&db, build_response](const crow::request& req, int bookId) {
                if (req.method == "OPTIONS"_method) {
                    auto res = crow::response(204);
                    add_cors_headers(res);
                    return res;
                }

                // Ȩ����֤
                if (!is_admin(req, db)) {
                    return build_response(403, false, "Forbidden");
                }

                try {
                    nlohmann::json data;
                    db.get_data(data);

                    auto& books = data["books"];
                    auto it = std::find_if(books.begin(), books.end(),
                        [bookId](const auto& book) { return book["id"] == bookId; });

                    if (it == books.end()) {
                        return build_response(404, false, "Book not found");
                    }

                    books.erase(it);
                    db.set_data(data);
                    return crow::response(204); // No content

                }
                catch (const std::exception& e) {
                    return build_response(500, false, e.what());
                }
            }
            );

        // POST �������
        CROW_ROUTE(app, "/api/admin/books").methods("POST"_method, "OPTIONS"_method)(
            [&db, build_response](const crow::request& req) {
                if (req.method == "OPTIONS"_method) {
                    auto res = crow::response(204);
                    add_cors_headers(res);
                    return res;
                }

                // Ȩ����֤
                if (!is_admin(req, db)) {
                    return build_response(403, false, "Forbidden");
                }

                try {
                    auto new_book = nlohmann::json::parse(req.body);
                    if (!new_book.is_object()) {
                        throw std::runtime_error("Invalid book data format");
                    }

                    // ����ΨһID
                    static std::atomic<int> next_id = 1;
                    new_book["id"] = next_id++;

                    // ��֤�����ֶ�
                    const std::set<std::string> required_fields = {
                        "title", "author", "category"
                    };

                    for (const auto& field : required_fields) {
                        if (!new_book.contains(field) || new_book[field].is_null()) {
                            throw std::runtime_error("Missing required field: " + field);
                        }
                    }

                    // ��ӵ����ݿ�
                    nlohmann::json data;
                    db.get_data(data);
                    data["books"].push_back(new_book);
                    db.set_data(data);

                    return build_response(201, true, "Book added successfully");

                }
                catch (const std::exception& e) {
                    return build_response(400, false, e.what());
                }
            }
            );
        // ��ȡ�����û�
        CROW_ROUTE(app, "/api/admin/users").methods("GET"_method)(
            [&db](const crow::request& req) {
                if (!is_admin(req, db)) {
                    return crow::response(403, "{\"success\": false, \"message\": \"Forbidden\"}");
                }

                json users;
                db.get_all_users(users);

                crow::response res(200, users.dump());
                add_cors_headers(res);
                return res;
            }
            );
        // �����û���Ϣ
        CROW_ROUTE(app, "/api/admin/users/<string>").methods("PUT"_method)(
            [&db](const crow::request& req, const std::string& username) {
                if (!is_admin(req, db)) {
                    return crow::response(403, "{\"success\": false, \"message\": \"Forbidden\"}");
                }

                try {
                    auto update_data = nlohmann::json::parse(req.body);
                    json data;
                    db.get_data(data);

                    if (!data["users"].contains(username)) {
                        return crow::response(404, "{\"success\": false, \"message\": \"User not found\"}");
                    }

                    // ֻ��������ض��ֶ�
                    const std::set<std::string> allowed_fields = { "name", "email", "status", "role" };
                    for (const auto& [key, value] : update_data.items()) {
                        if (allowed_fields.count(key)) {
                            data["users"][username][key] = value;
                        }
                    }

                    db.set_data(data);
                    return crow::response(200, "{\"success\": true, \"message\": \"User updated\"}");
                }
                catch (const std::exception& e) {
                    return crow::response(400, std::string("{\"success\": false, \"message\": \"") + e.what() + "\"}");
                }
            }
            );
    }
}