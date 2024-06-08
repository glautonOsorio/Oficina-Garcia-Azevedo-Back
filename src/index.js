const { server } = require("./server");

require("dotenv").config();

server.listen(process.env.APP_PORT, () => {
  console.log(`Amigo estou aqui, porta: ${process.env.APP_PORT}`);
});
