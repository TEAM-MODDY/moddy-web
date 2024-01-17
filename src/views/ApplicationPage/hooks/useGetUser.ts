import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '@/views/@common/hooks/api';

const useGetUser = () => {
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await api.get(`/model/application/user`);
    } catch (err) {
      console.log(err);
      navigate('/error');
    }
  };

  useEffect(() => {
    getUser();
  }, []);
};

export default useGetUser;
