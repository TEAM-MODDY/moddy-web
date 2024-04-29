import { useNavigate } from 'react-router-dom';

import { ModelUserInfo, ModelUserRequestBody, RegionData } from './type';

import api from '@/views/@common/hooks/api';

const usePutModelUser = (info: ModelUserInfo, regionList: RegionData[]) => {
  const navigate = useNavigate();
  const { name, year, gender, preferRegions } = info;

  const convertedGender = gender === '여성' ? 'FEMALE' : 'MALE';

  const convertedPreferRegions: string[] = [];
  preferRegions.forEach((region) => {
    const matchedRegion = regionList.find((r) => r.name === region);
    matchedRegion && convertedPreferRegions.push(matchedRegion.id.toString());
  });

  const requestBody: ModelUserRequestBody = {
    name,
    year,
    gender: convertedGender,
    preferRegions: convertedPreferRegions,
  };

  const putModelInfo = async () => {
    try {
      await api.put(`/model`, requestBody);
      navigate('/my-page');
    } catch (err) {
      navigate('/error');
    }
  };
  return putModelInfo;
};

export default usePutModelUser;
