import React from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../features/slices/auth/login';
import './Navigation.css';
import SocialLinks from './SocialLinks';

const Navigation = () => {
  const dispatch = useDispatch();
  const islogged = useSelector((state) => state.login.islogged);
  const isloggedOut = useSelector((state) => state.login.isloggedOut);

  const handleLogout = () => {
    try {
      dispatch(logoutUser());
      // Set islogged to false
      // (assuming you have an action or reducer to handle this)
      // dispatch(setLoggedOut()); or dispatch({ type: 'SET_LOGGED_OUT' });
      // Replace the window location with the login page
      window.location.href = '/login';
    } catch (error) {
      // Handle any error that occurred during logout
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
          <NavLink to="/reserve" activeClassName="active">
            RESERVE
          </NavLink>
          <NavLink to="/delete-hotels" activeClassName="active">
            MY RESERVATION
          </NavLink>
          <NavLink to="/add-hotels" activeClassName="active">
            ADD HOTELS
          </NavLink>
          <NavLink to="/our-services" activeClassName="active">
            OUR SERVICES
          </NavLink>
          {isloggedOut && <Navigate to="/login" replace={true} />}
          <button onClick={handleLogout}>Logout</button>
          {islogged && <Navigate to="/main" replace={false} />}
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
