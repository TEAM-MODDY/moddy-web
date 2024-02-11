import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { HELPER_MESSAGE } from '../constants/message';
import { TOTAL_STEP } from '../constants/step';
import { EnterProfileProp } from '../utils/enterProfileProp';

import Field from './Field';
import LimitInput from './LimitInput';
import ProfileUpload from './ProfileUpload';

import { instagramLinkState, naverPlaceState, profileImgState } from '@/recoil/atoms/signUpState';
import Button from '@/views/@common/components/Button';
import ProgressBar from '@/views/@common/components/ProgressBar';

const Profile = ({ setStep }: EnterProfileProp) => {
  //Recoil
  const [instaIdInfo, setInstaIdInfo] = useRecoilState(instagramLinkState);
  const [naverPlaceInfo, setNaverPlaceInfo] = useRecoilState(naverPlaceState);
  const [profileImgInfo, setProfileImgInfo] = useRecoilState(profileImgState);

  const [verificationStatus, setVerificationStatus] = useState({
    isInstaIdVerified: instaIdInfo.verifyStatus,
    isNaverPlaceVerified: naverPlaceInfo.verifyStatus,
    isImageUploaded: !!profileImgInfo.file,
    isAllVerified: instaIdInfo.verifyStatus && naverPlaceInfo.verifyStatus && !!profileImgInfo.file,
  });

  const handleInstaGramText = (value: string) => {
    setVerificationStatus((prevState) => ({ ...prevState, isInstaIdVerified: true }));
    setInstaIdInfo({ data: value, verifyStatus: true });
  };

  const handleNaverPlaceText = (value: string) => {
    setVerificationStatus((prevState) => ({ ...prevState, isNaverPlaceVerified: true }));
    setNaverPlaceInfo({ data: value, verifyStatus: true });
  };

  const handleImageUpload = (imgUrl: string, imgObj: File) => {
    setProfileImgInfo((prevProfileImgInfo) => ({
      ...prevProfileImgInfo,
      data: imgUrl,
      file: imgObj,
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
        id="ga-profile-btn"
        text="다음"
        isFixed={true}
        disabled={!verificationStatus.isAllVerified}
        onClickFn={() => {
          setStep((prev) => prev + 1);
        }}
      />
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
