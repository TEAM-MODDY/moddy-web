import styled from 'styled-components';

import { ImgOnboardingLogo } from '../assets';

const OnboardingStep3 = () => {
  return (
    <S.LoginTextLayout>
      <S.LoginTextH1>30년 전 가격으로 예쁜 머리하기</S.LoginTextH1>
      <img src={ImgOnboardingLogo} alt="" />
    </S.LoginTextLayout>
  );
};

export default OnboardingStep3;

const S = {
  LoginTextLayout: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    margin-top: 7.6rem;

    & > img {
      width: 18.8rem;
    }
  `,
  LoginTextH1: styled.h1`
    ${({ theme }) => theme.fonts.Headline01};
  `,
};
