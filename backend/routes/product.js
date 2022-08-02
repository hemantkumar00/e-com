/** @format */

const express = require("express");
const router = express.Router();

const {
  getProductById,
  createProduct,
  getProduct,
  photo,
  getAllProducts,
} = require("../controllers/product");
const { isAdmin, isSignedIn, isAuthenticated } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//all of params
router.param("userId", getUserById);
router.param("productId", getProductById);

//all actual routes
//create route
router.post(
  "/product/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProduct,
);

//read route
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);

//listing route
router.get("/product", getAllProducts);

module.exports = router;
