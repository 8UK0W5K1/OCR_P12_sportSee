import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './userChoice.css';

/**
 * @component
 * @param {Object} data -
 * @returns {JSX.Element} UserChoice component
 */

const UserChoice = ({ id, avatar, name }) => {
  return (
    <Link to={`/user/${id}`} className='chooseUser'>
      <li>
        <img src={avatar} alt='user avatar' />
        <p>{name}</p>
      </li>
    </Link>
  );
};

export default UserChoice;

//Proptypes
UserChoice.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
