import { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import beforeUpload from '../../../@common/assets/images/img_photoadd_profile.png';
import { readImg } from '../../utils/readImg';

import { profileImgState } from '@/recoil/atoms/signUpState';
import { IcPencilcircle } from '@/views/ApplicationPage/assets/icons';

interface ProfileUpLoadProps {
  onImageUpload: (imgUrl: string) => void;
}

const ProfileUpload = ({ onImageUpload }: ProfileUpLoadProps) => {
  const [imageUrl, setImageUrl] = useRecoilState(profileImgState);
  const [, setmodelImgUrl] = useState<File>();
  const [, isVerified] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const uploadImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imgObj = event.target.files;

    readImg({ input: imgObj, setUrl: setmodelImgUrl, setVerified: isVerified });

    if (imgObj && imgObj[0]) {
      const imgUrl = URL.createObjectURL(imgObj[0]);
      setImageUrl({ data: imgUrl, file: imgObj[0] });
      onImageUpload(imgUrl);
    }
  };

  return (
    <div>
      <S.ProfileUploadBtnBox>
        <S.ProfileUploadBtn
          type="button"
          onClick={() => {
            inputRef.current?.click();
          }}>
          <S.Profile src={imageUrl?.data || beforeUpload} alt="profileImg" id="profileImg" />
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
