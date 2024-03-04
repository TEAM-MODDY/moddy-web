import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../views/@common/components/Button';
import Header from '../views/@common/components/Header';
import Modal from '../views/@common/components/Modal';
import MyQuitCheck from '../views/MyQuit/components/MyQuitCheck';
import MyQuitText from '../views/MyQuit/components/MyQuitText';

import { QUIT_MODAL } from '@/views/@common/constants/modalText';
import useDeleteUser from '@/views/MyQuit/hooks/useDeleteUser';

const MyQuitPage = () => {
  const [isChecked, setChecked] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();
  const deleteUser = useDeleteUser();

  return (
    <S.MyQuitPageLayout>
      <Header title="회원탈퇴" isBackBtnExist backFn={() => navigate(-1)} />
      <MyQuitText />
      <MyQuitCheck isChecked={isChecked} setChecked={setChecked} />
      <Button text="탈퇴하기" onClickFn={() => setModalOpen(true)} isFixed disabled={!isChecked} />
      {isModalOpen && (
        <Modal
          title={QUIT_MODAL.title}
          description={QUIT_MODAL.description}
          leftBtnText={QUIT_MODAL.leftBtn}
          rightBtnText={QUIT_MODAL.rightBtn}
          leftBtnFn={() => setModalOpen && setModalOpen(false)}
          rightBtnFn={() => {
            deleteUser();
          }}
        />
      )}
    </S.MyQuitPageLayout>
  );
};

export default MyQuitPage;

const S = {
  MyQuitPageLayout: styled.div`
    display: flex;
    flex-direction: column;
  `,
};
