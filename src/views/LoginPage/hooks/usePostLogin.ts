import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { loginErrorProps, loginResProps } from './type';

import { kakaoCodeState } from '@/recoil/atoms/kakaoCodeState';
import api from '@/views/@common/hooks/api';

const usePostLogin = () => {
  const KAKAO_CODE = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();
  const setKakaoCode = useSetRecoilState(kakaoCodeState);

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
          setKakaoCode(KAKAO_CODE);
          navigate('/agreement');
        } else {
          navigate('/error');
        }
      });
  }, []);
};

export default usePostLogin;
