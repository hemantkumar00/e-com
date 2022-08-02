/** @format */

import { API } from "../../backend";

//Products calls

//create a product
export const createProduct = (userId, token, product) => {
  return fetch(`${API}/product/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: product,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//get all products
export const getProducts = (productInfo) => {
  return fetch(`${API}/product`, {
    method: "GET",
    body: JSON.stringify(productInfo),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// get a single product

export const getProduct = (productId) => {
  return fetch(`${API}/product/${productId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
