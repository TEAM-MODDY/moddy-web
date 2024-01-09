import styled from 'styled-components';

const ErrorText = () => {
  return (
    <S.ErrorTextLayout>
      <h1>일시적인 오류입니다</h1>
      <p>
        지금은 서비스를 이용할 수 없어요
        <br />
        나중에 다시 접속을 시도해주세요
      </p>
    </S.ErrorTextLayout>
  );
};

export default ErrorText;

const S = {
  ErrorTextLayout: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;

    margin: 2.2rem 0 3.2rem;

    & > h1 {
      color: ${({ theme }) => theme.colors.moddy_bk};
      ${({ theme }) => theme.fonts.Title03};
    }

    & > p {
      color: ${({ theme }) => theme.colors.moddy_bk};
      ${({ theme }) => theme.fonts.Body02};
    }
  `,
};
