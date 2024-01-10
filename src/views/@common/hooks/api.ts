import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const ACCESS_TOKEN = 'token';

export const getToken = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};

export const setToken = (token: string) => {
  localStorage.setItem(ACCESS_TOKEN, token);
};

export const removeToken = () => {
  localStorage.removeItem(ACCESS_TOKEN);
};

// access token key 로컬스토리지에서 관리 예정
// api.interceptors.request.use((config) => {
//   const accessToken = getToken();
//   if (accessToken) {
//     config.headers['Authorization'] = `Bearer ${accessToken}`;
//   }
//   return config;
// });

export default api;
