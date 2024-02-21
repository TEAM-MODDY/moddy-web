import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UseGetAgreeProps } from './type';

import api from '@/views/@common/hooks/api';

const useGetAgree = (designerId: number) => {
  const navigate = useNavigate();
  const [data, setData] = useState<UseGetAgreeProps>();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState<AxiosError>();

  const fetchData = async () => {
    try {
      const response = await api.get(`/designer/${designerId}`);
      setData(response.data.data);
    } catch (err) {
      if (err instanceof AxiosError) setError(err);

      navigate('/error');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, isError };
};

export default useGetAgree;
