var express = require("express");
const {
  getBooks,
  getBook,
  createNewBook,
} = require("../controllers/books.controller");

var router = express.Router();

router.get("/books", getBooks);
router.get("/book/:id", getBook);
router.post("/book", createNewBook);

module.exports = router;
