import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import api from '../hooks/api';
import usePostRefresh from '../hooks/usePostRefresh';
import { getToken } from '../utils/token';

const Interceptors = () => {
  const postRefresh = usePostRefresh();

  useEffect(() => {
    console.log('✅테스트');
    api.interceptors.request.use((config) => {
      const accessToken = getToken();
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      return config;
    });

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

  return <Outlet />;
};

export default Interceptors;
