import { isAxiosError } from 'axios';
import { useEffect } from 'react';

import removeToken from '../utils/removeToken';

import api, { getRefreshToken, getToken, setRefreshToken, setToken } from './api';

const useInterceptor = () => {
  useEffect(() => {
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
        // refresh api에서 발생한 에러 처리
        if (isAxiosError(err) && err.response?.status === 401) {
          console.log(err);
          removeToken();
        }
      }
    };

    api.interceptors.response.use(
      (res) => res,
      async (err) => {
        if (err.response.status === 401) {
          await postRefresh();
          const token = getToken();
          err.config.headers['Authorization'] = `Bearer ${token}`;
          return api(err.config);
        }
        return Promise.reject(err);
      },
    );
  }, []);
};

export default useInterceptor;
