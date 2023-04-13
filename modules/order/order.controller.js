const knex = require("../../config/knex");

const Razorpay = require("razorpay");

async function createorder(req, res) {
  let books = req.body.books;
  let user = req.user;
  console.log(books);
  let bookIds = books.map((b) => b.bookId);

  // check if booksIds exists

  //select * from books where id in (1,2)
  let existingBooks = await knex("books").whereIn("id", bookIds);

  if (bookIds.length !== existingBooks.length)
    return res.send({ responseMsg: "Invalid book id" });

  let totalPrice = 0;
  existingBooks.forEach((book) => {
    books.forEach((bookid) => {
      if (bookid.bookId == book.id) {
        console.log(bookid.quantity);
        totalPrice += book.price * bookid.quantity;
        console.log(totalPrice);
      }
    });
  });
  let order = await knex("orders").insert({
    userId: user.id,
    total_price: totalPrice,
    status: "initiated",
    created_at: knex.fn.now(6),
  });
  let orderbookmapping = [];
  existingBooks.forEach((book) => {
    books.forEach((bookid) => {
      if (bookid.bookId == book.id) {
        orderbookmapping.push({
          orderId: order[0],
          bookId: book.id,
          quantity: bookid.quantity,
          price: book.price,
        });
      }
    });
  });
  await knex("order_book_mapping").insert(orderbookmapping);

  var instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
  });

  const expiredTime = Math.floor(Date.now() / 1000) + 16 * 60;

  var options = {
    amount: totalPrice * 100, // amount in the smallest currency unit
    currency: "INR",
    description: "payment for book",
    notes: {
      order_id: order[0],
    },
    customer: {
      name: "abc",
      email: "abc@gmail.com",
      contact: "1235678945",
    },
    expire_by: expiredTime,
    callback_url: "http://localhost:3000/myorders",
  };
  instance.paymentLink.create(options, function (err, rz_order) {
    console.log(err);
    if (err) {
      return res.send({ message: "failed to create order" });
    }
    res.send({
      message: "order created successfully",
      data: {
        paymentLink: rz_order.short_url,
      },
    });
    console.log(order);
  });
}
async function getorderList(req, res) {}
module.exports = {
  createorder,
  getorderList,
};
