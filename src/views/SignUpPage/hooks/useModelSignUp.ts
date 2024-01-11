import { AxiosError } from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { ModelSignUpRequest } from './type';

import {
  agreementState,
  birthYearState,
  genderState,
  nameState,
  phoneNumberState,
  preferRegionState,
} from '@/recoil/atoms/signUpState';
import api from '@/views/@common/hooks/api';

const useModelSignUp = () => {
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState<AxiosError>();

  const name = useRecoilValue(nameState);
  const birthYear = useRecoilValue(birthYearState);
  const gender = useRecoilValue(genderState);
  const phoneNumber = useRecoilValue(phoneNumberState);
  const preferRegions = useRecoilValue(preferRegionState);
  const isMarketingAgree = useRecoilValue(agreementState);

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
          Authorization: `Bearer JSa-Lpvd51AYDJj8LahXQHmr1ZpQBHzG4Jft2gS98331KC2OfSICgimwYg4KPXVbAAABjPllUhmIenTzhLqDRQ`,
        },
      });
      console.log(data);
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
