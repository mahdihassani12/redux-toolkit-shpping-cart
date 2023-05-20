const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const products = require("./products");

app.get("/", (req, res) => {
  res.send("Welcome to our online shop API");
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
