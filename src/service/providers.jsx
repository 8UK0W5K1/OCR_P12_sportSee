import { getMainUserData } from './fetch.jsx';
import { getActivitiesUserData } from './fetch.jsx';

import MainDatasFormater from './dataModelisation/MainDataFormater.jsx';

export async function headerUserData(userId) {
  let mainDatas = {};

  mainDatas = await getMainUserData(userId);
  console.log(mainDatas);
  // return mainDatas;  sans passage dans le MainDataFormater

  const userData = new MainDatasFormater(mainDatas);
  console.log(userData.keyData.calorieCount);
  return userData;
}

export async function activitiesUserData(userId) {
  let activitiesDatas = {};

  activitiesDatas = await getActivitiesUserData(userId);
  // console.log(activitiesDatas);
  // return mainDatas;  sans passage dans le MainDataFormater

  return activitiesDatas;
  // const userMainDatas = new MainDatasFormater(mainDatas);
  // return userMainDatas;
}
