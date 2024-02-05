import { isAxiosError } from 'axios';

import removeToken from '../utils/removeToken';

import api, { getRefreshToken, getToken, setRefreshToken, setToken } from './api';

const usePostRefresh = () => {
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
      console.log('🚨리프레시 에러');
      removeToken();
      // navigate('/login');

      if (isAxiosError(err) && err.response?.status === 401) {
        console.log(err);
        removeToken();
      }
    }
  };

  return postRefresh;
};

export default usePostRefresh;
