import styled from 'styled-components';

const LoginText = () => {
  return (
    <S.LoginTextLayout>
      <S.LoginTextH1>
        안녕하세요!
        <br />
        모디에 오신 것을 환영해요.
      </S.LoginTextH1>
      <S.LoginTextParagraph>원활한 서비스 이용을 위해 로그인을 해주세요</S.LoginTextParagraph>
    </S.LoginTextLayout>
  );
};

export default LoginText;

const S = {
  LoginTextLayout: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  `,
  LoginTextH1: styled.h1`
    color: ${({ theme }) => theme.colors.moddy_bk};
    ${({ theme }) => theme.fonts.Title01};
  `,
  LoginTextParagraph: styled.p`
    color: ${({ theme }) => theme.colors.moddy_gray50};
    ${({ theme }) => theme.fonts.Body02};
  `,
};
