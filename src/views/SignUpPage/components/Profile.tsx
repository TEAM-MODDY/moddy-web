import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { HELPER_MESSAGE } from '../constants/message';
import { TOTAL_STEP } from '../constants/step';
import { EnterProfileProp } from '../utils/enterProfileProp';

import Field from './Field';
import LimitInput from './LimitInput';
import ProfileUpload from './ProfileUpload';

import { instagramLinkState, naverPlaceState } from '@/recoil/atoms/signUpState';
import Button from '@/views/@common/components/Button';
import Modal from '@/views/@common/components/Modal';
import ProgressBar from '@/views/@common/components/ProgressBar';

const Profile = ({ setStep }: EnterProfileProp) => {
  const navigate = useNavigate();

  const [isImageUploaded, setImageUploaded] = useState(false);
  const handleImageUpload = () => {
    setImageUploaded(true);
  };
  const [isOpenModal, setOpenModal] = useState(false);
  const [InstaIDValue, setInstaIdValue] = useState('');
  const [NaverLinkValue, setNaverLinkValue] = useState('');
  const isActive = InstaIDValue && NaverLinkValue !== '' && isImageUploaded;

  //넣어주기
  const handleInstaGramText = (value: string) => {
    setInstaIdValue(value);
    setInstaIdInfo({ data: value, verifyStatus: true });
  };
  const handleNaverPlaceText = (value: string) => {
    setNaverLinkValue(value);
    setNaverPlaceInfo({ data: value, verifyStatus: true });
  };

  //Recoil
  const [instaIdInfo, setInstaIdInfo] = useRecoilState(instagramLinkState);
  const [naverPlaceInfo, setNaverPlaceInfo] = useRecoilState(naverPlaceState);

  const saveDataToRecoil = () => {
    setInstaIdInfo((prevInstaIdInfo) => ({
      ...prevInstaIdInfo,
      data: InstaIDValue,
      verifyStatus: true,
    }));

    setNaverPlaceInfo((prevNaverPlaceInfo) => ({
      ...prevNaverPlaceInfo,
      data: NaverLinkValue,
      verifyStatus: true,
    }));
  };
  return (
    <>
      <ProgressBar whole={TOTAL_STEP.DESIGNER_VIEW} current={4} />
      <S.ProfileLayout>
        <Field name="프로필 사진" isEssential={true} />
        <S.HelperTextBox>{HELPER_MESSAGE.VIEW_IMAGE_TO_USER}</S.HelperTextBox>
        <S.ApplicationPagSection>
          <ProfileUpload onImageUpload={handleImageUpload} />
        </S.ApplicationPagSection>

        <Field name="포트폴리오" isEssential={true} />
        <S.HelperTextBox>{HELPER_MESSAGE.PREFER_INPUT_PORTFOLIO}</S.HelperTextBox>
        <section>
          <LimitInput
            placeholderText={HELPER_MESSAGE.INPUT_INSTAGRAM_LINK}
            initialValue={instaIdInfo.data}
            onChangeFn={handleInstaGramText}
            maxLength={255}
          />
          <LimitInput
            placeholderText={HELPER_MESSAGE.INPUT_NAVERPLACE_LINK}
            initialValue={naverPlaceInfo.data}
            onChangeFn={handleNaverPlaceText}
            maxLength={255}
          />
        </section>
      </S.ProfileLayout>
      <Button
        text="다음"
        isFixed={true}
        disabled={!isActive}
        onClickFn={() => {
          setStep((prev) => prev + 1);
          saveDataToRecoil;
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
export default Profile;

const S = {
  ProfileLayout: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-top: 8.6rem;
    padding: 0 1.6rem;

    & > section > div {
      margin-top: 0.4rem;
    }
  `,

  HelperTextBox: styled.p`
    margin-bottom: 0.8rem;

    color: ${({ theme }) => theme.colors.moddy_gray50};
    ${({ theme }) => theme.fonts.Body02};
  `,

  ApplicationPagSection: styled.section`
    margin-top: 3.2rem;
  `,
};
