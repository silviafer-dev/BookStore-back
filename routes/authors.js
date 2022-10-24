var express = require("express");
var router = express.Router();
const {
  getAuthors,
  getAuthor,
  createNewAuthor,
  updateAuthor,
} = require("../controllers/authors-controller");

router.get("/authors", getAuthors);
router.get("/author/:id", getAuthor);
router.post("/author", createNewAuthor);
router.put("/author/:id", updateAuthor);

module.exports = router;
