/** @format */

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

//all the products present in localstorage in forntend structure
const ProductCartSchema = new mongoose.Schema({
  product: {
    type: ObjectId,
    ref: "Product",
  },
  name: String,
  count: Number,
  price: Number,
});

const ProductCart = mongoose.model("ProductCart", ProductCartSchema);

//order schema :- to create order structure in mongodb
const OrderSchema = new mongoose.Schema(
  {
    products: [ProductCartSchema],
    amount: { type: Number },
    address: String,
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = { Order, ProductCart };
