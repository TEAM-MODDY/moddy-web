import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UseGetOfferModelProps } from './type';

import api from '@/views/@common/hooks/api';

const useGetOfferModel = (offerId: number) => {
  const navigate = useNavigate();
  const [data, setData] = useState<UseGetOfferModelProps>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError>();

  const fetchData = async () => {
    try {
      const response = await api.get(`/offer/${offerId}`);
      setData(response.data.data);
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err);
        navigate('/error');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    error,
    loading,
  };
};

export default useGetOfferModel;
