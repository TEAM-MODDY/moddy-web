import axios, { AxiosInstance } from 'axios';

const OfferInfoApi: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const ACCESS_TOKEN = 'token';

export const getToken = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};

OfferInfoApi.interceptors.request.use((config) => {
  const accessToken = getToken();
  if (accessToken) {
    config.headers['Authorization'] =
      `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJpYXQiOjE3MDQ5OTg0NzksImV4cCI6MTcwNzU5MDQ3OSwiVVNFUl9JRCI6IjcifQ.wUuXuo-7AmfPwpn838vYHUeTan1IVv_B78rg3cGQ-1cvwiB3MNFbYGzWkUS_P6Lj`;
  }
  return config;
});

export default OfferInfoApi;
