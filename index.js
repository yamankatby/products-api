const express = require("express");
const productsRouter = require("./routes/products");
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());

app.use(cors());

mongoose.connect(
  `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.xnfsv.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
  (e) => {
    if (e) {
      console.log(e);
    } else {
      console.log("Connected to database");
    }
  }
);

app.get("/", (req, res) => {
  res.send("Hi, welcome to Products RESTFUL API 😍");
});

app.use("/products", productsRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
