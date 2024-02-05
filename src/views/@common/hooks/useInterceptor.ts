import { useEffect } from 'react';

import api, { getToken } from './api';
import usePostRefresh from './usePostRefresh';

const useInterceptor = () => {
  const postRefresh = usePostRefresh();

  useEffect(() => {
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
};

export default useInterceptor;
