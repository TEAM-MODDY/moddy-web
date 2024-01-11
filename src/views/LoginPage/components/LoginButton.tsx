import styled from 'styled-components';

import { ImgKakaotalk } from '../assets/images';
import { KAKAO_LINK } from '../constants/kakaoLink';

const LoginButton = () => {
  const handleLogin = () => {
    window.location.href = KAKAO_LINK;
  };

  return (
    <S.LoginButtonLayout>
      <S.LoginButtonBtn
        type="button"
        onClick={() => {
          handleLogin();
        }}>
        <ImgKakaotalk />
        카카오 로그인
      </S.LoginButtonBtn>
    </S.LoginButtonLayout>
  );
};

export default LoginButton;

const S = {
  LoginButtonLayout: styled.section`
    display: flex;
    justify-content: center;

    width: 100%;
    padding: 0 1.5rem 4rem 1.6rem;
  `,
  LoginButtonBtn: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    width: 100%;
    padding: 1.8rem 0;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.kakao};

    color: ${({ theme }) => theme.colors.moddy_bk};
    ${({ theme }) => theme.fonts.Headline01};

    & > svg {
      position: absolute;
      left: 1.6rem;
    }
  `,
};
