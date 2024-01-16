import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UseGetAgreeProps } from './type';

import api from '@/views/@common/hooks/api';

const useGetAgree = (offerId: number) => {
  const navigate = useNavigate();
  const [data, setData] = useState<UseGetAgreeProps>();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState<AxiosError>();

  const fetchData = async () => {
    try {
      const response = await api.get(`/model/${offerId}/agree`, {
        headers: {
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJpYXQiOjE3MDU0MDQzNDksImV4cCI6MTcwNzk5NjM0OSwiVVNFUl9JRCI6IjUifQ.xAlesUHb75qBMCwYZ9cA0lWLtTTlEd5kamBJQ-Z66QLL5zR6GMmfzcqe3YL72JDu',
        },
      });
      setData(response.data.data);
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

  return { data, isLoading, isError };
};

export default useGetAgree;
