import { useNavigate } from 'react-router-dom';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { styled } from 'styled-components';

import applyImg from '../../@common/assets/images/img_applylogo.png';
import Button from '../../@common/components/Button';
import Header from '../../@common/components/Header';
import { INFO_MESSAGE } from '../constants/message';
import usePostApplication from '../hooks/usePostApplication';

import CaptureSection from './CaptureSection';

import {
  applicationCaptureImgUrlState,
  applyStepState,
  deatiledStyleState,
  hairStyleState,
  historyState,
  profileState,
} from '@/recoil/atoms/applicationState';

const ApplicationResult = () => {
  const [step, setStep] = useRecoilState(applyStepState);
  const navigate = useNavigate();
  const postApplication = usePostApplication();
  //state 초기화
  const stepReset = useResetRecoilState(applyStepState);
  const styleReset = useResetRecoilState(hairStyleState);
  const detailedStyleReset = useResetRecoilState(deatiledStyleState);
  const historyReset = useResetRecoilState(historyState);
  const profileReset = useResetRecoilState(profileState);
  const imgUrlReset = useResetRecoilState(applicationCaptureImgUrlState);

  const resetAtom = () => {
    stepReset();
    styleReset();
    detailedStyleReset();
    historyReset();
    profileReset();
    imgUrlReset();
  };

  const handleApplication = async () => {
    try {
      await postApplication();
      navigate(`/application/confirm`);
      resetAtom();
    } catch (err) {
      navigate('/error');
    }
  };
  return (
    <S.ApplicationResultLayout>
      <Header
        isBackBtnExist={true}
        isCloseBtnExist={true}
        title={INFO_MESSAGE.FINAL_TITLE}
        backFn={() => {
          setStep({ ...step, current: step.current - 1 });
        }}
        closeFn={() => {
          navigate(`/`);
        }}
      />
      <S.MainContent>
        <S.ContentSection>
          <CaptureSection />
          <img src={applyImg} alt="로고이미지" />
        </S.ContentSection>
      </S.MainContent>
      <Button id="ga-application-complete-btn" text={INFO_MESSAGE.FINAL} isFixed={true} onClickFn={handleApplication} />
    </S.ApplicationResultLayout>
  );
};

const S = {
  ApplicationResultLayout: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;

    width: 100%;
    height: 100%;
    margin: 5.7rem 0 10rem;
    padding: 0 1rem;

    ${({ theme }) => theme.fonts.Body01};
  `,

  MainContent: styled.main`
    overflow-y: scroll;

    width: 100%;
    height: max-content;
    min-height: 100%;

    &::-webkit-scrollbar {
      width: 0;
    }
  `,

  ContentSection: styled.section`
    position: relative;

    & > img {
      position: absolute;
      right: 0;
      bottom: -4.5rem;

      width: 13.4rem;
      object-fit: cover;
    }
  `,
};

export default ApplicationResult;
