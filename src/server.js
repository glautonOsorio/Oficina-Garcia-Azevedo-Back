require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./database");
const routes = require("./routes/routes");

const PORT_API = process.env.APP_PORT || 3000;

class Server {
  constructor(app = express()) {
    this.app = app;
    this.middlewares();
    this.database();
    this.routes();
    this.initializeServer();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  async database() {
    try {
      await connection.authenticate();
      console.log("Database Connected");
    } catch (error) {
      console.error("Database connection failed: ", error);
      throw error;
    }
  }

  routes() {
    this.app.use(routes);
  }

  initializeServer() {
    this.app.listen(PORT_API, () => {
      console.log(`Server running on port ${PORT_API}`);
    });
  }
}

module.exports = new Server();
