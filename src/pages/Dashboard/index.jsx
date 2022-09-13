import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DashboardNavigation from '../../components/DashboardNavigation';
import MacronutrientCard from '../../components/MacronutrientCard';

import { headerUserData } from '../../service/providers';

import caloriesIcon from '../../assets/icons/caloriesIcon.png';
import carbsIcon from '../../assets/icons/carbsIcon.png';
import fatIcon from '../../assets/icons/fatIcon.png';
import proteinIcon from '../../assets/icons/proteinIcon.png';

import './dashboard.css';

/**
 * Creation of the Dashboard page with charts & user datas
 * @returns {JSX.Element} Dashboard component
 */

const Dashboard = () => {
  const { userId } = useParams();
  // console.log(userId);

  const [datas, setDatas] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const userDatas = await headerUserData(userId);
        setDatas({ userDatas });
        setIsLoading(false);
      } catch (error) {
        console.log("sorry, there's an error :", error);
        window.location = '/error';
      }
    })();
  }, [userId]);

  return (
    <>
      <DashboardNavigation />
      <div className='dashboard'>
        {isLoading ? (
          'Loading...'
        ) : (
          <div className='dashboardHeader'>
            <h1>
              Bonjour{' '}
              <span className='dashboardHeader__username'>
                {' '}
                {datas.userDatas.userFirstname}
              </span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
        )}
      </div>
      <div className='dashboardContent'></div>
      <div className='macronutrientCards'>
        <MacronutrientCard
          icon={caloriesIcon}
          // data={}
          unit='Kcal'
          text='Calories'
        />
        <MacronutrientCard
          icon={proteinIcon}
          // data={}
          unit='g'
          text='Protéines'
        />
        <MacronutrientCard
          icon={carbsIcon}
          // data={}
          unit='g'
          text='Glucides'
        />
        <MacronutrientCard
          icon={fatIcon}
          // data={}
          unit='g'
          text='Lipides'
        />
      </div>
    </>
  );
};

export default Dashboard;
