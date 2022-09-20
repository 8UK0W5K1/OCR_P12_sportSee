import { getMainUserData } from './fetch.jsx';
import { getActivitiesUserData } from './fetch.jsx';
import { GetUserAverageSessions } from './fetch.jsx';

import MainDatasFormater from './dataModelisation/MainDataFormater.jsx';
import ActivitiesDataFormater from './dataModelisation/ActivitiesDataFormater.jsx';
import SessionsDataFormater from './dataModelisation/SessionsDataFormater';

/**
 * @param userId - the id of the user
 * @returns An array of objects with user mainDatas
 */

export async function headerUserData(userId) {
  let mainDatas = {};

  mainDatas = await getMainUserData(userId);
  // console.log(mainDatas);
  // return mainDatas;  sans passage dans le MainDataFormater

  const userData = new MainDatasFormater(mainDatas);
  console.log(userData.keyData.calorieCount);
  return userData;
}

/**
 * @param userId - the id of the user
 * @returns An array of objects with user activities datas
 */

export async function activitiesUserData(userId) {
  let activitiesDatas = {};

  activitiesDatas = await getActivitiesUserData(userId);
  console.log(activitiesDatas);
  // return activitiesDatas;  sans passage dans le MainDataFormater

  const userActivitiesData = new ActivitiesDataFormater(activitiesDatas);
  // console.log(userActivitiesData); // check the activitiesData Formater in console
  return userActivitiesData;
}

/**
 * @param userId - the id of the user
 * @returns An array of objects with user activities datas
 */

export async function userSessionsTimeData(userId) {
  let sessionsData = {};

  sessionsData = await GetUserAverageSessions(userId);
  console.log(sessionsData);
  // return sessionsData;  sans passage dans le SessionsDataFormater

  const userAverageSessionsTimeData = new SessionsDataFormater(sessionsData);
  // console.log(userActivitiesData); // check the activitiesData Formater in console
  return userAverageSessionsTimeData;
}
