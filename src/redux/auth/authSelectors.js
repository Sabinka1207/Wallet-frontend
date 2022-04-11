const getIsLoggedIn = state => state.auth.isAuth;

const getUserName = state => state.auth.user.name;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const checkToken = state => state.auth.token;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsFetchingCurrent,
  checkToken,
};

export default authSelectors;
