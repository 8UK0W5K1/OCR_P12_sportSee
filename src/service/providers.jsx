import { getMainUserData } from './fetch.jsx';
import MainDatasFormater from './dataModelisation/MainDataFormater.jsx';

export async function headerUserData(userId) {
  let mainDatas = {};

  mainDatas = await getMainUserData(userId);
  // console.log(mainDatas);
  // return mainDatas;  sans passage dans le MainDataFormater

  const userMainDatas = new MainDatasFormater(mainDatas);
  return userMainDatas;
}
