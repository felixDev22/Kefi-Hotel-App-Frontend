import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../features/slices/auth/logout';
import './Navigation.css';
import SocialLinks from './SocialLinks';

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.logout.isLogged);

  const handleLogout = () => {
    dispatch(logoutUser());
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
          {isLogged ? (
            <button type="button" className="btnss" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <NavLink to="/login" className="btnss" activeClassName="active">
              Login
            </NavLink>
          )}
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
