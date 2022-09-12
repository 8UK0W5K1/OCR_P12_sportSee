import React from 'react';
import { NavLink } from 'react-router-dom';

import bike from '../../assets/icons/bike.png';
import swim from '../../assets/icons/swim.png';
import yoga from '../../assets/icons/yoga.png';
import haltere from '../../assets/icons/haltere.png';

import './dashboardNavigation.css';

/**
 * Creation of the Dashboard vertical Navigation component
 * @returns {JSX.Element} Dashboard Vertical Navigation component
 */

const DashboardNavigation = () => {
  return (
    <div className='dashboard__navigation'>
      <ul>
        <NavLink to='' className='dashboard__navigation__links'>
          <img src={yoga} alt='yoga' />
        </NavLink>
        <NavLink to='' className='dashboard__navigation__links'>
          <img src={swim} alt='swim' />
        </NavLink>
        <NavLink to='' className='dashboard__navigation__links'>
          <img src={bike} alt='bike' />
        </NavLink>
        <NavLink to='' className='dashboard__navigation__links'>
          <img src={haltere} alt='haltere' />
        </NavLink>
      </ul>
      <div className='copyright'>Copyright, SportSee 2020</div>
    </div>
  );
};

export default DashboardNavigation;
