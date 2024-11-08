import { useNavigate } from 'react-router-dom';

import api from '@/views/@common/hooks/api';
import { removeToken } from '@/views/@common/utils/token';

const usePostLogout = () => {
  const navigate = useNavigate();
  const postLogout = async () => {
    try {
      await api.post('/auth/logout', null);
      removeToken();
      navigate('/');
    } catch (err) {
      navigate('/error');
    }
  };

  return postLogout;
};

export default usePostLogout;
