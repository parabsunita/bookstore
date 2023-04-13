var express = require("express");
var router = express.Router();

const bookRouter = require("./book/book.route");
const authRouter = require("./auth/auth.route");
const orderRouter = require("./order/order.route");
const paymentRouter = require("./payment/payment.route");
const razorpayWebhook = require("./webhook/razorpay");
const authCheck = require("../middlewares/auth.middleware");
router.use("/book", bookRouter);
router.use("/auth", authRouter);
router.use("/order", authCheck, orderRouter);
router.use("/payment", paymentRouter);
router.use("/razorpaywebhook", razorpayWebhook);

module.exports = router;
