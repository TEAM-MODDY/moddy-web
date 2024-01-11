import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../views/@common/components/Button';
import Header from '../views/@common/components/Header';
import Modal from '../views/@common/components/Modal';
import MyQuitCheck from '../views/MyQuit/components/MyQuitCheck';
import MyQuitText from '../views/MyQuit/components/MyQuitText';

const MyQuitPage = () => {
  const [isChecked, setChecked] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <S.MyQuitPageLayout>
      <Header title="회원탈퇴" isBackBtnExist backFn={() => navigate(-1)} />
      <MyQuitText />
      <MyQuitCheck isChecked={isChecked} setChecked={setChecked} />
      <Button text="확인하기" onClickFn={() => setModalOpen(true)} isFixed disabled={!isChecked} />
      {isModalOpen && (
        <Modal
          title="서비스 탈퇴"
          description="정말 탈퇴하시겠습니까?"
          leftBtnText="취소하기"
          rightBtnText="확인"
          leftBtnFn={() => setModalOpen && setModalOpen(false)}
          rightBtnFn={() => {
            console.log('회원탈퇴 완료');
            navigate('/');
            // 회원탈퇴 api
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
