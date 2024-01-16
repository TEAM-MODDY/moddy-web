import { useNavigate } from 'react-router-dom';

import api, { removeToken } from '@/views/@common/hooks/api';

const usePostLogout = () => {
  const navigate = useNavigate();

  const postLogout = async () => {
    try {
      await api.post('/auth/logout', null, {
        headers: {
          Authorization: 'Bearer ~',
        },
      });
      //removeToken();
      navigate('/');
    } catch (err) {
      console.log(err);
      navigate('/error');
    }
  };

  return postLogout;
};

export default usePostLogout;
