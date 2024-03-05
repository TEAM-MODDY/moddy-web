import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { IcAccountFooter, IcDelete, IcLogout } from '../assets/icons';
import usePostLogout from '../hooks/usePostLogout';

import MyMenuItem from './MyMenuItem';

import Header from '@/views/@common/components/Header';
import Modal from '@/views/@common/components/Modal';
import { LOGOUT_MODAL } from '@/views/@common/constants/modalText';

const MyAccountPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const postLogout = usePostLogout();

  return (
    <S.MyAccountLayout>
      <Header
        title="계정관리"
        isBackBtnExist
        backFn={() => {
          navigate(-1);
        }}
      />
      <S.MyAccountBox>
        <MyMenuItem icon={<IcLogout />} text="로그아웃" onClickFn={() => setModalOpen(true)} />
        <S.MyAccountLine />
        <MyMenuItem icon={<IcDelete />} text="회원탈퇴" onClickFn={() => navigate('/my-quit')} />
      </S.MyAccountBox>
      <S.MyAccountBoldLine />
      <S.MyAccountFooter>
        <IcAccountFooter />
      </S.MyAccountFooter>
      {isModalOpen && (
        <Modal
          title={LOGOUT_MODAL.title}
          description={LOGOUT_MODAL.description}
          leftBtnText={LOGOUT_MODAL.leftBtn}
          rightBtnText={LOGOUT_MODAL.rightBtn}
          leftBtnFn={() => setModalOpen && setModalOpen(false)}
          rightBtnFn={() => {
            postLogout();
          }}
        />
      )}
    </S.MyAccountLayout>
  );
};

export default MyAccountPage;

const S = {
  MyAccountLayout: styled.section`
    display: flex;
    flex-direction: column;

    height: 100dvh;

    background: ${({ theme }) => theme.colors.moddy_wt};
  `,
  MyAccountBox: styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 4.9rem;
    padding: 2.4rem 1.6rem;
  `,
  MyAccountLine: styled.div`
    width: 100%;
    height: 0.1rem;
    margin: 1.2rem 0;

    background-color: ${({ theme }) => theme.colors.moddy_gray10};
  `,
  MyAccountBoldLine: styled.div`
    width: 100%;
    height: 0.8rem;

    background-color: ${({ theme }) => theme.colors.moddy_gray05};
  `,
  MyAccountFooter: styled.footer`
    display: flex;
    justify-content: center;

    width: 100%;
    margin-top: 4.8rem;
  `,
};
