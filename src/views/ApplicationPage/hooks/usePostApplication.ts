import { AxiosError } from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { applyResProps } from './type';

import {
  applicationCaptureImgUrlState,
  deatiledStyleState,
  hairStyleState,
  historyState,
  profileState,
} from '@/recoil/atoms/applicationState';
import api from '@/views/@common/hooks/api';

const usePostApplication = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState<AxiosError>();

  const { length, preference } = useRecoilValue(hairStyleState);
  const hairDetail = useRecoilValue(deatiledStyleState);
  const { hairServiceRecords } = useRecoilValue(historyState);
  const { modelImgUrl, instagramId } = useRecoilValue(profileState);
  const applicationCaptureImgUrl = useRecoilValue(applicationCaptureImgUrlState);

  const postApplication = async () => {
    const requestBody: applyResProps = {
      hairLength: length,
      preferHairStyles: preference,
      hairDetail: hairDetail.data,
      hairServiceRecords,
      modelImgUrl,
      instagramId,
      applicationCaptureImgUrl: applicationCaptureImgUrl.data,
    };
    try {
      await api.post('/model/application', requestBody, {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJpYXQiOjE3MDQ5OTg0NzksImV4cCI6MTcwNzU5MDQ3OSwiVVNFUl9JRCI6IjcifQ.wUuXuo-7AmfPwpn838vYHUeTan1IVv_B78rg3cGQ-1cvwiB3MNFbYGzWkUS_P6Lj`,
        },
      });
      navigate('/application/confirm');
    } catch (err) {
      if (err instanceof AxiosError) setError(err);
      navigate('/error');
    }
    setLoading(false);
  };

  postApplication();

  return { isLoading, isError };
};

export default usePostApplication;
