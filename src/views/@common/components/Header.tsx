import styled from 'styled-components';

import { IcCloseBlack, IcLeftBlack } from '../assets/icons';

const Header = () => {
  return (
    <S.HeaderLayout>
      <S.HeaderBox>
        <IcLeftBlack />
        <S.HeaderH1>헤더 제목</S.HeaderH1>
        <IcCloseBlack />
      </S.HeaderBox>
    </S.HeaderLayout>
  );
};

export default Header;

const S = {
  HeaderLayout: styled.section`
    width: 100%;
    height: 5rem;
    padding: 0.9rem 1.6rem 1.7rem 1.5rem;
  `,
  HeaderBox: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  `,
  HeaderH1: styled.h1`
    ${({ theme }) => theme.fonts.Headline01};
  `,
};
