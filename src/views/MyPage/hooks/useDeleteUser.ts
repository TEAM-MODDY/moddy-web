import { useNavigate } from 'react-router-dom';

import api, { removeToken } from '@/views/@common/hooks/api';

const useDeleteUser = () => {
  const navigate = useNavigate();

  const deleteUser = async () => {
    try {
      await api.delete('/user', {
        headers: {
          Authorization: 'Bearer ~',
        },
      });
      //removeToken();
      navigate('/');
    } catch (err) {
      navigate('/error');
    }
  };

  return deleteUser;
};

export default useDeleteUser;
