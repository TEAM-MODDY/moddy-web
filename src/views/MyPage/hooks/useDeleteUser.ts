import { useNavigate } from 'react-router-dom';

import api from '@/views/@common/hooks/api';
import removeToken from '@/views/@common/utils/removeToken';

const useDeleteUser = () => {
  const navigate = useNavigate();

  const deleteUser = async () => {
    try {
      await api.delete('/user');
      removeToken();
      navigate('/');
    } catch (err) {
      navigate('/error');
    }
  };

  return deleteUser;
};

export default useDeleteUser;
