/** @format */

import { API } from "../../backend";

//gatting all products
//we get all products as soon as user reaches to out website
export const getProducts = () => {
  return fetch(`${API}/product`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
