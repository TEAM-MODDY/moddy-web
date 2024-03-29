import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ApplyUserProps } from './type';

import api from '@/views/@common/hooks/api';

const useGetUser = () => {
  const [data, setData] = useState<ApplyUserProps>();
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await api.get('/model/detail');
      setData(response.data.data);
    } catch (err) {
      navigate('/error');
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return data;
};

export default useGetUser;
