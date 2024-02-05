import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const ACCESS_TOKEN = 'token';
const REFRESH_TOKEN = 'refresh';

export const getToken = () => {
  return sessionStorage.getItem(ACCESS_TOKEN);
};

export const setToken = (token: string) => {
  sessionStorage.setItem(ACCESS_TOKEN, token);
};

export const getRefreshToken = () => {
  return sessionStorage.getItem(REFRESH_TOKEN);
};

export const setRefreshToken = (token: string) => {
  sessionStorage.setItem(REFRESH_TOKEN, token);
};

api.interceptors.request.use((config) => {
  const accessToken = getToken();
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

export default api;
