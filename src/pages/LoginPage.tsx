import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../views/@common/components/Header';
import LoginText from '../views/LoginPage/components/LoginText';
const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <S.LoginPageLayout>
      <Header
        title=""
        isBackBtnExist
        backFn={() => {
          navigate('/');
        }}
      />
      <LoginText />
    </S.LoginPageLayout>
  );
};

export default LoginPage;

const S = {
  LoginPageLayout: styled.div`
    display: flex;
    flex-direction: column;

    height: 100dvh;
    padding-top: 9.1rem;
  `,
};
