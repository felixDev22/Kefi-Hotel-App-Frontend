import React from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../features/slices/auth/login';
import './Navigation.css';
import SocialLinks from './SocialLinks';

const Navigation = () => {
  const dispatch = useDispatch();
  const isloggedOut = useSelector((state) => state.login.isloggedOut);

  const handleLogout = () => {
    try {
      dispatch(logoutUser());
      window.location.href = '/login';
    } catch (error) {
      console.log('Logout error:', error);
    }
  };

  return (
    <div className="navigation">
      <div className="navi">
        <h1 className="logo">KeFi</h1>
        <div className="navbar">
          <NavLink exact to="/main" activeClassName="active">
            HOTELS
          </NavLink>
          <NavLink to="/delete=hotel" activeClassName="active">
            DELETE HOTEL
          </NavLink>
          <NavLink to="/reserved-hotel" activeClassName="active">
            MY RESERVATION
          </NavLink>
          <NavLink to="/add-hotels" activeClassName="active">
            ADD HOTELS
          </NavLink>
          <NavLink to="/our-services" activeClassName="active">
            OUR SERVICES
          </NavLink>
          {isloggedOut && <Navigate to="/login" replace={true} />}
          <button className="btnss" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <div className="sociaals">
        <SocialLinks />
        <p className="copyRight">© 2023 Kefi Group</p>
      </div>
    </div>
  );
};

export default Navigation;
