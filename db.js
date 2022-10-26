const { user, password, database } = require("./env.js");

const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: user,
  password: password,
  database: database,
});

db.connect((error) => {
  if (error) {
    console.log("Error connecting to the MySQL Database");
    return;
  }
  console.log("Connection established successfully");
});

module.exports = { db };
