/** @format */

//All the routes file on which we can hit
//or all the different pages
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminRoute from "./auth/helper/AdminRoutes";
import Home from "./core/Home";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import AddProduct from "./admin/AddProduct";
import Cart from "./core/Cart";
import Orders from "./admin/Orders";

//calling all the routes
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
        <AdminRoute path="/admin/create/product" exact component={AddProduct} />

        <Route path="/cart" exact component={Cart} />
        <AdminRoute path="/admin/orders" exact component={Orders} />
      </Switch>
    </BrowserRouter>
  );
}
