/** @format */

import React from "react";
import { isAuthenticated } from "../auth/helper";
import { cartEmpty } from "./helper/cartHelper";
import { createOrder } from "./helper/orderHelper";

//create order component
// to place order for users

const CreateOrders = ({
  products,
  setReload = (f) => f,
  reload = undefined,
}) => {
  //loading userId and token to create user orders
  const userId = isAuthenticated() && isAuthenticated().user._id;
  const token = isAuthenticated() && isAuthenticated().token;

  // calculating amount to display on screen
  const getAmount = () => {
    let amount = 0;
    for (var i = 0; i < products.length; i++) {
      amount += products[i].price;
    }
    return amount;
  };

  // on click button order is created
  const onSubmit = () => {
    const orderData = {
      products: products,
      amount: getAmount(),
    };
    createOrder(userId, token, orderData);
    cartEmpty(() => console.log("Did we got a creash"));
    setReload(!reload);
  };

  return (
    <div>
      <h3 className="text-secondary display-6">
        Your amount is {getAmount()} $
      </h3>
      <div className="row">
        <div className="col-6 offset-sm-3 text-left">
          <button
            onClick={onSubmit}
            className="btn btn-primary btn-block rounded-3"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateOrders;
