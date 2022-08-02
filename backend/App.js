/** @format */
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//My Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
// const paymentRoutes = require("./routes/payment");

mongoose
  .connect("mongodb://localhost:27017/XenonStack", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);

//My Port
const port = process.env.PORT || 8000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("projfrontend/build"));
  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "projfrontend", "build", "index.html"),
    );
  });
}

app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
