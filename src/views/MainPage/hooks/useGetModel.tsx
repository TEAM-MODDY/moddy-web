import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { ModelResponse } from './type';

import { userTypeState } from '@/recoil/atoms/signUpState';
import api from '@/views/@common/hooks/api';

const useGetModel = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userTypeState);
  const [data, setData] = useState<ModelResponse>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError>();

  const fetchData = async () => {
    await api
      .get('/model?page=1&size=4')
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
    user && fetchData();
  }, []);

  return {
    data,
    error,
    loading,
  };
};

export default useGetModel;
