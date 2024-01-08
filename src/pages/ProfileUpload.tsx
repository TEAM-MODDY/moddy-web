import { styled } from 'styled-components';

import { IcEssential } from '../views/@common/assets/icons';
import Button from '../views/@common/components/Button';
import Header from '../views/@common/components/Header';
import Input from '../views/@common/components/Input';
import ProgressBar from '../views/@common/components/ProgressBar';

const ProfileUpload = () => {
  const moveNext = () => {};

  return (
    <S.ProfileUploadLayout>
      <Header title="모델 지원하기" isBackBtnExist={true} isCloseBtnExist={true} />
      <ProgressBar whole={4} current={4} />
      <S.ProfileInfoSection>
        <S.ProfilePhotoSection>
          <S.Title>
            <h2>
              지원 사진 <IcEssential />
            </h2>
            <span>
              딱 맞는 스타일 제안을 위해,
              <br />
              반드시 본인사진을 등록해주세요
            </span>
          </S.Title>
          <button type="button">
            <S.ProfileUploadBtn src="src/views/@common/assets/images/btn_photoadd.png" alt="uploadImage" />
          </button>
        </S.ProfilePhotoSection>
        <S.ProfileInstaSection>
          <S.Title>
            <h2>인스타그램 아이디</h2>
            <span>모델님의 스타일 파악을 위해 입력을 권장드려요</span>
          </S.Title>
          <Input placeholderText="아이디를 입력해주세요 &#40;&#39;@&#39; 제외&#41;" />
        </S.ProfileInstaSection>
      </S.ProfileInfoSection>
      <Button text="입력 완료" onClickFn={moveNext} />
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
    padding: 0 1.6rem;
  `,

  ProfileInfoSection: styled.section`
    display: flex;
    flex-direction: column;
    gap: 4.8rem;

    width: 100%;
  `,

  ProfilePhotoSection: styled.section`
    display: flex;
    flex-direction: column;
    gap: 3.7rem;

    & > button {
      width: 13.2rem;
      height: 13.2rem;
      margin: 0 auto;
    }
  `,

  ProfileUploadBtn: styled.img`
    width: 100%;
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
    gap: 0.8rem;

    & > h2 {
      display: flex;
      justify-content: flex-start;

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
