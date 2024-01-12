import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UseGetOfferModelProps } from './type';

import api from '@/views/@common/hooks/api';

const useGetModel = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<UseGetOfferModelProps>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError>();

  const fetchData = async () => {
    await api
      .get('/model/offer/1', {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJpYXQiOjE3MDQ5OTg1OTMsImV4cCI6MTcwNzU5MDU5MywiVVNFUl9JRCI6IjgifQ.YQO9cpo2qJviduAynEBO6kQVMWLjIehU_OnIGYqGSbpi4UkcbahfwSwKvjdEO-bs`,
        },
      })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        setError(err);
        navigate('/error');
      })
      .finally(() => {
        setLoading(false);
      });
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
