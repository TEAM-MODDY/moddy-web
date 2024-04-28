import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import ModelInfo from './ModelInfo';

import Header from '@/views/@common/components/Header';
import Modal from '@/views/@common/components/Modal';
import ToastMessage from '@/views/@common/components/ToastMessage';

const ModelEditInfoSection = () => {
  const [isSaveModalOpen, setSaveModalOpen] = useState(false);
  const [isBackModalOpen, setBackModalOpen] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const navigate = useNavigate();

  //이후 put으로 변경될 예정
  const handleSaveInfo = () => {};

  //왼쪽 이전으로 버튼 클릭시 동작
  const handleBackBtn = () => {
    if (isChanged) {
      setBackModalOpen(true);
    } else {
      navigate(-1);
    }
  };

  const handleCloseBackModal = () => {
    setBackModalOpen(false);
  };

  //오른쪽 저장클릭시 동작
  const handleSaveBtn = () => {
    if (toastMsg) {
      setIsToastOpen(true);
    } else if (isChanged) {
      setSaveModalOpen(true);
    } else {
      navigate('/my-page');
    }
  };

  const handleCloseSaveModal = () => {
    setSaveModalOpen(false);
  };

  return (
    <S.ModelEditInfoSectionLayout>
      {isToastOpen && <ToastMessage text={toastMsg} setter={setIsToastOpen} />}
      <Header
        title="프로필 수정"
        isBackBtnExist={true}
        rightBtn={<S.SaveBtn>저장</S.SaveBtn>}
        rightFn={handleSaveBtn}
        backFn={handleBackBtn}
      />
      {isSaveModalOpen && (
        <Modal
          title="프로필을 수정할까요?"
          description="이전에 작성했던 내용은 사라져요"
          leftBtnText="취소"
          leftBtnFn={handleCloseSaveModal}
          rightBtnText="확인"
          rightBtnFn={handleSaveInfo}
        />
      )}
      {isBackModalOpen && (
        <Modal
          title="수정을 취소할까요?"
          description="저장을 누르지 않으면 <br/>수정 중인 내용이 사라져요."
          leftBtnText="계속하기"
          leftBtnFn={handleCloseBackModal}
          rightBtnText="취소하기"
          rightBtnFn={() => {
            navigate(-1);
          }}
        />
      )}
      <ModelInfo setIsChanged={setIsChanged} setToastMsg={setToastMsg} />
    </S.ModelEditInfoSectionLayout>
  );
};

const S = {
  ModelEditInfoSectionLayout: styled.section`
    display: flex;
    justify-content: center;

    margin: 6.7rem 0 15rem;
    padding: 0 1.6rem;
  `,
  SaveBtn: styled.span`
    cursor: pointer;
    ${({ theme }) => theme.fonts.Body02};
  `,
};

export default ModelEditInfoSection;
