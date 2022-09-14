import { getMainUserData } from './fetch.jsx';
import { getActivitiesUserData } from './fetch.jsx';

import MainDatasFormater from './dataModelisation/MainDataFormater.jsx';
import ActivitiesDataFormater from './dataModelisation/ActivitiesDataFormater.jsx';

export async function headerUserData(userId) {
  let mainDatas = {};

  mainDatas = await getMainUserData(userId);
  // console.log(mainDatas);
  // return mainDatas;  sans passage dans le MainDataFormater

  const userData = new MainDatasFormater(mainDatas);
  console.log(userData.keyData.calorieCount);
  return userData;
}

export async function activitiesUserData(userId) {
  let activitiesDatas = {};

  activitiesDatas = await getActivitiesUserData(userId);
  console.log(activitiesDatas);
  // return activitiesDatas;  sans passage dans le MainDataFormater

  const userActivitiesData = new ActivitiesDataFormater(activitiesDatas);
  // console.log(userActivitiesData); // check the activitiesData Formater in console
  return userActivitiesData;
}
