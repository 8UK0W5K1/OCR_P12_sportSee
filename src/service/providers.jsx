import { getMainUserData } from './fetch.jsx';

export async function headerUserData(userId) {
  let mainDatas = {};

  mainDatas = await getMainUserData(userId);
  console.log(mainDatas);
  return mainDatas;
}
