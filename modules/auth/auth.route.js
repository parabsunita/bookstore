const express = require("express");
const router = express.Router();
const authController = require("./auth.controller");

router.post("/signup", authController.signup);
router.get("/login", authController.signin);
module.exports = router;
