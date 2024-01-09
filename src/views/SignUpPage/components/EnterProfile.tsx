import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../@common/components/Header';
import { STEP } from '../constants/step';

import PersonalInfo from './PersonalInfo';
import SelectPrefeRegion from './SelectPreferRegion';
import VerifyPhoneNumber from './VerifyPhoneNumber';

import Modal from '@/views/@common/components/Modal';

interface EnterProfileProps {
  setIsInitialStep: React.Dispatch<React.SetStateAction<boolean>>;
}
const EnterProfile = ({ setIsInitialStep }: EnterProfileProps) => {
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [step, setStep] = useState(STEP.PERSONAL_INFO);

  const Contents = () => {
    switch (step) {
      case STEP.PERSONAL_INFO:
        return <PersonalInfo setStep={setStep} />;
      case STEP.PHONE_NUMBER_VERIFICATION:
        return <VerifyPhoneNumber setStep={setStep} />;
      case STEP.MODEL.PREFER_REGION:
        return <SelectPrefeRegion />;
    }
  };
  const StepHeader = () => {
    switch (step) {
      case STEP.PERSONAL_INFO:
        return (
          <Header
            isBackBtnExist={true}
            isCloseBtnExist={false}
            title="프로필 작성"
            backFn={() => setIsInitialStep(true)}
          />
        );
      case STEP.DESIGNER.ADDRESS:
        return (
          <Header
            isBackBtnExist={true}
            isCloseBtnExist={true}
            title="주소 검색"
            backFn={() => setStep((prev) => prev - 1)}
          />
        );
      default:
        return (
          <>
            <Header
              isBackBtnExist={true}
              isCloseBtnExist={true}
              title="프로필 작성"
              backFn={() => setStep((prev) => prev - 1)}
              closeFn={() => navigate('/')}
            />
          </>
        );
    }
  };

  return (
    <>
      <StepHeader />
      <Contents />
    </>
  );
};
export default EnterProfile;
