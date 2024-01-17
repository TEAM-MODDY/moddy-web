import { useNavigate } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';

import { userTypeState } from '@/recoil/atoms/signUpState';
import api from '@/views/@common/hooks/api';
import removeToken from '@/views/@common/utils/removeToken';

const useDeleteUser = () => {
  const navigate = useNavigate();
  const resetType = useResetRecoilState(userTypeState);

  const deleteUser = async () => {
    try {
      await api.delete('/user');
      removeToken();
      resetType();
      navigate('/');
    } catch (err) {
      navigate('/error');
    }
  };

  return deleteUser;
};

export default useDeleteUser;
