import { AxiosError } from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { ModelSignUpRequest } from './type';

import {
  marketingState,
  birthYearState,
  genderState,
  nameState,
  phoneNumberState,
  preferRegionState,
  tempUserTypeState,
  userTypeState,
} from '@/recoil/atoms/signUpState';
import api from '@/views/@common/hooks/api';

const useModelSignUp = () => {
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState<AxiosError>();

  const tempUserType = useRecoilValue(tempUserTypeState);
  const setSessionUserType = useSetRecoilState(userTypeState);
  const name = useRecoilValue(nameState);
  const birthYear = useRecoilValue(birthYearState);
  const gender = useRecoilValue(genderState);
  const phoneNumber = useRecoilValue(phoneNumberState);
  const preferRegions = useRecoilValue(preferRegionState);
  const isMarketingAgree = useRecoilValue(marketingState);

  const preferRegion = preferRegions.data.map((value, index) => (value ? index : -1)).filter((index) => index !== -1);

  const postSignUp = async () => {
    const requestBody: ModelSignUpRequest = {
      name: name.data,
      year: birthYear.data,
      gender: gender.data,
      phoneNumber: phoneNumber.data,
      isMarketingAgree: isMarketingAgree,
      preferRegions: preferRegion,
    };
    try {
      const data = await api.post('/auth/signup/model', requestBody, {
        headers: {
          Authorization: `Bearer ~`,
        },
      });
      console.log(data);
      setSessionUserType(tempUserType);
      navigate('/');
    } catch (err) {
      if (err instanceof AxiosError) setError(err);
      else {
        console.log(err);
      }
      navigate('/error');
    }
    setLoading(false);
  };

  return postSignUp;
};

export default useModelSignUp;
