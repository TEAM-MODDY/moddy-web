import Header from '@/views/@common/components/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import DesignerInfoSection from './DesignerInfoSection';
import Modal from '@/views/@common/components/Modal';
import ToastMessage from '@/views/@common/components/ToastMessage';
import { TOAST_MESSAGE } from '../constants/message';

const EditInfoPage = () => {
  const isModel = useLocation();
  const navigate = useNavigate();
  const [isChanged, setIsChanged] = useState(false);
  const [isSaveModalOpen, setSaveModalOpen] = useState(false);
  const [isBackModalOpen, setBackModalOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [errorField, setErrorField] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState('');

  //정보 변경시에 동작
  const handleInfoChange = () => {
    setIsChanged(true);
  };
  const handleErrorChange = (errors: string[]) => {
    setErrorField(errors);
  };

  //오른쪽 저장클릭시 동작
  const handleSaveBtn = () => {
    if (isChanged) {
      if (errorField.length > 0) {
        const firstError = errorField[0];
        const toastMessage = TOAST_MESSAGE[firstError];
        if (toastMessage) {
          setToastMessage(toastMessage);
          setToastOpen(true);
        }
      } else {
        setBackModalOpen(true);
      }
    } else {
      navigate('/my-page');
    }
  };

  const handleCloseSaveModal = () => {
    setSaveModalOpen(false);
  };

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

  //이후 put으로 변경될 예정
  const handleSaveInfo = () => {
    console.log('Data');
  };

  return (
    <>
      {toastOpen && <ToastMessage key={errorField[0]} text={toastMessage} setter={setToastOpen} />}
      <Header
        title="프로필 수정"
        isBackBtnExist={true}
        rightBtn={<S.SaveBtn>저장</S.SaveBtn>}
        rightFn={handleSaveBtn}
        backFn={handleBackBtn}
      />
      <S.InfoSection>
        {isModel.state ? (
          <div>가콩 여기야</div>
        ) : (
          <DesignerInfoSection onInfoChange={handleInfoChange} onErrorFieldChange={handleErrorChange} />
        )}
      </S.InfoSection>

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
    </>
  );
};

const S = {
  InfoSection: styled.div`
    margin: 6.7rem 0 15rem;
  `,

  SaveBtn: styled.p`
    cursor: pointer;
    ${({ theme }) => theme.fonts.Body02};
  `,
};

export default EditInfoPage;
