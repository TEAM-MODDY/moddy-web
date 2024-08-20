import styled from 'styled-components';

import { IcCheck, ImgOnboarding2 } from '../assets';

const OnboardingStep2 = () => {
  return (
    <S.LoginTextLayout>
      <S.LoginTextTop>머리가 망하면 어떡하죠..?</S.LoginTextTop>
      <S.LoginTextH1>
        {`디자이너 실력이\n걱정되시나요?\n`}
        <S.LoginTextBlue>안심하세요! </S.LoginTextBlue>
        모디는
      </S.LoginTextH1>
      <img src={ImgOnboarding2} alt="" />
      <S.LoginContainer>
        <S.LoginWrapper>
          <p>
            <IcCheck />
            <S.LoginMainParagraph>프로 디자이너만 제안 드려요</S.LoginMainParagraph>
          </p>
          <S.LoginTextParagraph>2년차 이상의 디자이너만 모델을 제안할 수 있어요</S.LoginTextParagraph>
        </S.LoginWrapper>
        <S.LoginWrapper>
          <p>
            <IcCheck />
            <S.LoginMainParagraph>디자이너를 비교 후 선택해요</S.LoginMainParagraph>
          </p>
          <S.LoginTextParagraph>포트폴리오를 비교하고 디자이너를 선택할 수 있어요</S.LoginTextParagraph>
        </S.LoginWrapper>
      </S.LoginContainer>
    </S.LoginTextLayout>
  );
};

export default OnboardingStep2;

const S = {
  LoginTextLayout: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;

    & > img {
      height: 16rem;
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
    white-space: pre-line;
  `,
  LoginTextBlue: styled.span`
    color: ${({ theme }) => theme.colors.moddy_blue};
    ${({ theme }) => theme.fonts.Title01};

    font-size: 2.6rem;
  `,
  LoginContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  `,
  LoginWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    justify-content: center;
    align-items: center;

    & > p {
      display: flex;
      gap: 0.4rem;
      align-items: center;
    }
  `,
  LoginMainParagraph: styled.span`
    color: ${({ theme }) => theme.colors.moddy_bk};
    ${({ theme }) => theme.fonts.Headline01};
  `,
  LoginTextParagraph: styled.p`
    color: ${({ theme }) => theme.colors.moddy_gray50};
    ${({ theme }) => theme.fonts.Body02};

    text-align: center;
    white-space: pre-line;
  `,
};
