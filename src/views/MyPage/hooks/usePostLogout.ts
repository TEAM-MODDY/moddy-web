import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { userTypeState } from '@/recoil/atoms/signUpState';
import { USER_TYPE } from '@/views/@common/constants/userType';
import api from '@/views/@common/hooks/api';
import removeToken from '@/views/@common/utils/removeToken';

const usePostLogout = () => {
  const navigate = useNavigate();
  const setUserType = useSetRecoilState(userTypeState);

  const postLogout = async () => {
    try {
      await api.post('/auth/logout', null);
      removeToken();
      setUserType(USER_TYPE.GUEST);
      navigate('/');
    } catch (err) {
      console.log(err);
      navigate('/error');
    }
  };

  return postLogout;
};

export default usePostLogout;
