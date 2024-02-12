const ACCESS_TOKEN = 'token';
const REFRESH_TOKEN = 'refresh';

const getToken = () => {
  return sessionStorage.getItem(ACCESS_TOKEN);
};

const setToken = (token: string) => {
  sessionStorage.setItem(ACCESS_TOKEN, token);
};

const getRefreshToken = () => {
  return sessionStorage.getItem(REFRESH_TOKEN);
};

const setRefreshToken = (token: string) => {
  sessionStorage.setItem(REFRESH_TOKEN, token);
};

const removeToken = () => {
  sessionStorage.clear();
};

export { getToken, setToken, getRefreshToken, setRefreshToken, removeToken };
