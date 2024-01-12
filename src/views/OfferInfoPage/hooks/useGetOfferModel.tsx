import { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

import api from './api';
import { UseGetOfferModelProps } from './type';

const useGetOfferModel = () => {
  const [data, setData] = useState<UseGetOfferModelProps>();
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState<AxiosError>();

  const fetchData = async () => {
    try {
      const response: AxiosResponse<UseGetOfferModelProps> = await api.get('/model/offer/${offerId}');
      setData(response.data);
    } catch (err) {
      if (err instanceof AxiosError) {
        setIsError(err);
      } else {
        console.log(err);
      }
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
export default useGetOfferModel;
