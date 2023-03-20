const knex = require("../../config/knex");

async function getbookList(req, res) {
  console.log("ndf");
  let result = await knex("books");

  res.send(result);
}

async function getbook(req, res) {
  let isbn_13 = req.params.isbn_13;
  let result = await knex("books").where("isbn_13", isbn_13).first();

  res.send(result);
}
module.exports = {
  getbookList,
  getbook,
};
