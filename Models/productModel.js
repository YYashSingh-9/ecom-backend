const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  key: {
    type: Number,
    required: [true, "Key is must"],
  },
  title: {
    type: String,
    requried: [true, "A product title is must."],
    unique: true,
    trim: true,
    maxlength: [20, "Max length for name is 20"],
    minlength: [4, "Minimun length for product name is 4"],
  },
  price: {
    type: Number,
    required: [true, "Product must have a price."],
  },
  images: {
    type: String,
    required: [true, "Product image is must."],
  },
  isFav: {
    type: Boolean,
    requried: [true, "Product is fav or not must be clear."],
  },
  catagory: {
    type: String,
    required: [true, "Product's catagory is required."],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity of a product should be there."],
  },
  slug: String,
  totalPrice: Number,
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
