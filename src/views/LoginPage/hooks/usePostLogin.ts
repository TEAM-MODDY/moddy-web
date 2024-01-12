import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { loginErrorProps, loginResProps } from './type';

import api from '@/views/@common/hooks/api';

const usePostLogin = () => {
  const KAKAO_CODE = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    api
      .post('/auth/login', null, {
        headers: {
          Authorization: `Bearer ${KAKAO_CODE}`,
        },
      })
      .then((res: loginResProps) => {
        console.log('로그인 성공');
        console.log(res);
        // 로그인완료되고 메인뷰로 이동
      })
      .catch((err: loginErrorProps) => {
        if (err.response.data.code === 404) {
          navigate('/sign-up');
        } else {
          navigate('/error');
        }
      });
  }, []);
};

export default usePostLogin;
