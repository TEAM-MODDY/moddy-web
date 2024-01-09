import styled from 'styled-components';

import { ImgKakaotalk } from '../assets/images';

const LoginButton = () => {
  return (
    <S.LoginButtonLayout>
      <S.LoginButtonBtn
        type="button"
        onClick={() => {
          console.log('카카오 로그인이 실행될겁니다');
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
    position: fixed;
    bottom: 0;

    width: 100%;
    max-width: 43rem;
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
