import styled from 'styled-components';

import { ImgOnboarding1 } from '../assets';

const OnboardingStep1 = () => {
  return (
    <S.LoginTextLayout>
      <S.LoginTextTop>요즘 디자인펌 20만원..?</S.LoginTextTop>
      <S.LoginTextH1>
        헤어 모델로 펌하고
        <br />
        <S.LoginTextBlue>아낀 돈으로</S.LoginTextBlue>
        <br />
        콘서트 예매했어요!
      </S.LoginTextH1>

      <img src={ImgOnboarding1} alt="" />
      <S.LoginTextParagraph>{`원하는 헤어스타일 실력있는 디자이너에게\n헤어 모델로 시술 받기`}</S.LoginTextParagraph>
    </S.LoginTextLayout>
  );
};

export default OnboardingStep1;

const S = {
  LoginTextLayout: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;
    margin-top: 7.6rem;

    & > img {
      width: 24rem;
      margin: 3rem 0 1.2rem;
    }
  `,
  LoginTextTop: styled.p`
    color: ${({ theme }) => theme.colors.moddy_blue};
    ${({ theme }) => theme.fonts.Body01};
  `,
  LoginTextH1: styled.h1`
    margin-top: 1.6rem;

    color: ${({ theme }) => theme.colors.moddy_bk};
    ${({ theme }) => theme.fonts.Title01};

    font-size: 2.6rem;
    text-align: center;
    line-height: 3.5rem;
  `,
  LoginTextBlue: styled.span`
    color: ${({ theme }) => theme.colors.moddy_blue};
    ${({ theme }) => theme.fonts.Title01};

    font-size: 2.6rem;
  `,
  LoginTextParagraph: styled.p`
    color: ${({ theme }) => theme.colors.moddy_gray50};
    ${({ theme }) => theme.fonts.Body02};

    text-align: center;
    white-space: pre-line;
  `,
};
