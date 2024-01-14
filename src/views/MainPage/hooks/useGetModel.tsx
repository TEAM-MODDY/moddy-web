import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { ModelResponse } from './type';

import { userTypeState } from '@/recoil/atoms/signUpState';
import api from '@/views/@common/hooks/api';

interface UseGetModelProps {
  page: number;
}

const useGetModel = ({ page }: UseGetModelProps) => {
  const navigate = useNavigate();
  const user = useRecoilValue(userTypeState);
  const [data, setData] = useState<ModelResponse>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError>();

  const fetchData = async () => {
    try {
      const res = await api.get(`/model?page=${page}&size=4`);
      setData((prev) => ({
        ...res.data.data,
        offers: prev?.offers ? [...prev.offers, ...res.data.data.offers] : [...res.data.data.offers],
      }));
    } catch (err) {
      if (err instanceof AxiosError) setError(err);
      navigate('/error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // user && fetchData();
    fetchData();
  }, [page]);

  return {
    data,
    error,
    loading,
    fetchData,
  };
};

export default useGetModel;
