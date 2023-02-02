const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");

require("dotenv").config();

const PORT = process.env.PORT || 8000;

mongoose.set('strictQuery', false);

const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB ...");
});

mongoose.connection.on("error", (error) => {
  console.log(error);
});

async function startServer() {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  server.listen(PORT, () => {
    console.log(`Server is listening at Port ${PORT} .....`);
  });
}

startServer();
