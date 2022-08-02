/** @format */

import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  //updating useState on user input

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  //submits the informations as soon as submit button is hit

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "" });
    signup({ name, email, password })
      .then((data) => {
        if (data && data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  //sign up form

  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-gray">First Name</label>
              <input
                className="form-control"
                onChange={handleChange("name")}
                type="text"
                value={name}
              />
            </div>
            <div className="form-group">
              <label className="text-gray">Email</label>
              <input
                className="form-control"
                onChange={handleChange("email")}
                type="email"
                value={email}
              />
            </div>
            <div className="form-group">
              <label className="text-gray">Password</label>
              <input
                className="form-control"
                onChange={handleChange("password")}
                type="password"
                value={password}
              />
            </div>
            <div class="d-grid gap-2 col-6 mx-auto p-4">
              <button
                onClick={onSubmit}
                className="btn btn-primary btn-block rounded-3"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  //success message when user is successfully registered with our website

  const successMessage = () => {
    return (
      <div
        className="alert alert-primary col-6 offset-sm-3 text-left"
        style={{ display: success ? "" : "none" }}
      >
        Congratulations You are registered with our website.{" "}
        <Link to="/signin">Sign in </Link> Here
      </div>
    );
  };

  //error message:- when some date is not appropriate
  //proper message will be diaplayed because of validatation on backend
  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger col-6 offset-sm-3 text-left"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };

  return (
    <Base
      title="Sign up!"
      description="Plz signup to get all information about our website"
    >
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
      {/* <p className='text-center text-primary'>{JSON.stringify(values)}</p> */}
    </Base>
  );
};

export default Signup;
