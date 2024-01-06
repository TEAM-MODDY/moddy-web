import styled from 'styled-components';

import { IcCloseBlack, IcLeftBlack } from '../assets/icons';

interface HeaderProps {
  isBackBtnExist?: boolean;
  isCloseBtnExist?: boolean;
  title: string;
}

const Header = ({ isBackBtnExist, isCloseBtnExist, title }: HeaderProps) => {
  return (
    <S.HeaderLayout>
      <S.HeaderBox>
        {isBackBtnExist ? <IcLeftBlack /> : <S.HeaderBlankBox />}
        <S.HeaderH1>{title}</S.HeaderH1>
        {isCloseBtnExist ? <IcCloseBlack /> : <S.HeaderBlankBox />}
      </S.HeaderBox>
    </S.HeaderLayout>
  );
};

export default Header;

const S = {
  HeaderLayout: styled.section`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    width: 100%;
    padding: 0.9rem 1.6rem 1.7rem 1.5rem;

    background-color: ${({ theme }) => theme.colors.moddy_wt};
  `,
  HeaderBox: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  HeaderH1: styled.h1`
    ${({ theme }) => theme.fonts.Headline01};
  `,
  HeaderBlankBox: styled.div`
    width: 2.4rem;
    height: 2.4rem;
  `,
};
