/** @format */

const Product = require("../models/product");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

//get products by their id
//mainly for adding to cart and placing order

exports.getProductById = (req, res, next, id) => {
  Product.findById(id)
    .populate("category")
    .exec((err, product) => {
      if (err) {
        return res.status(400).json({
          error: "Product not found in DB",
        });
      }
      req.product = product;
      next();
    });
};

//create new product
exports.createProduct = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "Problem with image",
      });
    }
    //destructure the fields
    const { name, description, price, category, stock } = fields;

    //restriction on field
    if (!name || !description || !price) {
      return res.status(400).json({
        error: "Plz include all fields",
      });
    }

    let product = new Product(fields);

    //handle file here
    if (file.photo) {
      if (file.photo.size > 2097152) {
        return res.status(400).json({
          error: "File size too big",
        });
      }
      product.photo.data = fs.readFileSync(file.photo.path);
      product.photo.contentType = file.photo.type;
    }

    //save to the DB
    product.save((err, product) => {
      if (err) {
        res.status(400).json({
          error: "Saving tshirt in DB failed",
        });
      }
      res.json(product);
    });
  });
};

exports.getProduct = (req, res) => {
  req.product.photo = undefined;
  return res.json(req.product);
};

//middleware to load photo separate to increase loading time
exports.photo = (req, res, next) => {
  if (req.product.photo.data) {
    res.set("Content-Type", req.product.photo.contentType);
    return res.send(req.product.photo.data);
  }
  next();
};

//Get All Products to display on screen
exports.getAllProducts = (req, res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 8;
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id";

  Product.find()
    .select("-photo")
    .sort([[sortBy, 1]])

    .exec((err, products) => {
      if (err) {
        return res.status(400).json({
          error: " No product found",
        });
      }
      res.json(products);
    });
};
