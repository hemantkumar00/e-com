/** @format */

import React from "react";
import Menu from "./Menu";

// Base class is just overall structure of website which carrys out uniformity throughout the website
// to have seemless experiance to the user

const Base = ({
  title = "My Title",
  description = "My desription",
  className = " text-white p-4",
  children,
}) => (
  <div className="hello ">
    <Menu />
    <div className="container-fluid p-5 ">
      <div className="jumbotron  text-primary text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    <footer className="footer bg-secondary mt-auto py-2">
      <div className="container-fluid  text-white text-center py-2">
        <p className="lead">
          If you got any questions, feel free to reach out!
        </p>
        <a
          href="mailto:hemantkumar23090@gmail.com'"
          className="btn btn-warning "
        >
          Contact Us
        </a>
      </div>
      <div className="container">
        <span className="text-gray lead">
          An Amazing <span className="text-white">E-COMMERCE</span> Shopping
          website
        </span>
      </div>
    </footer>
  </div>
);

export default Base;
