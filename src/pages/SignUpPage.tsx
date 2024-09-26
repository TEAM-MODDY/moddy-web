import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import Header from '@/views/@common/components/Header';
import useTrackPageView from '@/views/@common/hooks/useTrackPageView';
import { removeToken } from '@/views/@common/utils/token';
import {
  DesignerInfo,
  OpenChatLink,
  PersonalInfo,
  PhoneNumber,
  PrefeRegion,
  Profile,
  ShopInfo,
  UserType,
} from '@/views/SignUpPage/components';
import Code from '@/views/SignUpPage/components/디자이너코드/Code';
import { STEP } from '@/views/SignUpPage/constants/step';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(STEP.USER_TYPE);
  useTrackPageView(step);

  const handleChurn = () => {
    removeToken();
    navigate('/');
  };
  const Contents = () => {
    switch (step) {
      case STEP.USER_TYPE:
        return <UserType setStep={setStep} />;
      case STEP.DESIGNER.CODE:
        return <Code setStep={setStep} />;
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

const EnterProfileLayout = styled.div`
  height: calc(100dvh - 8.6rem);

  background-color: ${({ theme }) => theme.colors.moddy_wt};
`;

const S = {
  EnterProfileLayout,
};

export default SignUpPage;
