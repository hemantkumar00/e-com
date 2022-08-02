/** @format */

// this file is fully belongs to cart of user where user puts his choosen products and remove from the cart
//this whole data is stored in users browsers only
// to save some space on database and reduce some operatins to reduce load on server and better result in fast reload

//adding item to cart
//In this function we take users cart data and add more data to the user cart
export const addItemToCart = (item, next) => {
  let cart = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.push({
      ...item,
      count: 1,
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    next();
  }
};

// load cart :- loading cart data on cart page and show all items from cart
export const loadCart = () => {
  let cart = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
      return cart;
    }
  }
};

//removing items from cart
//similar to first:- we take all items and find the item which user want to remove and then put data back
export const removeItemFromCart = (productId) => {
  let cart = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.map((product, i) => {
      if (product._id === productId) {
        cart.splice(i, 1);
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  return cart;
};

//empty out all cart
//when user checkout and places order then we remove all items from cart of user
export const cartEmpty = (next) => {
  if (typeof window !== undefined) {
    localStorage.removeItem("cart");
    let cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
  }
};
