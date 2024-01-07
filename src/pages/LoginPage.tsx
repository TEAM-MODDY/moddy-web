import styled from 'styled-components';

import Header from '../views/@common/components/Header';
import LoginText from '../views/LoginPage/components/LoginText';

const LoginPage = () => {
  return (
    <S.LoginPageLayout>
      <Header title="" isBackBtnExist />
      <LoginText />
    </S.LoginPageLayout>
  );
};

export default LoginPage;

const S = {
  LoginPageLayout: styled.div`
    display: flex;
    flex-direction: column;

    padding: 9.1rem 1.6rem;
  `,
};
