import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { HELPER_MESSAGE } from '../../constants/message';
import { TOTAL_STEP } from '../../constants/step';
import { EnterProfileProp } from '../../utils/enterProfileProp';
import Field from '../@common/Field';

import ProfileUpload from './ProfileUpload';

import { instagramLinkState, naverPlaceState, profileImgState } from '@/recoil/atoms/signUpState';
import Button from '@/views/@common/components/Button';
import Input from '@/views/@common/components/Input';
import ProgressBar from '@/views/@common/components/ProgressBar';
import ToastMessage from '@/views/@common/components/ToastMessage';

const Profile = ({ setStep }: EnterProfileProp) => {
  //Recoil
  const [isToastOpen, setToastOpen] = useState(false);
  const [instaIdInfo, setInstaIdInfo] = useRecoilState(instagramLinkState);
  const [naverPlaceInfo, setNaverPlaceInfo] = useRecoilState(naverPlaceState);
  const [profileImgInfo, setProfileImgInfo] = useRecoilState(profileImgState);

  const handleInstaGramText = (value: string) => {
    setInstaIdInfo(value);
  };

  const handleNaverPlaceText = (value: string) => {
    setNaverPlaceInfo(value);
  };

  const handleImageUpload = (imgUrl: string, imgObj: File) => {
    setProfileImgInfo((prevProfileImgInfo) => ({
      ...prevProfileImgInfo,
      data: imgUrl,
      file: imgObj,
    }));
  };

  const isActive = instaIdInfo && naverPlaceInfo && profileImgInfo.data;

  return (
    <>
      <ProgressBar whole={TOTAL_STEP.DESIGNER_VIEW} current={4} />
      <S.ProfileLayout>
        <Field name="프로필 사진" isEssential={true} />
        <S.HelperTextBox>{HELPER_MESSAGE.VIEW_IMAGE_TO_USER}</S.HelperTextBox>
        <S.ApplicationPagSection>
          <ProfileUpload onImageUpload={handleImageUpload} setToastOpen={setToastOpen} />
        </S.ApplicationPagSection>

        <Field name="포트폴리오" isEssential={true} />
        <S.HelperTextBox>{HELPER_MESSAGE.PREFER_INPUT_PORTFOLIO}</S.HelperTextBox>
        <section>
          <Input
            placeholderText={HELPER_MESSAGE.INPUT_INSTAGRAM_LINK}
            initialValue={instaIdInfo}
            onChangeFn={handleInstaGramText}
            maxLength={255}
          />
          <Input
            placeholderText={HELPER_MESSAGE.INPUT_NAVERPLACE_LINK}
            initialValue={naverPlaceInfo}
            onChangeFn={handleNaverPlaceText}
            maxLength={255}
          />
        </section>
      </S.ProfileLayout>
      <Button
        id="ga-profile-btn"
        text="다음"
        isFixed={true}
        disabled={!isActive}
        onClickFn={() => {
          setStep((prev) => prev + 1);
        }}
      />
      {isToastOpen && (
        <ToastMessage text="사진 용량이 너무 커요!" subtext="5MB 이하의 사진을 올려주세요" setter={setToastOpen} />
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
