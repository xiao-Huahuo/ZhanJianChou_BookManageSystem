#ifndef DATABASE_HPP
#define DATABASE_HPP
#include "global.hpp"
#include <iostream>
#include <fstream>
#include <string>
#include <mutex>
#include "nlohmann/json.hpp"

using json = nlohmann::json;

class Database {
public:
    Database(const std::string& db_path) : filepath(db_path) {
        std::ifstream file(filepath);
        if (file.is_open()) {
            file >> db_data;
            file.close();
            std::cout << "Database loaded successfully from " << filepath << std::endl;
        }
        else {
            std::cerr << "Could not open database file: " << filepath << std::endl;
            db_data = json::object();
        }
    }

    // 通过输出参数获取全量数据
    void get_data(json& out_data) {
        std::lock_guard<std::mutex> lock(db_mutex);
        out_data = db_data;
    }

    // 通过输出参数获取特定用户，返回bool表示是否找到
    bool get_user(const std::string& username, json& out_user) {
        std::lock_guard<std::mutex> lock(db_mutex);
        if (db_data["users"].contains(username)) {
            out_user = db_data["users"][username];
            return true;
        }
        return false;
    }

    // 通过输出参数获取所有用户
    void get_all_users(json& out_users) {
        std::lock_guard<std::mutex> lock(db_mutex);
        out_users = json::object();
        for (auto& el : db_data["users"].items()) {
            json user_copy = el.value();
            user_copy.erase("password");
            out_users[el.key()] = user_copy;
        }
    }

    // 通过输出参数获取图书
    void get_books(const std::string& search_term, const std::string& category, json& out_books) {
        std::lock_guard<std::mutex> lock(db_mutex);
        out_books = json::array();

        for (const auto& book : db_data["books"]) {
            bool category_match = category.empty() || (book.contains("category") && book["category"] == category);

            bool search_match = search_term.empty() ||
                (book.contains("title") && book["title"].get<std::string>().find(search_term) != std::string::npos) ||
                (book.contains("author") && book["author"].get<std::string>().find(search_term) != std::string::npos);

            if (category_match && search_match) {
                json book_copy = book;
                std::string book_id_str = std::to_string(book["id"].get<int>());

                if (db_data["globalBookStatus"].contains(book_id_str)) {
                    book_copy["status"] = "borrowed";
                }
                else {
                    book_copy["status"] = "available";
                }
                out_books.push_back(book_copy);
            }
        }
    }

    // 通过输出参数获取单本图书，返回bool表示是否找到
    bool get_book_by_id(int bookId, json& out_book) {
        std::lock_guard<std::mutex> lock(db_mutex);
        for (const auto& book : db_data["books"]) {
            if (book["id"] == bookId) {
                out_book = book;
                return true;
            }
        }
        return false;
    }

    // 设置/更新数据 (输入参数，保持不变),有备份机制
    void set_data(const json& new_data) {
        std::lock_guard<std::mutex> lock(db_mutex);

        // 备份旧数据
        json old_data = db_data;
        std::string backup_path = filepath + ".bak";

        try {
            // 先写入备份文件
            std::ofstream backup(backup_path);
            if (backup.is_open()) {
                backup << old_data.dump(4);
                backup.close();
            }

            // 再更新主文件
            std::ofstream file(filepath);
            if (!file.is_open()) throw std::runtime_error("Failed to open database file");

            db_data = new_data;
            file << db_data.dump(4);
            file.close();

        }
        catch (...) {
            // 恢复备份
            std::ofstream recovery(filepath);
            if (recovery.is_open()) {
                recovery << old_data.dump(4);
                recovery.close();
            }
            throw; // 重新抛出异常
        }
    }

    // 更新用户数据 (输入参数，保持不变)
    void update_user(const std::string& username, const json& user_data) {
        std::lock_guard<std::mutex> lock(db_mutex);
        if (db_data["users"].contains(username)) {
            db_data["users"][username].merge_patch(user_data);
            save();
        }
    }

    // 添加新用户 (输入参数，保持不变)
    bool add_user(const std::string& username, const json& new_user) {
        std::lock_guard<std::mutex> lock(db_mutex);
        if (db_data["users"].contains(username)) {
            return false;
        }
        db_data["users"][username] = new_user;
        save();
        return true;
    }

private:
    std::string filepath;
    json db_data;
    std::mutex db_mutex;

    void save() {
        std::ofstream file(filepath);
        if (file.is_open()) {
            file << db_data.dump(4);
            file.close();
        }
        else {
            std::cerr << "Failed to save database to " << filepath << std::endl;
        }
    }
};

#endif // DATABASE_HPP