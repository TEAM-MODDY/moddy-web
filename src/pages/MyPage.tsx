import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../views/@common/components/Header';
import Modal from '../views/@common/components/Modal';
import MyFooter from '../views/MyPage/components/MyFooter';
import MyInfo from '../views/MyPage/components/MyInfo';
import MyMenuList from '../views/MyPage/components/MyMenuList';

import { LOGOUT_MODAL } from '@/views/@common/constants/modalText';

const MyPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <S.MyPageLayout>
      <Header
        title="마이페이지"
        isBackBtnExist
        backFn={() => {
          navigate(-1);
        }}
      />
      <MyInfo />
      <MyMenuList setModalOpen={setModalOpen} />
      <MyFooter />
      {isModalOpen && (
        <Modal
          title={LOGOUT_MODAL.title}
          description={LOGOUT_MODAL.description}
          leftBtnText={LOGOUT_MODAL.leftBtn}
          rightBtnText={LOGOUT_MODAL.rightBtn}
          leftBtnFn={() => setModalOpen && setModalOpen(false)}
          rightBtnFn={() => {
            navigate('/');
            console.log('test');
            // 로그아웃 api 붙이기
          }}
        />
      )}
    </S.MyPageLayout>
  );
};

export default MyPage;

const S = {
  MyPageLayout: styled.div`
    display: flex;
    flex-direction: column;

    height: 100dvh;
    background: ${({ theme }) => theme.colors.moddy_wt};
  `,
};
