LibraryManagementSystem - 图书管理系统
项目概述
# LibraryManagementSystem - 图书管理系统  

## 项目概述  
**LibraryManagementSystem** 是一个现代化的图书管理系统，采用前后端分离架构。前端使用 Vue.js 实现用户界面，后端使用 C++ (crow) 框架提供 RESTful API 服务。项目集成 DevOps 自动化流程，支持图书管理、借阅管理、用户管理等核心功能。  

---

## 功能特性  
### 1. 图书管理模块  
- **图书检索**：支持按书名/作者/ISBN多条件搜索  
- **图书操作**：  
  - 📚 添加新书（封面、ISBN、分类信息）  
  - ✏️ 编辑图书信息  
  - 🗑️ 下架图书（软删除机制）  

### 2. 借阅管理系统  
- **借阅流程**：  
  - 登记借书
  - 自动计算归还日期  
- **逾期处理**：    
  - 滞纳金计算规则配置  

### 3. 用户管理模块  
- **多角色权限**：  

  | 角色       | 权限                     |  
  |------------|--------------------------|  
  | 读者       | 查询/借阅/预约           |  
  | 管理员     | 全功能操作+数据导出      |  

- **读者空间**：  
  - 借阅历史查询  
  - 图书收藏功能  

---

## 技术架构  
| 模块        | 技术栈                  | 说明                                  |  
|-------------|-------------------------|---------------------------------------|  
| **前端**    | Vue 3 + Vite + Pinia    | 响应式UI组件，Axios调用API            |  
| **后端**    | C++ (crow框架)          | RESTful API服务，JSON数据库集成    |  
| **API规范** | OpenAPI 3.0             | 使用Swagger生成交互式文档             |  
| **DevOps**  | CMake + GitLab CI/CD    | 自动化构建/容器化部署                 |  

---


---

## 项目规划  
### 1. 需求分析  
- **用户需求**：图书馆需要高效管理图书借阅流程，读者需要便捷的查询/预约功能  
- **功能需求**：  
  - 图书全生命周期管理（入库→流通→下架）  
  - 多角色权限控制系统  
  - 数据报表生成（借阅统计/热门图书排行）  
- **技术需求**：  
  - 前端：Vue3组合式API + Element Plus组件库  
  - 后端：crow处理HTTP请求 + SQLite轻量级数据库  
  - 部署：Docker容器化 + Nginx反向代理  

### 2. 阶段划分  
- **阶段1**：技术栈学习与环境搭建  
  - 前端：配置Vue开发环境  
  - 后端：搭建crow HTTP服务框架  

- **阶段2**：架构设计与接口定义  
  - 设计数据库ER图（图书/用户/借阅记录）  
  - 定义RESTful API规范（OpenAPI 3.0）  

- **阶段3**：核心模块开发  

  | 模块       | 关键技术点                  |  
  |------------|----------------------------|  
  | 前端       | Vue Router路由管理          |  
  |            | Kimi大模型接入               |  
  | 后端       | crow路由处理（POST/GET/PUT/DELETE） |  
  |            | JSON数据库ORM映射         |  

- **阶段4**：系统集成与测试  
  - 前后端联调（Axios请求测试）  
  - 压力测试（模拟高并发借阅请求）  

- **阶段5**：DevOps部署  
  - 编写Dockerfile容器化配置  
  - 配置GitLab CI/CD流水线：  
    ```yaml  
    stages:  
      - build  
      - test  
      - deploy  
    ```  

- **阶段6**：文档与交付  
  - 编写用户操作手册  
  - 生成API文档（Swagger UI集成）  

---

## 快速启动  
```bash  
cd front_end && node server.js
cd back_end
mkdir build && cd build  
cmake -S . -B build -DCMAKE_TOOLCHAIN_FILE="$ENV{VCPKG_ROOT}$/scripts/buildsystems/vcpkg.cmake"
cmake --build build # 启动API服务  