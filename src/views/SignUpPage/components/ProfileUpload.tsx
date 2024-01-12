import { useRef, useState } from 'react';
import { styled } from 'styled-components';

import beforeUpload from '../../@common/assets/images/img_photoadd_profile.png';
import { readImg } from '../utils/readImg';

import { IcPencilcircle } from '@/views/ApplicationPage/assets/icons';

const ProfileUpload = ({ onImageUpload }: { onImageUpload: () => void }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [, setmodelImgUrl] = useState<File>();
  const [, isVerified] = useState(true);

  const uploadImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imgObj = event.target.files;

    readImg({ input: imgObj, setUrl: setmodelImgUrl, setVerified: isVerified });

    onImageUpload();
  };
  return (
    <div>
      <S.ProfileUploadBtnBox>
        <S.ProfileUploadBtn
          type="button"
          onClick={() => {
            inputRef.current?.click();
          }}>
          <S.Profile src={beforeUpload} alt="profileImg" id="profileImg" />
          <input
            id="uploadButton"
            name="uploadButton"
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={(e) => {
              uploadImg(e);
            }}
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
