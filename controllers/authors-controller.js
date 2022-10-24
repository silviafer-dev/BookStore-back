const { db } = require("../db");

exports.getAuthors = (req, res) => {
  db.query("SELECT * FROM authors", (err, rows, field) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
};

exports.getAuthor = (req, res) => {
  db.query(
    "SELECT * FROM authors WHERE id = ?",
    [req.params.id],
    (err, rows, field) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
};

exports.createNewAuthor = (req, res) => {
  let author = req.body;
  let newAuthor = [author.first_name, author.last_name];
  let sql = "INSERT INTO authors (first_name, last_name) VALUES (?)";
  db.query(
    sql,
    [newAuthor],

    (err, rows, fields) => {
      console.log(rows);
      if (!err) res.send("Author created successfully.");
      else console.log(err);
    }
  );
};

exports.updateAuthor = (req, res) => {
  let author = req.body;
  let sql =
    "UPDATE authors SET first_name=?, last_name=? WHERE id =" +
    req.params.id;
  db.query(
    sql,
    [author.first_name, author.last_name],

    (err, rows, fields) => {
      if (!err) res.send("Author updated successfully.");
      else console.log(err);
    }
  );
};
