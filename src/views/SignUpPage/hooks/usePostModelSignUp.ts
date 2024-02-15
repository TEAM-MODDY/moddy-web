import { AxiosError } from 'axios';
import { useState } from 'react';
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

const usePostModelSignUp = () => {
  const navigate = useNavigate();

  const [, setLoading] = useState(true);
  const [, setError] = useState<AxiosError>();

  const tempUserType = useRecoilValue(tempUserTypeState);
  const setSessionUserType = useSetRecoilState(userTypeState);
  const name = useRecoilValue(nameState);
  const birthYear = useRecoilValue(birthYearState);
  const gender = useRecoilValue(genderState);
  const phoneNumber = useRecoilValue(phoneNumberState);
  const preferRegions = useRecoilValue(preferRegionState);
  const isMarketingAgree = useRecoilValue(marketingState);

  const preferRegion = preferRegions.map((value, index) => (value ? index : -1)).filter((index) => index !== -1);

  const postModelSignUp = async () => {
    const requestBody: ModelSignUpRequest = {
      name: name,
      year: birthYear,
      gender: gender,
      phoneNumber: phoneNumber.data,
      isMarketingAgree: isMarketingAgree,
      preferRegions: preferRegion,
    };
    try {
      await api.post('/auth/signup/model', requestBody);
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

  return postModelSignUp;
};

export default usePostModelSignUp;
