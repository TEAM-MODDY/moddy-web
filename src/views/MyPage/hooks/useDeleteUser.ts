import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { userTypeState } from '@/recoil/atoms/signUpState';
import { USER_TYPE } from '@/views/@common/constants/userType';
import api from '@/views/@common/hooks/api';
import removeToken from '@/views/@common/utils/removeToken';

const useDeleteUser = () => {
  const navigate = useNavigate();
  const setUserType = useSetRecoilState(userTypeState);

  const deleteUser = async () => {
    try {
      await api.delete('/user');
      removeToken();
      setUserType(USER_TYPE.GUEST);
      navigate('/');
    } catch (err) {
      navigate('/error');
    }
  };

  return deleteUser;
};

export default useDeleteUser;
