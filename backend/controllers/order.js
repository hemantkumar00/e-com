/** @format */

const { Order, ProductCart } = require("../models/Orders");

//getting order by id
exports.getOrderById = (req, res, next, id) => {
  Order.findById(id)
    .populate("products.product", "name price")
    .exec((err, order) => {
      if (err) {
        return res.status(400).json({
          error: "No order found",
        });
      }
      req.order = order;
      next();
    });
};

//creating a new order
exports.createOrder = (req, res) => {
  req.body.order.user = req.profile;
  const order = new Order(req.body.order);
  order.save((err, order) => {
    if (err) {
      return res.status(400).json({
        error: "failed to save your order in DB",
      });
    }
    res.json(order);
  });
};

//getting all orders of specific user
exports.getAllOrders = (req, res) => {
  Order.find()
    .populate("user", "_id name email")
    .exec((err, order) => {
      if (err) {
        return res.status(400).json({
          error: "No orders found in DB",
        });
      }
      res.json(order);
    });
};
