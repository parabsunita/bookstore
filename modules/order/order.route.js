const express = require("express");
const router = express.Router();
const orderController = require("./order.controller");

router.post("/createorder", orderController.createorder);
router.get("orderid", orderController.getorderList);
module.exports = router;
