import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { loginErrorProps, loginResProps } from './type';

import { userTypeState } from '@/recoil/atoms/signUpState';
import api, { setToken } from '@/views/@common/hooks/api';

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
        console.log('로그인 성공');
        console.log(res.data.data.accessToken);
        // 로그인완료되고 메인뷰로 이동
        setToken(res.data.data.accessToken);
        setUserType(res.data.data.role);
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
