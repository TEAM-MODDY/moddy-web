import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import Header from '../../@common/components/Header';
import { STEP } from '../constants/step';

import DesignerInfo from './DesignerInfo';
import OpenChatLink from './OpenChatLink';
import PersonalInfo from './PersonalInfo';
import PhoneNumber from './PhoneNumber';
import PrefeRegion from './PreferRegion';
import Profile from './Profile';
import ShopInfo from './ShopInfo';

import { removeToken } from '@/views/@common/utils/token';

interface EnterProfileProps {
  setIsInitialStep: React.Dispatch<React.SetStateAction<boolean>>;
}

const EnterProfile = ({ setIsInitialStep }: EnterProfileProps) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(STEP.PERSONAL_INFO);

  const handleChurn = () => {
    removeToken();
    navigate('/');
  };
  const Contents = () => {
    switch (step) {
      case STEP.PERSONAL_INFO:
        return <PersonalInfo setStep={setStep} />;
      case STEP.PHONE_NUMBER_VERIFICATION:
        return <PhoneNumber setStep={setStep} />;
      case STEP.MODEL.PREFER_REGION:
        return <PrefeRegion />;
      case STEP.DESIGNER.SHOP_INFO:
        return <ShopInfo setStep={setStep} />;
      case STEP.DESIGNER.PROFILE:
        return <Profile setStep={setStep} />;
      case STEP.DESIGNER.DESIGNER_INFO:
        return <DesignerInfo setStep={setStep} />;
      case STEP.DESIGNER.OPEN_CHAT_LINK:
        return <OpenChatLink />;
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
      case STEP.DESIGNER.SHOP_INFO:
        return (
          <Header
            isBackBtnExist={true}
            isCloseBtnExist={true}
            title="프로필 작성"
            backFn={() => setStep(STEP.PHONE_NUMBER_VERIFICATION)}
            closeFn={() => handleChurn()}
          />
        );
      default:
        return (
          <Header
            isBackBtnExist={true}
            isCloseBtnExist={true}
            title="프로필 작성"
            backFn={() => setStep((prev) => prev - 1)}
            closeFn={() => handleChurn()}
          />
        );
    }
  };

  return (
    <S.EnterProfileLayout>
      <StepHeader />
      <Contents />
    </S.EnterProfileLayout>
  );
};

export default EnterProfile;

const EnterProfileLayout = styled.div`
  height: calc(100dvh - 8.6rem);

  background-color: ${({ theme }) => theme.colors.moddy_wt};
`;

const S = {
  EnterProfileLayout,
};
