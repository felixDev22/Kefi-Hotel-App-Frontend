import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="navigation">
      <h1 className="logo">KeFi</h1>
      <div className="navbar">
        <NavLink exact to="/main" activeClassName="active">
          HOTELS
        </NavLink>
        <NavLink to="/reservation" activeClassName="active">
          MY RESERVATION
        </NavLink>
        <NavLink to="/add-hotels" activeClassName="active">
          ADD HOTELS
        </NavLink>
        <NavLink to="/delete-hotels" activeClassName="active">
          DELETE HOTEL
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
