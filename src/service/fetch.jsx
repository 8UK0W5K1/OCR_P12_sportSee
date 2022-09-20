/**
 * It fetches data from a server and returns it
 * @param {Number} id - The id of the current user
 * @returns {Promise}
 */

const mockedDatas = false;

export const getMainUserData = async (userId) => {
  let url = `http://localhost:3000/user/${userId}`;

  try {
    if (mockedDatas) {
      url = `/usersDatas/${userId}.json`;
    }
    const response = await fetch(url);
    // console.log(response);
    const mainUserData = await response.json();
    // console.log(mainUserData);
    // console.log(mainUserData.data);

    return mainUserData.data;
  } catch (error) {
    console.log("sorry there's an error :", error);
  }
};

/**
 * It fetches data from a node server / or mockedData if true / and returns activities datas
 * @param {Number} id - The id of the current user
 * @returns {Promise}
 */

export const getActivitiesUserData = async (userId) => {
  let url = `http://localhost:3000/user/${userId}/activity`;

  try {
    if (mockedDatas) {
      url = `/usersDatas/${userId}/activity.json`;
    }
    const response = await fetch(url);
    // console.log(response);
    const userActivitiesData = await response.json();
    // console.log(userActivitiesData);
    // console.log(userActivitiesData.data);
    return userActivitiesData.data;
  } catch (error) {
    console.log("sorry there's an error :", error);
  }
};

/**
 * It fetches data from a url and returns the average session datas.
 * @param {Number} userId - The id of the user
 * @returns {Promise}
 */
export const GetUserAverageSessions = async (userId) => {
  let url = `http://localhost:3000/user/${userId}/average-sessions`;

  try {
    if (mockedDatas) {
      url = `/usersDatas/${userId}/averageSession.json`;
    }
    const response = await fetch(url);
    const averageSessionsTimeData = await response.json();
    // console.log(averageSessionsTimeData.data);
    return averageSessionsTimeData.data;
  } catch (error) {
    console.log("sorry there's an error :", error);
  }
};
/**
 * It fetches data from a url and returns the average session datas.
 * @param {Number} userId - The id of the user
 * @returns {Promise}
 */
export const GetUserPerformances = async (userId) => {
  let url = `http://localhost:3000/user/${userId}/performance`;

  try {
    if (mockedDatas) {
      url = `/usersDatas/${userId}/performance.json`;
    }
    const response = await fetch(url);
    const performancesData = await response.json();
    console.log(performancesData.data);
    return performancesData.data;
  } catch (error) {
    console.log("sorry there's an error :", error);
  }
};
