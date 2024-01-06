import styled from 'styled-components';

import { IcCloseBlack, IcLeftBlack } from '../assets/icons';

interface HeaderProps {
  isBackBtnExist?: boolean;
  isCloseBtnExist?: boolean;
  title: string;
  backFn?: () => void;
  closeFn?: () => void;
}

const Header = ({ isBackBtnExist, isCloseBtnExist, title, backFn, closeFn }: HeaderProps) => {
  return (
    <S.HeaderLayout>
      <S.HeaderBox>
        <button onClick={backFn}>{isBackBtnExist ? <IcLeftBlack /> : <S.HeaderBlankBox />}</button>
        <S.HeaderH1>{title}</S.HeaderH1>
        <button onClick={closeFn}>{isCloseBtnExist ? <IcCloseBlack /> : <S.HeaderBlankBox />}</button>
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
