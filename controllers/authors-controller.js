const { db } = require("../db");

exports.getAuthors = async (req, res) => {
  await db.query("SELECT * FROM authors", (err, rows, field) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
};

exports.getAuthor = async (req, res) => {
  await db.query(
    "SELECT b.*, a.* FROM authors a JOIN books b on a.id = b.author WHERE a.id = ?",
    [req.params.id],
    (err, rows, field) => {
      if (!err) res.send(rows);
      else res.json(err);
    }
  );
};

exports.createNewAuthor = async (req, res) => {
  let author = req.body;
  let newAuthor = [author.first_name, author.last_name];
  let sql = "INSERT INTO authors (first_name, last_name) VALUES (?)";
  await db.query(
    sql,
    [newAuthor],

    (err, rows, fields) => {
      console.log(rows);
      if (!err) res.send("Author created successfully.");
      else console.log(err);
    }
  );
};

exports.updateAuthor = async (req, res) => {
  let author = req.body;
  let sql =
    "UPDATE authors SET first_name=?, last_name=? WHERE id =" + req.params.id;
  await db.query(
    sql,
    [author.first_name, author.last_name],

    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
        res.send("Author updated successfully.");
      } else res.json(err);
    }
  );
};
