import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/sportSeeLogo.png';
import './navbar.css';

/**
 * Website's navbar with its navigation links
 * @component
 * @returns {JSX.Element} Navbar component
 */

const Navbar = () => {
  return (
    <section className='header'>
      <NavLink to='/'>
        <div className='compagnyLogo'>
          <img src={logo} alt='logo SportSee' />
        </div>
      </NavLink>
      <div className='navbar'>
        <ul>
          <NavLink to='/' className='navbar__li'>
            <li>Accueil</li>
          </NavLink>
          <NavLink to='' className='navbar__li'>
            <li>Profil</li>
          </NavLink>
          <NavLink to='' className='navbar__li'>
            <li>Réglage</li>
          </NavLink>
          <NavLink to='' className='navbar__li'>
            <li>Communauté</li>
          </NavLink>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
