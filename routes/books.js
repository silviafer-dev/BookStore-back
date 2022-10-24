var express = require("express");
const { getAuthors } = require("../controllers/authors-controller");
var router = express.Router();

router.get("/books", getAuthors);
router.get("/book/:id");
router.post("/books");

module.exports = router;
