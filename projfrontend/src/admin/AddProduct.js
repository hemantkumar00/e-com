/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";
import { createProduct } from "./helper/adminapicall";
import { isAuthenticated } from "../auth/helper/index";

const AddProduct = () => {
  const { user, token } = isAuthenticated();

  //holds the data of products from the form
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    photo: "",
    error: "",
    createdProduct: "",
    getRedirect: false,
    loading: false,
    formData: new FormData(),
  });

  const { name, description, error, price, createdProduct, formData } = values;

  // onSubmit button submit the data on click of the button

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true, getRedirect: true });
    createProduct(user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          ...values,
          name: "",
          description: "",
          price: "",
          photo: "",
          loading: false,
          createdProduct: data.name,
        });
      }
    });
  };

  //Success message after creating product successFull

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: createdProduct ? "" : "none" }}
    >
      <h4>{createdProduct} created successfully</h4>
    </div>
  );

  //Warning for any wrong entry to correct data

  const warningMessage = () => {
    <div
      className="alert alert-info, mt-3"
      style={{ display: error ? "" : "none" }}
    >
      <h4>Sorry some thing went wrong </h4>
    </div>;
  };

  //handling change of formData to add photo to the product
  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  //form to take input data from user about product and add them to data base
  const createProductForm = () => (
    <form className="mt-2">
      <span>Post photo</span>
      <div className="form-group">
        <label className="btn btn-block btn-primary mb-2 ">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose a file"
          />
        </label>
      </div>
      <div className="form-group mb-2">
        <input
          onChange={handleChange("name")}
          name="photo"
          className="form-control"
          placeholder="Name"
          value={name}
        />
      </div>
      <div className="form-group mb-2">
        <textarea
          onChange={handleChange("description")}
          name="photo"
          className="form-control"
          placeholder="Description"
          value={description}
        />
      </div>
      <div className="form-group mb-2">
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          placeholder="Price"
          value={price}
        />
      </div>
      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-outline-info mb-3"
      >
        Create Product
      </button>
    </form>
  );

  // returning add product component
  return (
    <Base
      title="Add Product !"
      description="Welcome to product creation area"
      className="container bg-info  p-4"
    >
      <Link to="/admin/dashboard" className="btn btn-md btn-secondary mb-3">
        Dashboard
      </Link>
      <div className="row bg-white text-secondary rounded">
        <div className=" col-8 offset-md-2">
          {successMessage()}
          {warningMessage()}
          {createProductForm()}
        </div>
      </div>
    </Base>
  );
};

//exporting addproduct
export default AddProduct;
