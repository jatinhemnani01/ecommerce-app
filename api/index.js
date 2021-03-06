const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const model = require("./model");

require("dotenv").config();
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://jatinhemnani01:8889994742@cluster0.yzqnh.mongodb.net/ecommerce?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("Connected To Database");
  })
  .catch((e) => {
    console.log(e);
  });

app.get("/", (req, res) => {
  try {
    const product = model.find({}, (err, docs) => {
      if (err) throw err;
      res.json(docs);
    });
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/search/:item", (req, res) => {
  const { item } = req.params;
  let regex = new RegExp(item, "i");
  model
    .find({ product_name: regex })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((e) => console.log(e));
});

app.get("/:id", (req, res) => {
  try {
    let id = req.params.id;
    model.findOne({ _id: id }, function (err, docs) {
      res.json(docs);
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.post("/add", (req, res) => {
  try {
    const products = new model({
      product_name: req.body.product_name,
      product_price: req.body.product_price,
      product_desc: req.body.product_desc,
      product_rating: req.body.product_rating,
      product_image: req.body.product_image,
    });
    const newProduct = products.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/delete/:id", (req, res) => {
  model.deleteOne({ _id: req.params.id }, (err, result) => {
    if (err) return console.log(err);
    return res.json({ message: "Deleted" });
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server Running"));
