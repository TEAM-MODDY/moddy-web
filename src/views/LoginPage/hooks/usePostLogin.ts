import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { loginErrorProps, loginResProps } from './type';

import { userTypeState } from '@/recoil/atoms/signUpState';
import api from '@/views/@common/hooks/api';
import { setRefreshToken, setToken } from '@/views/@common/utils/token';

const usePostLogin = () => {
  const KAKAO_CODE = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();
  const setUserType = useSetRecoilState(userTypeState);

  useEffect(() => {
    api
      .post('/auth/login', null, {
        headers: {
          Authorization: `Bearer ${KAKAO_CODE}`,
        },
      })
      .then((res: loginResProps) => {
        const { role, accessToken, refreshToken } = res.data.data;
        setToken(accessToken);
        setRefreshToken(refreshToken);
        setUserType(role === 'MODEL' ? 'model' : 'designer');
        navigate('/');
      })
      .catch((err: loginErrorProps) => {
        if (err.response.data.code === 404) {
          setToken(err.response.data.data.accessToken);
          navigate('/agreement');
        } else {
          navigate('/error');
        }
      });
  }, []);
};

export default usePostLogin;
