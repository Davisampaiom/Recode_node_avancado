const mysql = require("mysql");
const connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "recode",
});

module.exports = connect;
