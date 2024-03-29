import { styled } from 'styled-components';

import { IcBookmark } from '../assets/icons';
import ImgApplicationLogo from '../assets/images/img_applicationlogo.png';
import useGetDownloadUrlOffer from '../hooks/useGetDownloadUrlOffer';

import { IcCloseBlack } from '@/views/@common/assets/icons';

interface ImgModalProps {
  isModal?: boolean;
  onClose: () => void;
  applicationId: number;
}

const ImgModal = ({ isModal, onClose, applicationId }: ImgModalProps) => {
  const data = useGetDownloadUrlOffer(applicationId);

  const handleImgDownload = () => {
    if (!data) return;
    const a = document.createElement('a');
    a.href = data.applicationDownloadUrl;
    a.style.display = 'none';
    a.download = 'my_moddy.png';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };
  //모달 닫기
  const handleModalClose = () => {
    onClose();
  };
  return (
    <>
      {data && isModal && (
        <S.ModalDimBox>
          <S.ModalBox>
            <S.BookMarkBox>
              <IcBookmark />
            </S.BookMarkBox>
            <S.CloseBtnBox onClick={handleModalClose}>
              <IcCloseBlack />
            </S.CloseBtnBox>
            <S.MyRecordImg src={data.applicationDownloadUrl} />
            <S.LogoBox src={ImgApplicationLogo} />
            <S.SaveBtn
              onClick={() => {
                handleImgDownload();
                handleModalClose();
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
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 5;

    width: 100%;
    max-width: 43rem;
    height: 100dvh;
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

    width: 100%;
    padding: 0 2.4rem;
    border-radius: 12px;

    background-color: ${({ theme }) => theme.colors.moddy_wt};
  `,

  MyRecordImg: styled.img`
    width: 100%;
    margin-top: 6.8rem;
  `,

  SaveBtn: styled.a`
    display: block;

    width: 100%;
    margin: 4rem 0 3.2rem;
    padding: 1.25rem 0;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.moddy_blue};

    color: ${({ theme }) => theme.colors.moddy_wt};
    text-align: center;
    ${({ theme }) => theme.fonts.Headline02};
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
