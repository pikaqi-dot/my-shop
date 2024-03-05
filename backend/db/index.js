// 导入 mysql 模块
const mysql = require("mysql");

// 创建数据库连接对象
const db = mysql.createPool({
  host: "120.48.122.12",
  user: "root",
  password: "19940714",
  database: "mysql_db",
});

// 向外共享 db 数据库连接对象
module.exports = db;
