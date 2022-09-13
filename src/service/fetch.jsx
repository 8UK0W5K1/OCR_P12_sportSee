/**
 * It fetches data from a server and returns it
 * @param {Number} id - The id of the current user
 * @returns {Promise}
 */

const mockedDatas = true;

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
