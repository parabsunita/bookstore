const Razorpay = require("razorpay");
const razorpay = new Razorpay({
  key_id: "rzp_test_B9Kp1l2gfycDVq",
  key_secret: "KzcI3MkqmPeeK7mJkbsMaGuF",
});

const options = {
  amount: 50000, // Amount in paise
  currency: "INR",
  receipt: "order_rcptid_11",
  payment_capture: 1,
};

async function createpayment(req, res) {
  razorpay.orders.create(options, function (err, order) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(order);

    const orderId = order.id;
    const razorpayPaymentId = order.razorpay_payment_id;

    res.send({ orderid: orderId, razorpayPaymentid: razorpayPaymentId });
  });
}

// const paymentId = req.body.razorpay_payment_id;

// razorpay.payments.capture(paymentId, amount, function (err, payment) {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(payment);
// });

module.exports = {
  createpayment,
};
