const { db } = require("../db");


exports.getBooks = (req, res) => {
  db.query("SELECT * FROM books", (err, rows, field) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
};

exports.getBook = (req, res) => {
  db.query(
    "SELECT * FROM books WHERE id = ?",
    [req.params.id],
    (err, rows, field) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
};

exports.createNewBook = (req, res) => {
  let book = req.body;
  let newBook = [book.name, book.isbn, book.author];
  let sql = "INSERT INTO books (name, isbn, author) VALUES (?)";
  db.query(
    sql,
    [newBook],

    (err, rows, fields) => {
      console.log(rows);
      if (!err) res.send("Book created successfully.");
      else console.log(err);
    }
  );
};
