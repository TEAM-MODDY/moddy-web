import styled from 'styled-components';

import ImgBackground from '@/views/LoginPage/assets/images/img_Background.png';
import LoginButton from '@/views/LoginPage/components/LoginButton';
import OnboardingStep1 from '@/views/LoginPage/components/OnboardingStep1';
const LoginPage = () => {
  return (
    <S.LoginPageLayout>
      <OnboardingStep1 />
      <LoginButton />
    </S.LoginPageLayout>
  );
};

export default LoginPage;

const S = {
  LoginPageLayout: styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100dvh;

    background-image: url(${ImgBackground});
    background-size: cover;
  `,
};
