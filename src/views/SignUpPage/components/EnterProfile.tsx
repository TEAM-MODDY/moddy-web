import { useState } from 'react';

import Header from '../../@common/components/Header';
import { STEP } from '../constants/step';

import PersonalInfo from './PersonalInfo';

const EnterProfile = () => {
  const [step, setStep] = useState(STEP.PERSONAL_INFO);

  const Contents = () => {
    switch (step) {
      case STEP.PERSONAL_INFO:
        return <PersonalInfo setStep={setStep} />;
    }
  };
  const StepHeader = () => {
    switch (step) {
      case STEP.PERSONAL_INFO:
        return <Header isBackBtnExist={true} isCloseBtnExist={false} title="" />;
      case STEP.ADDRESS:
        return <Header isBackBtnExist={true} isCloseBtnExist={true} title="주소 검색" />;
      default:
        return <Header isBackBtnExist={true} isCloseBtnExist={true} title="프로필 작성" />;
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
