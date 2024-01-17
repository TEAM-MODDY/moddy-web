import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { SELECT_PERIOD, SELECT_SERVICE } from '../constants/filter';

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

  const { length } = useRecoilValue(hairStyleState);
  const hairDetail = useRecoilValue(deatiledStyleState);
  const { hairServiceRecords } = useRecoilValue(historyState);
  const { modelImgData, instagramId } = useRecoilValue(profileState);
  const { applicationCaptureImgUrl } = useRecoilValue(applicationCaptureImgUrlState);

  const tempHairServiceRecords = hairServiceRecords.map((element) => {
    const tempElement = { ...element };
    Object.keys(SELECT_SERVICE).forEach((key) => {
      if (key === element.hairService) {
        tempElement.hairService = SELECT_SERVICE[key as keyof typeof SELECT_SERVICE];
      }
    });
    Object.keys(SELECT_PERIOD).forEach((key) => {
      if (key === element.hairServiceTerm) {
        tempElement.hairServiceTerm = SELECT_PERIOD[key as keyof typeof SELECT_PERIOD];
      }
    });
    return tempElement;
  });

  const postApplication = async () => {
    const objApplicationInfo = {
      hairLength: length,
      preferHairStyles: tempPreference,
      hairDetail: hairDetail.data,
      hairServiceRecords: tempHairServiceRecords,
      instagramId,
    };

    const jsonApplicationInfo = JSON.stringify(objApplicationInfo);
    const applicationInfo = new Blob([jsonApplicationInfo], { type: 'application/json' });

    const requestbody = {
      modelImgUrl: modelImgData,
      applicationCaptureImgUrl: applicationCaptureImgUrl,
      applicationInfo,
    };

    try {
      await api.post('/model/application', requestbody, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (err) {
      if (err instanceof AxiosError) navigate('/error');
    }
  };

  return postApplication;
};

export default usePostApplication;
