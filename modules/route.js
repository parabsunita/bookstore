var express = require("express");
var router = express.Router();

const bookRouter = require("./book/book.route");

router.use("/book", bookRouter);

module.exports = router;
