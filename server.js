const http = require("http");
const app = require("./app");

PORT = process.env.PORT || 8000;

const server = http.createServer(app);

function startServer() {
  server.listen(PORT, () => {
    console.log(`Server is listening at Port ${PORT} .....`);
  });
}

startServer();