import React from 'react';
import UserChoice from '../../components/UserChoice';

import Jeremie from '../../assets/21.svg';
import Justine from '../../assets/27.svg';
import '../../assets/27.svg';
import './home.css';

const Home = () => {
  return (
    <div className='main'>
      <div className='connectPage'>
        <h2 className='userChoice__title'> Se connecter en tant que :</h2>
        <div className='userChoice'>
          <UserChoice avatar={Jeremie} name='Jérémie Deldem' id='21' />
          <UserChoice avatar={Justine} name='Justine McCrum' id='27' />
        </div>
      </div>
    </div>
  );
};

export default Home;
