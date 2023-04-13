const express = require("express");
const router = express.Router();
const paymentController = require("./payment.controller");

router.post("/createpayment", paymentController.createpayment);
console.log("jfk");
module.exports = router;
