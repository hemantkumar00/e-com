/** @format */
var express = require("express");
var router = express.Router();
const { check } = require("express-validator");
const { signout, signup, signin } = require("../controllers/auth");

//post route for signup user

router.post(
  "/signup",
  [
    check("name", "name should be atlist 3 words").isLength({ min: 3 }),
    check("email", "email should be atlist 3 words").isEmail(),
    check("password", "password should be atlist 3 words").isLength({ min: 3 }),
  ],
  signup,
);

//post route for user signin

router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password is required").isLength({ min: 3 }),
  ],
  signin,
);

//get route for user signout

router.get("/signout", signout);

module.exports = router;
