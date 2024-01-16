import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { IcCloseBlack, IcLeftBlack } from '../assets/icons';

import Modal from './Modal';

interface HeaderProps {
  isBackBtnExist?: boolean;
  isCloseBtnExist?: boolean;
  title: string;
  backFn?: () => void;
  closeFn?: () => void;
}

const Header = ({ isBackBtnExist, isCloseBtnExist, title, backFn, closeFn }: HeaderProps) => {
  const navigate = useNavigate();
  const [isOpenModal, setOpenModal] = useState(false);
  const onClose = () => {
    setOpenModal(true);
  };
  return (
    <S.HeaderLayout>
      <S.HeaderBox>
        <button onClick={backFn ? backFn : () => navigate(-1)}>
          {isBackBtnExist ? <IcLeftBlack /> : <S.HeaderBlankBox />}
        </button>
        <S.HeaderH1>{title}</S.HeaderH1>
        <button onClick={() => onClose()}>{isCloseBtnExist ? <IcCloseBlack /> : <S.HeaderBlankBox />}</button>
      </S.HeaderBox>
      {isOpenModal && (
        <Modal
          title="작성을 취소하시겠습니까?"
          description="지금 작성을 취소하면<br/>작성 중인 내용이 사라져요."
          leftBtnText="취소하기"
          rightBtnText="계속하기"
          leftBtnFn={() => setOpenModal(false)}
          rightBtnFn={() => closeFn && closeFn()}
        />
      )}
    </S.HeaderLayout>
  );
};

export default Header;

const S = {
  HeaderLayout: styled.section`
    position: fixed;
    top: 0;
    z-index: 1;

    width: 100%;
    max-width: 43rem;
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
