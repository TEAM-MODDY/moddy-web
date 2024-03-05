import { useRef, useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import beforeUpload from '../../../@common/assets/images/img_photoadd_profile.png';
import { readImg } from '../../utils/readImg';

import { profileImgState } from '@/recoil/atoms/signUpState';
import { IcPencilcircle } from '@/views/ApplicationPage/assets/icons';

interface ProfileUpLoadProps {
  onImageUpload: (imgUrl: string, imgObj: File) => void;
  setToastOpen: (isOpen: boolean) => void;
}

const ProfileUpload = ({ onImageUpload, setToastOpen }: ProfileUpLoadProps) => {
  const [previewimgUrl, setPreviewImgUrl] = useState<string>();
  const inputRef = useRef<HTMLInputElement>(null);
  const [profileImgInfo] = useRecoilState(profileImgState);

  const handleInput = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const imgObj = event.target.files;
    if (imgObj && imgObj[0]) {
      try {
        const imgUrl = await readImg(event, setToastOpen);
        setPreviewImgUrl(imgUrl.previewSrc);
        onImageUpload(imgUrl.previewSrc, imgUrl.imgUrl);
      } catch (error) {
        setToastOpen(true);
        throw error;
      }
    }
  };

  useEffect(() => {
    if (profileImgInfo.file) {
      setPreviewImgUrl(profileImgInfo.data);
    }
  }, [profileImgInfo]);

  return (
    <div>
      <S.ProfileUploadBtnBox>
        <S.ProfileUploadBtn
          type="button"
          onClick={() => {
            inputRef.current?.click();
          }}>
          <S.Profile src={previewimgUrl || beforeUpload} alt="profileImg" id="profileImg" />
          <input
            id="uploadButton"
            name="uploadButton"
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleInput}
          />
          <IcPencilcircle />
        </S.ProfileUploadBtn>
      </S.ProfileUploadBtnBox>
    </div>
  );
};

const S = {
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
};
export default ProfileUpload;
