import { AxiosError } from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { SELECT_PERIOD, SELECT_SERVICE, SELECT_STYLE } from '../constants/filter';

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

  const tempHairServiceRecords = hairServiceRecords.map((element) => {
    const tempElement = { ...element };
    Object.keys(SELECT_SERVICE).forEach((key) => {
      if (key === element.service) {
        tempElement.service = SELECT_SERVICE[key as keyof typeof SELECT_SERVICE];
      }
    });
    Object.keys(SELECT_PERIOD).forEach((key) => {
      if (key === element.period) {
        tempElement.period = SELECT_PERIOD[key as keyof typeof SELECT_PERIOD];
      }
    });
    return tempElement;
  });

  const tempPreference = preference.map((element) => {
    let tempElement = element;
    Object.keys(SELECT_STYLE).forEach((key) => {
      if (key === element) {
        tempElement = SELECT_STYLE[key as keyof typeof SELECT_STYLE];
      }
    });
    return tempElement;
  });

  const postApplication = async () => {
    const requestBody: applyResProps = {
      hairLength: length,
      preferHairStyles: tempPreference,
      hairDetail: hairDetail.data,
      hairServiceRecords: tempHairServiceRecords,
      modelImgUrl,
      instagramId,
      applicationCaptureImgUrl: applicationCaptureImgUrl.data,
    };
    console.log(requestBody);

    try {
      await api.post('/model/application', requestBody, {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJpYXQiOjE3MDQ5OTg0NzksImV4cCI6MTcwNzU5MDQ3OSwiVVNFUl9JRCI6IjcifQ.wUuXuo-7AmfPwpn838vYHUeTan1IVv_B78rg3cGQ-1cvwiB3MNFbYGzWkUS_P6Lj`,
          'Content-Type': 'multipart/form-data',
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
