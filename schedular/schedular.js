const cron = require("node-cron");
const knex = require("../config/knex");

async function cancelledOldOrder() {
  // console.log("hello");

  const orders = await knex("orders")
    .update({ status: "aborted" })
    .where("created_at", "<", knex.raw("DATE_SUB(NOW(), INTERVAL 20 MINUTE)"))
    .where("status", "initiated");
  console.log(orders);
}

cron.schedule("*/2 * * * *", cancelledOldOrder);
