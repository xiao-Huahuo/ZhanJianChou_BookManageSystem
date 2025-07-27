#ifndef PUBLIC_ROUTES_HPP
#define PUBLIC_ROUTES_HPP
#include "global.hpp"
#include "crow.h"
#include "database.hpp"
#include "api_helpers.hpp"

namespace PublicRoutes {
    void register_routes(crow::SimpleApp& app, Database& db) {
        // POST /api/register
        CROW_ROUTE(app, "/api/register").methods(crow::HTTPMethod::Post, crow::HTTPMethod::Options)
            ([&](const crow::request& req, crow::response& res) {
            if (req.method == crow::HTTPMethod::Options) { return handle_options(res); }
            add_cors_headers(res);

            auto body = crow::json::load(req.body);
            if (!body || !body.has("username") || !body.has("password")) {
                res.code = 400;
                res.write("{\"success\": false, \"message\": \"Username and password required\"}");
                return res.end();
            }

            std::string username = body["username"].s();
            json new_user = {
                {"password", body["password"].s()},
                {"email", body.has("email") ? body["email"].s() : std::string(std::string(""))},
                {"name", username},
                {"role", "user"},
                {"collections", json::array()},
                {"borrowedBooks", json::array()},
                {"borrowingHistory", json::array()},
                {"fines", json::array()}
            };

            if (db.add_user(username, new_user)) {
                res.code = 201;
                res.write("{\"success\": true, \"message\": \"Registration successful\"}");
            }
            else {
                res.code = 400;
                res.write("{\"success\": false, \"message\": \"Username already exists\"}");
            }
            res.end();
                });

        // POST /api/login
        CROW_ROUTE(app, "/api/login").methods(crow::HTTPMethod::Post, crow::HTTPMethod::Options)
            ([&](const crow::request& req, crow::response& res) {
            if (req.method == crow::HTTPMethod::Options) { return handle_options(res); }
            add_cors_headers(res);

            auto body = crow::json::load(req.body);
            if (!body || !body.has("username") || !body.has("password")) {
                res.code = 400;
                return res.end("{\"success\": false, \"message\": \"Invalid request\"}");
            }

            json user;
            if (!db.get_user(body["username"].s(), user) || user["password"].get<std::string>() != body["password"].s()) {
                res.code = 401;
                return res.end("{\"success\": false, \"message\": \"Invalid username or password\"}");
            }

            crow::json::wvalue response_body;
            response_body["success"] = true;
            response_body["message"] = "Login successful";
            response_body["role"] = user["role"].get<std::string>();
            res.code = 200;
            res.write(response_body.dump());
            res.end();
                });

        // GET /api/books
        CROW_ROUTE(app, "/api/books").methods(crow::HTTPMethod::Get)
            ([&](const crow::request& req, crow::response& res) {
            add_cors_headers(res);
            auto search_term = req.url_params.get("search");
            auto category = req.url_params.get("category");

            json books;
            db.get_books(search_term ? search_term : std::string(std::string("")), category ? category : std::string(std::string("")), books);

            auto username = req.get_header_value("X-Username");
            if (!username.empty()) {
                json user;
                if (db.get_user(username, user) && user.contains("collections")) {
                    const auto& collections = user["collections"];
                    for (auto& book : books) {
                        book["isFavorited"] = false;
                        for (const auto& fav_id : collections) {
                            if (fav_id == book["id"]) {
                                book["isFavorited"] = true;
                                break;
                            }
                        }
                    }
                }
            }

            res.code = 200;
            res.write(books.dump());
            res.end();
                });
    }

} // namespace PublicRoutes

#endif // PUBLIC_ROUTES_HPP