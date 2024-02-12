import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

import { DesignerResponse, ModelResponse } from './type';

import { USER_TYPE } from '@/views/@common/constants/userType';
import api from '@/views/@common/hooks/api';
import { removeToken } from '@/views/@common/utils/token';

interface UseGetModelProps {
  user: string;
  page: number;
}

const useGetMain = ({ user, page }: UseGetModelProps) => {
  const [data, setData] = useState<ModelResponse | DesignerResponse>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError>();

  const fetchData = async () => {
    try {
      const res = await api.get(`/${user}?page=${page}&size=4`);
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
    } catch (err) {
      if (err instanceof AxiosError) setError(err);
      removeToken();
      location.reload();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    user !== USER_TYPE.GUEST && fetchData();
  }, [page]);

  return {
    data,
    error,
    loading,
  };
};

export default useGetMain;
