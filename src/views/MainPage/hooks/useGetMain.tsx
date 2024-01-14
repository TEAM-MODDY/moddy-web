import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { DesignerResponse, ModelResponse } from './type';

import { userTypeState } from '@/recoil/atoms/signUpState';
import { USER_TYPE } from '@/views/@common/constants/userType';
import api from '@/views/@common/hooks/api';

interface UseGetModelProps {
  page: number;
}

const useGetMain = ({ page }: UseGetModelProps) => {
  const navigate = useNavigate();
  // const user = useRecoilValue(userTypeState);
  const user = 'designer';
  const [data, setData] = useState<ModelResponse | DesignerResponse>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError>();

  const fetchData = async () => {
    try {
      if (page < 3) {
        const res = await api.get(`/${user}?page=${page}&size=4`);
        console.log(res);
        setData((prev) => {
          // 타입 가드: prev가 ModelResponse 타입인지 확인
          if (prev && 'offers' in prev) {
            return {
              ...res.data.data,
              offers: [...prev.offers, ...res.data.data.offers],
            };
          } else if (prev && 'hairModelApplications' in prev) {
            // 타입 가드: prev가 DesignerResponse 타입인지 확인
            return {
              ...res.data.data,
              hairModelApplications: [...prev.hairModelApplications, ...res.data.data.hairModelApplications],
            };
          } else {
            // prev가 undefined이거나 해당 속성이 없는 경우
            return res.data.data;
          }
        });
      }
    } catch (err) {
      if (err instanceof AxiosError) setError(err);
      navigate('/error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    user && fetchData();
  }, [page]);

  return {
    data,
    error,
    loading,
  };
};

export default useGetMain;
