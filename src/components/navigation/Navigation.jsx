import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../features/slices/auth/logout';
import './Navigation.css';
import SocialLinks from './SocialLinks';

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loggedOut, setLoggedOut] = useState(false);

  const handleLogout = async () => {
    await dispatch(logoutUser());
    setLoggedOut(true);
    navigate('/login');
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
