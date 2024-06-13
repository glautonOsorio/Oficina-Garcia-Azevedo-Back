require("dotenv").config();
const swaggerAutogen = require("swagger-autogen")();

const {
  env: { APP_PORT },
} = process;

const doc = {
  info: {
    title: "Oficina-Garcia-Azevedo",
    description: "Api criada pelos 3 Mosqueteiros",
  },
  host: `localhost:${APP_PORT}`,
};

const outputFile = "./src/swagger.json";
const routes = ["src/routes/index.js"];

swaggerAutogen(outputFile, routes, doc);
