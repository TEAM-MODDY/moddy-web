import { useState } from 'react';
import styled from 'styled-components';

import ToastMessage from './ToastMessage';

import OfferDetailSection from '@/views/ModelInfoPage/components/OfferDetailSection';
import { ModelInfoPageProps } from '@/views/ModelInfoPage/hooks/types';

const ModelInfo = ({ data }: { data: ModelInfoPageProps }) => {
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
    <S.ModelInfoLayout>
      <S.ImageBox src={data.applicationInfo.modelImgUrl} alt="모델 이미지"></S.ImageBox>
      <OfferDetailSection handleCopyClipBoard={handleCopyClipBoard} data={data} />
      {isToastOpen && <ToastMessage text="아이디 복사가 완료되었습니다." setter={setToastOpen} />}
    </S.ModelInfoLayout>
  );
};

export default ModelInfo;

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
