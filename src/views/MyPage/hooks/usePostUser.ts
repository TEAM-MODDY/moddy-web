import { AxiosError } from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '@/views/@common/hooks/api';

const usePostUser = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState<AxiosError>();

  const postUser = async () => {
    try {
      await api.post('/user');
      navigate('/');
    } catch (err) {
      if (err instanceof AxiosError) setError(err);
      navigate('/error');
    }
    setLoading(false);
  };

  postUser();

  return { isLoading, isError };
};

export default usePostUser;
