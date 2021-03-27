const mongoose = require("mongoose");

const model = new mongoose.Schema({
  product_name: {
    type: String,
  },
  product_desc: {
    type: String,
  },
  product_price: {
    type: Number,
  },
  product_rating: {
    type: Number,
  },
  product_image: {
    type: String,
  },
});
module.exports = mongoose.model("model", model);
