import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserProps, UserResponse } from './type';

import api from '@/views/@common/hooks/api';

const useGetUser = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<UserProps>();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState<AxiosError>();

  const fetchData = async () => {
    try {
      const data: UserResponse = await api.get('/user');
      setData(data.data);
    } catch (err) {
      if (err instanceof AxiosError) setError(err);
      else {
        console.log(err);
      }
      navigate('/error');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    isError,
    isLoading,
  };
};

export default useGetUser;
