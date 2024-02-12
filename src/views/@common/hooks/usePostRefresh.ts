import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

import { getRefreshToken, getToken, removeToken, setRefreshToken, setToken } from '../utils/token';

import api from './api';

const usePostRefresh = () => {
  const navigate = useNavigate();

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
        console.log('🚨리프레시 만료 에러');
        removeToken();
        navigate('/');
      }
    }
  };

  return postRefresh;
};

export default usePostRefresh;
