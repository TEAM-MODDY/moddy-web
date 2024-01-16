import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { RegionResponse } from './type';

import { regionState } from '@/recoil/atoms/signUpState';
import api from '@/views/@common/hooks/api';

const useGetRegion = () => {
  const [, setRegion] = useRecoilState(regionState);

  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState<AxiosError>();

  const fetchData = async () => {
    try {
      const response: RegionResponse = await api.get('/auth/regions');
      setRegion(response.data.data);
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

  return {
    isError,
    isLoading,
  };
};

export default useGetRegion;
