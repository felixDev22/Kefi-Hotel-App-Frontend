import React from 'react';
import { NavLink } from 'react-router-dom';
import './splach.css';

export default function Splash() {
  return (
    <div className="container">
      <div className="splash">
        <h1>
          Welcome to <br /> <span>KeFi</span>
        </h1>
      </div>
      <div className="btns">
        <NavLink
          to="/login"
          className="btn login btn-primary btn-rounded mx-5 px-5"
          activeClassName="active">
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className="btn signup btn-primary btn-rounded mx-5 px-5"
          activeClassName="active">
          Sign Up
        </NavLink>
      </div>
    </div>
  );
}
