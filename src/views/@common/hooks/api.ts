import axios, { AxiosInstance } from 'axios';

import usePostRefresh from '@/views/LoginPage/hooks/usePostRefresh';

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

const postRefresh = async () => {
  const accessToken = getToken();
  const refreshToken = getRefreshToken();

  try {
    const response = await api.post('/auth/refresh', {
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
    const newToken = response.data.data;
    setToken(newToken.accessToken);
    setRefreshToken(newToken.refreshToken);
  } catch (err) {
    console.log(err);
  }
};

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      console.log('401에러');
      const config = err.config;
      postRefresh().then(() => {
        const token = getToken();
        config.headers['Authorization'] = `Bearer ${token}`;
        return api(config);
      });
    }
    console.log('✅');
    return Promise.reject(err);
  },
);

export default api;
