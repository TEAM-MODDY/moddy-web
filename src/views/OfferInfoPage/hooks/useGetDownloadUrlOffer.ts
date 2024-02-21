import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserGetDownloadUrlOfferProps } from './type';

import api from '@/views/@common/hooks/api';

const useGetDownloadUrlOffer = (applicationId: number) => {
  const navigate = useNavigate();
  const [data, setData] = useState<UserGetDownloadUrlOfferProps>();

  const getUrl = async () => {
    try {
      const response = await api.get(`/application/${applicationId}/download-url`);
      setData(response.data.data);
    } catch (err) {
      navigate('/error');
    }
  };

  useEffect(() => {
    getUrl();
  }, []);

  return data;
};

export default useGetDownloadUrlOffer;
