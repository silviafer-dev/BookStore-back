const { db } = require("../db");

exports.getBooks = (req, res) => {
  db.query("SELECT * FROM books", (err, rows, field) => {
    if (!err) res.send(rows);
    else res.json(err);
  });
};

exports.getBook = async (req, res) => {
  await db.query(
    "SELECT b.*, a.* FROM books b JOIN authors a on b.author = a.id WHERE b.id =?",
    [req.params.id],
    (err, rows, field) => {
      if (!err) res.send(rows[0]);
      else res.json(err);
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
      if (!err) res.send("Book created successfully.");
      else res.json(err);
    }
  );
};
exports.updateBook = async (req, res) => {
  let book = req.body;
  let sql =
    "UPDATE books SET name=?, isbn=?, author=? WHERE id =" + req.params.id;
  await db.query(
    sql,
    [book.name, book.isbn, book.author],

    (err, rows, fields) => {
      if (!err) {
        {
          res.send(rows);
        }
      } else res.json(err);
    }
  );
};
