import React, { useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../features/slices/auth/login';
import './Navigation.css';
import SocialLinks from './SocialLinks';
import { Link } from 'react-router-dom';

const Navigation = () => {
const [show, setShow] = useState(false);

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
<main className={show ? 'space-toggle' : null}>
  <header className={`header ${show ? 'space-toggle' : null}`}>
    <div className='header-toggle' onClick={() => setShow(!show)}>
    <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
    </div>
  </header>

  <aside className={`sidebar ${show ? 'show' : null}`}>
    <nav className='nav'>
      <div>
        <Link to='/main' className='nav-logo'>
          <span className='nav-logo-title'>KeFi</span>
        </Link>

        <div className='nav-list'>
          <NavLink exact to="/main" className='nav-link'>
            <i className='fas fa-home-alt nav-link-icon'></i>
            <span className='nav-link-title'>Hotels</span>
          </NavLink>

        <NavLink to="/reserve" activeClassName="active" className='nav-link'>
          <i className='fas fa-hotel nav-link-icon'></i>
          <span className='nav-link-title'>Reserve</span>
        </NavLink>

        <NavLink to="/delete-hotels" activeClassName="active" className='nav-link'>
          <i className='fas fa-image nav-link-icon'></i>
          <span className='nav-link-title'>Reservation</span>
        </NavLink>

        <NavLink to="/add-hotels" activeClassName="active" className='nav-link'>
          <i className='fas fa-dollar-sign nav-link-icon'></i>
          <span className='nav-link-title'>Add Hotels</span>
        </NavLink>

        <NavLink to="/our-services" activeClassName="active" className='nav-link'>
          <i className='fas fa-dollar-sign nav-link-icon'></i>
          <span className='nav-link-title'>Services</span>
        </NavLink>

        {isloggedOut && <Navigate to="/login" replace={true} />}
        <Link to='/logout' className='nav-link' onClick={handleLogout}>
          <i className='fas fa-sign-out nav-link-icon'></i>
          <span className='nav-link-title'>Logout</span>
        </Link>

        </div>
      </div>

      <div className="sociaals">
        <SocialLinks />
      <p className="copyRight">© 2023 Kefi Group</p>
      </div>
    </nav>
  </aside>

  <h1>Content</h1>
</main>
);
};

export default Navigation;
