var express = require("express");
var router = express.Router();
const {
  getBooks,
  getBook,
  createNewBook,
  updateBook,
} = require("../controllers/books-controller");


router.get("/", getBooks);
router.get("/book/:id", getBook);
router.post("/book", createNewBook);
router.put("/book/:id", updateBook);

module.exports = router;
