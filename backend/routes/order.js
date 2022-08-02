/** @format */

const express = require("express");
const router = express.Router();

const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById, pushOrderInPurchaseList } = require("../controllers/user");
const {
  getOrderById,
  createOrder,
  getAllOrders,
} = require("../controllers/order");

//Params
router.param("userId", getUserById);
router.param("orderId", getOrderById);

//Actual Routes
//create order route
router.post(
  "/order/create/:userId",
  isSignedIn,
  isAuthenticated,
  pushOrderInPurchaseList,
  createOrder,
);

//read all order related to user routes
router.get(
  "/order/all/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  getAllOrders,
);

module.exports = router;
