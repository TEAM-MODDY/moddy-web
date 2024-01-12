import { AxiosError } from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '@/views/@common/hooks/api';

const useDeleteUser = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState<AxiosError>();

  const deleteUser = async () => {
    try {
      await api.delete('/user');
      navigate('/');
    } catch (err) {
      if (err instanceof AxiosError) setError(err);
      navigate('/error');
    }
    setLoading(false);
  };

  deleteUser();

  return { isLoading, isError };
};

export default useDeleteUser;
