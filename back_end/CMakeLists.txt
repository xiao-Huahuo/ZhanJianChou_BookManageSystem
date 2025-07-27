cmake_minimum_required(VERSION 3.10)
project(book_management_server)

# 设置C++17标准
set(CMAKE_CXX_STANDARD 17)

# 查找依赖
find_package(Crow REQUIRED)
find_package(nlohmann_json REQUIRED)
find_package(Boost REQUIRED COMPONENTS filesystem system)

# 添加可执行文件（只需列出.cpp文件）
add_executable(${PROJECT_NAME}
    src/main.cpp
)

# 包含头文件目录
target_include_directories(${PROJECT_NAME} PRIVATE src)

# 链接库
target_link_libraries(${PROJECT_NAME} PRIVATE
    Crow::Crow
    nlohmann_json::nlohmann_json
    Boost::filesystem
    Boost::system
)