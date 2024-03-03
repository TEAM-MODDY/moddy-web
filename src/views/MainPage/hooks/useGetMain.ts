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
  const [modelData, setModelData] = useState<ModelResponse>();
  const [designerData, setDesignerData] = useState<DesignerResponse>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError>();

  const fetchData = async () => {
    try {
      // 추후 수정
      const mode = user === USER_TYPE.MODEL ? 'offer' : 'application';
      const res = await api.get(`/${mode}?page=${page}&size=4`);
      if (user === USER_TYPE.MODEL) {
        setModelData((prev) => ({
          ...res.data.data,
          offers: [...(prev?.offers || []), ...res.data.data.offers],
        }));
      } else if (user === USER_TYPE.DESIGNER) {
        setDesignerData((prev) => ({
          ...res.data.data,
          hairModelApplications: [...(prev?.hairModelApplications || []), ...res.data.data.hairModelApplications],
        }));
      }
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
    modelData,
    designerData,
    error,
    loading,
  };
};

export default useGetMain;
