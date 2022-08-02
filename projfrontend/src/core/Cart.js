/** @format */

import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";
import CreateOrders from "./CreateOrders";

//this is cart and checkout page where we can see our all products and
//have checkout button to checkout all the items

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  //used to preload all the products from localmemory to cart page
  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  //Loading all products visualy on the page
  const loadAllProducts = (products) => {
    return (
      <div>
        <p className="text-secondary display-6 mb-5">Product's added to cart</p>
        <div className=" col-8 m-auto ">
          {products.map((product, index) => (
            <Card
              key={index}
              product={product}
              addtoCart={false}
              removeFromCart={true}
              setReload={setReload}
              reload={reload}
            />
          ))}
        </div>
      </div>
    );
  };

  // this checkout section indication

  const loadCheckout = () => {
    return (
      <div>
        <p className="text-secondary display-6 mb-5">Payment to Checkout</p>
      </div>
    );
  };

  // here conditional rendering is performed
  // so that if user does not have any item in basket
  //then also our website does not go down
  return (
    <Base title="Cart Page" description="Ready to check out">
      <div className="row  text-center">
        <div className="col-5">
          {products.length > 0 ? (
            loadAllProducts(products)
          ) : (
            <p className="text-secondary display-6 mb-5">
              No Product's as of now
            </p>
          )}
        </div>
        <div className="col-7">
          {loadCheckout()}
          <CreateOrders products={products} setReload={setReload} />
        </div>
      </div>
    </Base>
  );
};

export default Cart;
