import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { TOTAL_STEP } from '../constants/step';

import Button from '@/views/@common/components/Button';
import Modal from '@/views/@common/components/Modal';
import ProgressBar from '@/views/@common/components/ProgressBar';

const OpenChatLink = () => {
  const navigate = useNavigate();
  const [isOpenModal, setOpenModal] = useState(false);
  return (
    <>
      <ProgressBar whole={TOTAL_STEP.DESIGNER_VIEW} current={6} />
      <OpenChatLinkLayout>
        <p>1:1오픈채팅방 링크</p>
      </OpenChatLinkLayout>
      <Button
        text="완료"
        isFixed={true}
        onClickFn={() => {
          setOpenModal(true);
        }}
      />
      {isOpenModal && (
        <Modal
          title="이대로 가입하시겠어요?"
          description="가입 후에는 수정이 어려워요"
          leftBtnText="돌아가기"
          rightBtnText="확인"
          leftBtnFn={() => setOpenModal(false)}
          rightBtnFn={() => navigate('/')}
        />
      )}
    </>
  );
};
export default OpenChatLink;

const OpenChatLinkLayout = styled.div`
  margin-top: 8.6rem;
  padding: 0 1.6rem;
`;
