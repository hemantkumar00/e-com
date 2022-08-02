/** @format */

import React, { useEffect, useState } from "react";
import Base from "../core/Base";
import { getUser, isAuthenticated } from "../auth/helper/index";

//dislpays user profile and data to profile page once user signup

const UserDashBoard = () => {
  const {
    token,
    user: { name, email, _id },
  } = isAuthenticated();

  const [values, setValues] = useState({
    purchases: [],
  });
  const { purchases } = values;

  //loads user data to user further to display

  useEffect(() => {
    getUser(_id, token).then((result) => {
      setValues({ ...values, purchases: result.purchases });
    }, []);
  });
  const userLeftSide = () => {
    return (
      <div>
        <div className="card mb-4 ">
          <h4 className=" card-header text-secondary">User Information</h4>
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
                User Area
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <Base
      title="Welcome! to admin area "
      description="Congratulations you are admin 😃 and work hard"
      className="container bg-white p-4 "
    >
      <div className="row ">
        <div className="col-4">{userLeftSide()}</div>
        <div className="col-8">
          <h1>This is order area</h1>
          {purchases.map((item, index) => {
            console.log(item);
            return (
              <div key={index} className="row ">
                <p className="col-2">{index + 1}.</p>
                <p className="col-2">{item.name}</p>
                <p className="col-2">{item.description}</p>
                <p className="col-2">{item.amount} $</p>
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
};

export default UserDashBoard;
