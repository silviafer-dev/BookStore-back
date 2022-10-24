const { db } = require("../db");

exports.getBooks = (req, res) => {
  db.query("SELECT * FROM books", (err, rows, field) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
};

exports.getBook = async (req, res) => {
  await db.query(
    "SELECT b.*, a.* FROM books b JOIN authors a on b.author = a.id WHERE a.id =?",
    [req.params.id],
    (err, rows, field) => {
      if (!err) res.send(rows[0]);
      else console.log(err);
    }
  );
};

exports.createNewBook = async (req, res) => {
  let book = req.body;
  let newBook = [book.name, book.isbn, book.author];
  let sql = "INSERT INTO books (name, isbn, author) VALUES (?)";
  await db.query(
    sql,
    [newBook],

    (err, rows, fields) => {
      console.log(rows);
      if (!err) res.send("Book created successfully.");
      else console.log(err);
    }
  );
};
