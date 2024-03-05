import styled from 'styled-components';

const ExpirationBox = () => {
  return (
    <S.Wrapper>
      <S.Line />
      <S.ExpirationText>지원서 유효기간 어쩌구 저쩌구</S.ExpirationText>
    </S.Wrapper>
  );
};

export default ExpirationBox;

const S = {
  Wrapper: styled.div``,
  Line: styled.div`
    width: 100%;
    height: 0.4rem;
    background-color: ${({ theme }) => theme.colors.moddy_gray05};
  `,
  ExpirationText: styled.p`
    text-align: center;
    padding: 1.3rem 1.52rem;
    margin: 2.8rem 1.5rem 3.9rem 1.6rem;

    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.moddy_gray05};
    color: ${({ theme }) => theme.colors.moddy_gray50};
    ${({ theme }) => theme.fonts.Body02};
  `,
};
