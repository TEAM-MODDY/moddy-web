import { saveAs } from 'file-saver';
import { useState } from 'react';
import { styled } from 'styled-components';

import { IcBookmark } from '../assets/icons';
import ImgApplicationLogo from '../assets/images/img_applicationlogo.png';
import { CHECK_OFFER_DATA } from '../constants/CHECK_OFFER_DATA';

import { IcCloseBlack } from '@/views/@common/assets/icons';

interface ImgModalProps {
  isModal?: boolean;
  onClose: () => void;
}

const ImgModal = ({ isModal, onClose }: ImgModalProps) => {
  //모달 닫기
  const handleModalClose = () => {
    onClose();
  };

  //이미지 저장
  const [, setImageLoad] = useState(false);

  const fetchImage = async () => {
    try {
      const response = await fetch(CHECK_OFFER_DATA.data.applicationImgUrl);
      if (!response.ok) {
        throw new Error(`이미지 저장 실패`);
      }

      const blob = await response.blob();
      saveAs(blob, 'MyRecords.png');
      isModal && setImageLoad(true);
    } catch (error) {
      console.log('으앙');
    }
  };
  fetchImage();

  return (
    <>
      {isModal && (
        <S.ModalDimBox $isModal={isModal}>
          <S.ModalBox>
            <S.BookMarkBox>
              <IcBookmark />
            </S.BookMarkBox>
            <S.CloseBtnBox onClick={handleModalClose}>
              <IcCloseBlack />
            </S.CloseBtnBox>
            <S.MyRecordImg src={CHECK_OFFER_DATA.data.applicationImgUrl} />
            <S.LogoBox src={ImgApplicationLogo} />
            <S.SaveBtn
              onClick={() => {
                setImageLoad(true);
              }}>
              이미지 저장하기
            </S.SaveBtn>
          </S.ModalBox>
        </S.ModalDimBox>
      )}
    </>
  );
};

const S = {
  ModalDimBox: styled.div<{ $isModal?: boolean }>`
    position: fixed;
    top: 0;
    z-index: 2;

    width: 100%;
    max-width: 43rem;
    height: 100vh;
    padding: 0 3.8rem;

    background-color: ${({ theme }) => theme.colors.moddy_bk20};
  `,

  CloseBtnBox: styled.div`
    position: absolute;
    top: 1.6rem;
    right: 2rem;

    cursor: pointer;
  `,
  ModalBox: styled.div`
    position: relative;
    top: 8rem;

    width: 100%;
    padding: 0 2.4rem;
    border-radius: 12px;

    background-color: ${({ theme }) => theme.colors.moddy_wt};
  `,

  MyRecordImg: styled.img`
    width: 100%;
    margin-top: 6.8rem;
  `,

  SaveBtn: styled.button`
    width: 100%;
    margin: 4rem 0 3.2rem;
    padding: 1.25rem 0;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.moddy_blue};

    color: ${({ theme }) => theme.colors.moddy_wt};
    ${({ theme }) => theme.fonts.Headline01};
  `,

  BookMarkBox: styled.div`
    position: absolute;
    top: -1rem;
  `,

  LogoBox: styled.img`
    position: absolute;
    right: 0.9rem;
    bottom: 7.8rem;

    width: 11.2rem;
    height: 5.4rem;
  `,
};
export default ImgModal;
