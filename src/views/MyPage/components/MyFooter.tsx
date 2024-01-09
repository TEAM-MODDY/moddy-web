import styled from 'styled-components';

const MyFooter = () => {
  return (
    <S.MyFooterLayout>
      <S.MyFooterAnchor href="https://www.google.co.kr">개발자 정보</S.MyFooterAnchor>
    </S.MyFooterLayout>
  );
};

export default MyFooter;

const S = {
  MyFooterLayout: styled.footer`
    position: fixed;
    bottom: 0;

    width: 100%;
    max-width: 43rem;
    margin-bottom: 3.8rem;

    text-align: center;
  `,
  MyFooterAnchor: styled.a`
    border-bottom: 1px solid ${({ theme }) => theme.colors.moddy_gray50};

    color: ${({ theme }) => theme.colors.moddy_gray50};
    text-decoration: none;
    ${({ theme }) => theme.fonts.Body04};
  `,
};
