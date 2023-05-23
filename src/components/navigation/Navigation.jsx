import React, { useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../features/slices/auth/login';
import './Navigation.css';
import '../login/login.css';
import SocialLinks from './SocialLinks';
import { Link } from 'react-router-dom';
import logo from '../../Assets/KefI-logo-green.png';

const Navigation = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const isloggedOut = useSelector((state) => state.login.isloggedOut);

  const handleLogout = () => {
    try {
      dispatch(logoutUser());
      window.location.href = '/';
    } catch (error) {
      console.log('Logout error:', error);
    }
  };

  const handleNavLinkClick = () => {
    setShow(false);
  };

  return (
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className="header-toggle" onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
        </div>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className="nav">
          <div>
            <Link to="/main" className="nav-logo">
              {show && <img src={logo} className="klogo" alt="logo"></img>}
            </Link>
            <div className="nav-wrapper">
              <div className="nav-list">
                <NavLink
                  exact
                  to="/main"
                  className="nav-link"
                  onClick={handleNavLinkClick}
                >
                  <i className="fas fa-home-alt nav-link-icon"></i>
                  <span className="nav-link-title">Hotels</span>
                </NavLink>

                <NavLink
                  to="/reserved-hotel"
                  activeClassName="active"
                  className="nav-link"
                  onClick={handleNavLinkClick}
                >
                  <i className="fas fa-bed nav-link-icon"></i>
                  <span className="nav-link-title">Reservation</span>
                </NavLink>

                <NavLink
                  to="/add-hotels"
                  activeClassName="active"
                  className="nav-link"
                  onClick={handleNavLinkClick}
                >
                  <i className="fas fa-plus nav-link-icon"></i>
                  <span className="nav-link-title">Add Hotels</span>
                </NavLink>

                <NavLink
                  to="/delete-hotels"
                  activeClassName="active"
                  className="nav-link"
                  onClick={handleNavLinkClick}
                >
                  <i className="far fa-trash-alt nav-link-icon"></i>
                  <span className="nav-link-title">Delete Hotels</span>
                </NavLink>

                <NavLink
                  to="/our-services"
                  activeClassName="active"
                  className="nav-link"
                  onClick={handleNavLinkClick}
                >
                  <i className="fas fa-cogs nav-link-icon"></i>
                  <span className="nav-link-title">Services</span>
                </NavLink>

                {isloggedOut && <Navigate to="/login" replace={true} />}
                <Link
                  to="/logout"
                  className="nav-link"
                  onClick={() => {
                    handleNavLinkClick();
                    handleLogout();
                  }}
                >
                  <i className="fas fa-sign-out nav-link-icon"></i>
                  <span className="nav-link-title">Logout</span>
                </Link>
              </div>
            </div>
          </div>
          <div className={`sociaals ${!show ? 'hide' : ''}`}>
            {show && <SocialLinks />}
            {show && <p className="copyRight">© 2023 Kefi Group </p>}
          </div>
        </nav>
      </aside>
    </main>
  );
};

export default Navigation;
