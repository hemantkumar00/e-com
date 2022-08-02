/** @format */

import React, { useState } from "react";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import ImageHelper from "./helper/ImageHelper";

//Card is reusable component for all the products
//It holds all the information about individual product

const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setReload = (f) => f,
  reload = undefined,
}) => {
  const [redirect, setRedirect] = useState(false);

  const cardTitle = product ? product.name : "A Photo from Hemant";
  const cardDescription = product
    ? product.description
    : "this photo looks great";
  const cardPrice = product ? product.price : "Default";

  //Function is used to add to the cart
  const addToCart = () => {
    addItemToCart(product, () => {
      setRedirect(true);
    });
  };

  // this function shows the alert that item is added into the cart of user

  const getARedirect = (redirect) => {
    if (redirect) {
      return alert(`${product.name} is added to your cart`);
    }
  };

  // This button will display only when we are on home page to add the product to cart
  const showAddToCart = () => {
    return (
      addtoCart && (
        <button
          onClick={addToCart}
          className="btn btn-block btn-outline-info mt-1 mb-1"
        >
          Add to Cart
        </button>
      )
    );
  };

  // This button will display only when we are on cart page to remove from the cart
  const showRemoveFromCart = () => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            setReload(!reload);
          }}
          className="btn btn-block btn-outline-danger mt-1 mb-1"
        >
          Remove from cart
        </button>
      )
    );
  };

  // If there are products on the website the it will be visible to all the user else show some other message
  // so because of some issues whole website does not go down

  return product ? (
    <div className="card text-white bg-white border border-secandry col-12 mb-4">
      <div className="card-header lead text-primary ">{cardTitle}</div>
      <div className="card-body">
        {getARedirect(redirect)}
        <div className="rounded border border-info p-2">
          <ImageHelper product={product} />
        </div>
        <p className="lead bg-info font-weight-normal text-wrap mt-2">
          {cardDescription}
        </p>
        <p className="btn btn-info rounded  btn-sm px-4">$ {cardPrice}</p>
        <div className="row">
          <div className="col-12">{showAddToCart(addtoCart)}</div>
          <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
        </div>
      </div>
    </div>
  ) : (
    <h1>Sorry there are no produts avilable yet </h1>
  );
};

export default Card;
