import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { IcEssential } from '../../@common/assets/icons';
import beforeUpload from '../../@common/assets/images/img_photoadd_profile.png';
import Button from '../../@common/components/Button';
import Header from '../../@common/components/Header';
import Input from '../../@common/components/Input';
import ProgressBar from '../../@common/components/ProgressBar';
import { IcPencilcircle } from '../assets/icons';
import { INFO_MESSAGE } from '../constants/message';
import { readImg } from '../utils/readImg';

import { applyStepState, profileState } from '@/recoil/atoms/applicationState';
import { REGEX } from '@/views/@common/utils/regex';

const ProfileUpload = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [step, setStep] = useRecoilState(applyStepState);
  const [profileData, setProfileData] = useRecoilState(profileState);
  const [isAllVerified, setIsAllVerified] = useState(false);
  const navigate = useNavigate();

  const handleProfileImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    readImg(event)
      .then((dataUrl) => {
        setProfileData({
          ...profileData,
          modelImgUrl: dataUrl.previewSrc,
          modelImgData: dataUrl.imgUrl,
        });
        setIsAllVerified(true);
      })
      .catch(() => {
        navigate('/error');
      });
  };

  const handleInstagramId = (e: string) => {
    if (REGEX.INSTAGRAM_ID.test(e) || !e) {
      setProfileData({ ...profileData, instagramId: e });
      setIsAllVerified(true);
    } else setIsAllVerified(false);
  };

  return (
    <S.ProfileUploadLayout>
      <Header
        title="모델 지원하기"
        isBackBtnExist={true}
        isCloseBtnExist={true}
        backFn={() => {
          setStep({ ...step, current: step.current - 1 });
        }}
        closeFn={() => {
          navigate(`/`);
        }}
      />
      <ProgressBar whole={step.total} current={step.current} />
      <S.ProfileInfoSection>
        <S.ProfilePhotoSection>
          <S.Title>
            <h2>
              {INFO_MESSAGE.PROFILE_TITLE} <IcEssential />
            </h2>
            {INFO_MESSAGE.PROFILE_SUBTITLE.split('<br />').map((line: string) => (
              <span key={line}>{line}</span>
            ))}
          </S.Title>
          <S.ProfileUploadBtnBox>
            <S.ProfileUploadBtn
              type="button"
              onClick={() => {
                inputRef.current?.click();
              }}>
              <S.Profile
                src={profileData.modelImgUrl ? profileData.modelImgUrl : beforeUpload}
                alt="profileImg"
                id="profileImg"
              />
              <input
                id="uploadButton"
                name="uploadButton"
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={handleProfileImg}
              />
              <IcPencilcircle />
            </S.ProfileUploadBtn>
          </S.ProfileUploadBtnBox>
        </S.ProfilePhotoSection>
        <S.ProfileInstaSection>
          <S.Title>
            <h2>{INFO_MESSAGE.INSTA_TITLE}</h2>
            <span>{INFO_MESSAGE.INSTA_SUBTITLE} </span>
          </S.Title>
          <Input
            placeholderText={INFO_MESSAGE.INSTA_INPUT}
            initialValue={profileData.instagramId}
            regex={REGEX.INSTAGRAM_ID}
            onChangeFn={handleInstagramId}
          />
        </S.ProfileInstaSection>
      </S.ProfileInfoSection>
      <Button
        text={INFO_MESSAGE.LAST}
        onClickFn={() => {
          setStep({ ...step, current: step.current + 1 });
        }}
        disabled={!isAllVerified}
      />
    </S.ProfileUploadLayout>
  );
};

const S = {
  ProfileUploadLayout: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100%;
    margin-top: 8.5rem;
  `,

  ProfileInfoSection: styled.section`
    display: flex;
    flex-direction: column;
    gap: 4.8rem;

    width: 100%;
    padding: 0 1.6rem;
  `,

  ProfilePhotoSection: styled.section`
    display: flex;
    flex-direction: column;
    gap: 3.7rem;
  `,

  ProfileUploadBtnBox: styled.div`
    position: relative;

    width: 13.2rem;
    height: 13.2rem;
    margin: 0 auto;

    cursor: pointer;
  `,

  ProfileUploadBtn: styled.button`
    width: 100%;
    height: 100%;
    border: 1.5px dashed ${({ theme }) => theme.colors.moddy_blue2};
    border-radius: 10px;

    & > svg {
      position: absolute;
      right: 0.8rem;
      bottom: 0.8rem;
      z-index: 1;
    }

    & > input {
      display: none;
    }
  `,

  Profile: styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  `,

  ProfileInstaSection: styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  `,

  Title: styled.div`
    display: flex;
    flex-direction: column;

    & > h2 {
      display: flex;
      justify-content: flex-start;

      margin-bottom: 0.8rem;

      color: ${({ theme }) => theme.colors.moddy_bk};

      ${({ theme }) => theme.fonts.Headline01};
    }

    & > span {
      color: ${({ theme }) => theme.colors.moddy_gray50};

      ${({ theme }) => theme.fonts.Body02};
    }
  `,
};

export default ProfileUpload;
