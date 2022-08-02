/** @format */

import { API } from "../../backend";

// create Order :- this is used to create orders of the products present in users cart and then remove them from local storage
// if order is placed successfully
export const createOrder = (userId, token, orderData) => {
  return fetch(`${API}/order/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ order: orderData }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

//to get individual orders of every person

export const getOrders = (userId, token) => {
  return fetch(`${API}/order/all/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
