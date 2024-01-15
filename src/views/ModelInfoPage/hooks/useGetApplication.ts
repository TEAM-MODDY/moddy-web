import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ModelInfoPageProps } from './types';

import api from '@/views/@common/hooks/api';

const useGetApplication = (applicationId: number) => {
  const navigate = useNavigate();
  const [data, setData] = useState<ModelInfoPageProps>();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState<AxiosError>();

  const fetchData = async () => {
    try {
      const response = await api.get(`/designer/${applicationId}`, {
        headers: {
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJpYXQiOjE3MDQ5OTg1OTMsImV4cCI6MTcwNzU5MDU5MywiVVNFUl9JRCI6IjgifQ.YQO9cpo2qJviduAynEBO6kQVMWLjIehU_OnIGYqGSbpi4UkcbahfwSwKvjdEO-bs',
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

export default useGetApplication;
