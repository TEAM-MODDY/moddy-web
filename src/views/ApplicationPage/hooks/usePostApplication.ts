import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { SELECT_PERIOD, SELECT_SERVICE, SELECT_STYLE } from '../constants/select';

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

  const { length, preference } = useRecoilValue(hairStyleState);
  const hairDetail = useRecoilValue(deatiledStyleState);
  const { hairServiceRecords } = useRecoilValue(historyState);
  const { modelImgData, instagramId } = useRecoilValue(profileState);
  const applicationCaptureImgUrl = useRecoilValue(applicationCaptureImgUrlState);

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

  const convertedPreference = preference.map((preferenceElement) => {
    const convertedItem = SELECT_STYLE.find((key) => key.CONTENT[preferenceElement]);
    return convertedItem && convertedItem.CONTENT[preferenceElement];
  });

  const postApplication = async () => {
    const objApplicationInfo = {
      hairLength: length,
      preferHairStyles: convertedPreference,
      hairDetail: hairDetail.data,
      hairServiceRecords: tempHairServiceRecords,
      instagramId,
    };

    const jsonApplicationInfo = JSON.stringify(objApplicationInfo);
    const applicationInfo = new Blob([jsonApplicationInfo], { type: 'application/json' });

    const requestbody = {
      modelImgUrl: modelImgData,
      applicationCaptureImgUrl,
      applicationInfo,
    };

    try {
      const { data } = await api.post('/application', requestbody, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate(`/application/confirm`, {
        state: {
          expireDate: data.data.expireDate,
        },
      });
    } catch (err) {
      if (err instanceof AxiosError) navigate('/error');
    }
  };

  return postApplication;
};

export default usePostApplication;
