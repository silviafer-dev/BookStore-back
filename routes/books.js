var express = require("express");
var router = express.Router();

router.get("/");
router.get("/:id");
router.post("/");

module.exports = router;
