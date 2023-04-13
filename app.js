const express = require("express");
const app = express();
const indexRouter = require("./modules/route");
const cors = require("cors");
const cron = require("node-cron");
const scheduler = require("./schedular/schedular");
app.use(express.json());
app.use(cors());
app.use("/api", indexRouter);

module.exports = app;
