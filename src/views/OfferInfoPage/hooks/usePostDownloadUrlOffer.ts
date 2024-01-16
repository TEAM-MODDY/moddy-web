import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserGetDownloadUrlOfferProps } from './type';

import api from '@/views/@common/hooks/api';

const usePostDownloadUrlOffer = (imgUrl: string) => {
  const navigate = useNavigate();
  const [data, setData] = useState<UserGetDownloadUrlOfferProps>();

  const postUrl = async () => {
    try {
      const response = await api.post('/designer/offer/download-url', {
        offerImageUrl: imgUrl,
      });
      console.log(response.data.data);
      setData(response.data.data);
    } catch (err) {
      navigate('/error');
    }
  };

  useEffect(() => {
    postUrl();
  }, []);

  return data;
};

export default usePostDownloadUrlOffer;
