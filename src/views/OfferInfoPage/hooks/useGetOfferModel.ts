import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line import/no-unresolved
import OfferInfoApi from './OfferInfoApi';
import { UseGetOfferModelProps } from './type';

const useGetModel = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<UseGetOfferModelProps>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError>();

  const fetchData = async () => {
    try {
      const response = await OfferInfoApi.get('/model/offer/1', {
        headers: {
          Authorization: `Bearer {code}`,
        },
      });
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

export default useGetModel;
