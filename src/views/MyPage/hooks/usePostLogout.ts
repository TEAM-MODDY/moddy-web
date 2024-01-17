import { useNavigate } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';

import { userTypeState } from '@/recoil/atoms/signUpState';
import api from '@/views/@common/hooks/api';
import removeToken from '@/views/@common/utils/removeToken';

const usePostLogout = () => {
  const navigate = useNavigate();
  const resetType = useResetRecoilState(userTypeState);
  const postLogout = async () => {
    try {
      await api.post('/auth/logout', null);
      removeToken();
      resetType();
      navigate('/');
    } catch (err) {
      console.log(err);
      navigate('/error');
    }
  };

  return postLogout;
};

export default usePostLogout;
