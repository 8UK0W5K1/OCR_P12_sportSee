import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DashboardNavigation from '../../components/DashboardNavigation';
import MacronutrientCard from '../../components/MacronutrientCard';
import DailyActivity from '../../components/DailyActivity';
import Performances from '../../components/Performances';

import { headerUserData } from '../../service/providers';
import { activitiesUserData } from '../../service/providers';
import { userSessionsTimeData } from '../../service/providers';
import { userPerformancesData } from '../../service/providers';

import caloriesIcon from '../../assets/icons/caloriesIcon.png';
import carbsIcon from '../../assets/icons/carbsIcon.png';
import fatIcon from '../../assets/icons/fatIcon.png';
import proteinIcon from '../../assets/icons/proteinIcon.png';

import './dashboard.css';
import AverageSessionTime from '../../components/AverageSessionTime';

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
        const userActivitiesDatas = await activitiesUserData(userId);
        const userSessionsDatas = await userSessionsTimeData(userId);
        const userPerformanceData = await userPerformancesData(userId);
        setDatas({
          userDatas,
          userActivitiesDatas,
          userSessionsDatas,
          userPerformanceData,
        });
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
          <>
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
            <div className='dashboardContent'>
              <div>
                <DailyActivity
                  activityValues={datas.userActivitiesDatas.sessions}
                />
                <div className='charts'>
                  <AverageSessionTime
                    sessions={datas.userSessionsDatas.sessionsData}
                  />
                  <Performances
                    performance={datas.userPerformanceData.performData}
                  />
                  <ScoreChart score={datas.userDatas.score[0].value} />
                </div>
              </div>
              <div className='macronutrientCards'>
                <MacronutrientCard
                  icon={caloriesIcon}
                  data={datas.userDatas.keyData.calorieCount}
                  unit='Kcal'
                  text='Calories'
                />
                <MacronutrientCard
                  icon={proteinIcon}
                  data={datas.userDatas.keyData.proteinCount}
                  unit='g'
                  text='Protéines'
                />
                <MacronutrientCard
                  icon={carbsIcon}
                  data={datas.userDatas.keyData.lipidCount}
                  unit='g'
                  text='Glucides'
                />
                <MacronutrientCard
                  icon={fatIcon}
                  data={datas.userDatas.keyData.carbohydrateCount}
                  unit='g'
                  text='Lipides'
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Dashboard;
