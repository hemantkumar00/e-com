/** @format */

const express = require("express");
const router = express.Router();

//Importing functions
const {
  getUserById,
  getUser,
  userPurchaseList,
} = require("../controllers/user");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");

//params
router.param("userId", getUserById);

//get user route to get users full detalis

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);

//get users order detail
router.get(
  "/orders/user/:userId",
  isSignedIn,
  isAuthenticated,
  userPurchaseList,
);

module.exports = router;
