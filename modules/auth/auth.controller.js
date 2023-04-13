const { response } = require("express");
const bcrypt = require("bcryptjs");
const knex = require("../../config/knex");
const jwt = require("jsonwebtoken");

async function signup(req, res) {
  const { name, email, contact, password } = req.body;
  let existingUser = await knex("users").where("email", email).first();

  if (existingUser) {
    return res.send({
      error: true,
      message: "Email already Exist",
    });
  }
  let hashedPassword = bcrypt.hashSync(password, 10);
  let user = {
    name,
    email,
    contact,
    password: hashedPassword,
  };

  let result = await knex("users").insert(user);
  console.log(result);
  res.send({
    error: false,
    message: "account created",
  });
}

async function signin(req, res) {
  debugger;
  console.log(req.query);
  const { email, password } = req.body;

  const comparePassword = password;
  let user = await knex("users").where("email", email).first();
  if (!user) {
    return res.send({
      error: true,
      message: "invalid email address",
    });
  }
  let matched = await bcrypt.compare(password, user.password);
  if (!matched) {
    res.send({
      error: true,
      message: "Invalid email or password",
    });
    return;
  }
  const userJwt = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET
  );
  res.send({
    error: false,
    token: userJwt,
    message: "Login successfull",
  });
}
module.exports = {
  signup,
  signin,
};
