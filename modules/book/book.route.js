const express = require("express");
const router = express.Router();
const bookController = require("./book.controller");

router.get("/", bookController.getbookList);
router.get("/:isbn_13", bookController.getbook);
module.exports = router;
