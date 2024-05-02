import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ModelUserInfoResponse, ModelUserInfo } from './type';

import api from '@/views/@common/hooks/api';

const useGetModelUser = (setInfo: React.Dispatch<React.SetStateAction<ModelUserInfo>>) => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response: ModelUserInfoResponse = await api.get('/model');
      setInfo(response.data.data);
    } catch (err) {
      navigate('/error');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading;
};

export default useGetModelUser;
