require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes")
const server = express();
const { connection } = require("./database/index")

server.use(
  cors({
    origin: "*",
  })
);

server.use(express.json());
server.use(routes)
try {
  connection.authenticate();
  console.log("Database Connected")
} catch (error) {
  console.log(error)
}
module.exports = {
  server,
};
