import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import Button from '../views/@common/components/Button';
import Header from '../views/@common/components/Header';

import OfferDetailSection from './OfferDetailSection';

import ToastMessage from '@/views/@common/components/ToastMessage';
import { MODEL_INFO_DATA } from '@/views/ModelInfoPage/constants/MODEL_INFO_DATA';

const ModelInfoPage = () => {
  //서버측 데이터 구조
  const ApplicationInfo = MODEL_INFO_DATA.data.applicationInfo;

  //페이지 이동
  const navigate = useNavigate();
  const handleOnClickOffer = () => {
    navigate('/model-info/model-offer');
  };

  //클립보드 완료시 토스트창
  const [isToastOpen, setToastOpen] = useState<boolean>(false);

  //클립보드 복사
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setToastOpen(true);
    } catch (e) {
      alert('복사 실패');
    }
  };

  return (
    <>
      <Header isBackBtnExist={true} title="모델 지원 정보" />
      <S.ModelInfoLayout>
        <S.ImageBox src={ApplicationInfo.modelImgUrl} alt="모델 이미지"></S.ImageBox>
        <OfferDetailSection handleCopyClipBoard={handleCopyClipBoard} />
      </S.ModelInfoLayout>
      <Button text="제안하기" isFixed={false} onClickFn={handleOnClickOffer} />
      {isToastOpen && <ToastMessage text="아이디 복사가 완료되었습니다." setter={setToastOpen} />}
    </>
  );
};

const S = {
  ModelInfoLayout: styled.section`
    display: grid;

    width: 100%;
    margin: 5rem 0 4.9rem;
    padding: 0 1.6rem;

    place-items: center;
  `,
  ImageBox: styled.img`
    width: 100%;
    height: 34.4rem;
    margin: 1.6rem 0;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.colors.moddy_gray05};

    object-fit: cover;
  `,
};

export default ModelInfoPage;
