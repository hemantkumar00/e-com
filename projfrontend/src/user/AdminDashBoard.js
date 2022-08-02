/** @format */

import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper/index";
import { Link } from "react-router-dom";

//Admin dashboard to display all data related to admin
const AdminDashBoard = () => {
  const {
    user: { name, email },
  } = isAuthenticated();

  //left side of dashboard
  const adminLeftSide = () => {
    return (
      <div className="card bg-secondary">
        <h4 className="card-header text-white ">Admin Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/admin/create/product" className="nav-link text-primary">
              Create Product
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/orders" className="nav-link text-primary">
              Manage Orders
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  //right side of dashboard - personal information
  const adminRightSide = () => {
    return (
      <div>
        <div className="card mb-4 ">
          <h4 className=" card-header text-secondary">Admin Information</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="badge alert-secondary text-secondary mr-2">
                Name:
              </span>
              {name}
            </li>
            <li className="list-group-item">
              <span className="badge alert-secondary text-secondary mr-2">
                Email:
              </span>
              {email}
            </li>
            <li className="list-group-item">
              <span className="badge alert-danger text-danger mr-2">
                Admin Area
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  //return adminDashboard component
  return (
    <Base
      title="Welcome! to admin area "
      description="Congratulations you are admin 😃 and work hard"
      className="container bg-white p-4 "
    >
      <div className="row ">
        <div className="col-3">{adminLeftSide()}</div>
        <div className="col-9">{adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashBoard;
