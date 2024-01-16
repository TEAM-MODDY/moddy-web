import { styled } from 'styled-components';

import CopyButton from '@/views/ModelInfoPage/components/CopyButton';
import DetailBox from '@/views/ModelInfoPage/components/DetailBox';
import OfferDetail from '@/views/ModelInfoPage/components/OfferDetail';
import { ModelInfoPageProps } from '@/views/ModelInfoPage/hooks/types';

interface OfferDetailProps {
  handleCopyClipBoard: (text: string) => Promise<void>;
  data: ModelInfoPageProps;
}

const OfferDetailSection = ({ handleCopyClipBoard, data }: OfferDetailProps) => {
  const { applicationInfo, modelInfo } = data;

  return (
    <>
      <S.OfferDetailsBox>
        <h1>지원내역</h1>
        <S.ContentDetailBox>
          <OfferDetail content={applicationInfo.hairLength}>현재 기장</OfferDetail>
          <OfferDetail content={applicationInfo.preferHairstyles.join(', ')}>희망스타일</OfferDetail>
          <h2>시술이력</h2>
          <DetailBox applicationInfo={applicationInfo} />
        </S.ContentDetailBox>
      </S.OfferDetailsBox>
      <S.OfferDetailsBox>
        <h1>모델 정보</h1>
        <OfferDetail content={modelInfo.name}>이름</OfferDetail>
        <OfferDetail content={modelInfo.age}>나이</OfferDetail>
        <OfferDetail content={modelInfo.gender}>성별</OfferDetail>
        <OfferDetail content={modelInfo.preferRegions.join(', ')}>희망 지역</OfferDetail>
        <OfferDetail content={modelInfo.instagramId}>인스타그램</OfferDetail>
        <CopyButton onClickFn={() => handleCopyClipBoard(modelInfo.instagramId)} />
      </S.OfferDetailsBox>
    </>
  );
};

const S = {
  OfferDetailsBox: styled.div`
    width: 100%;

    & > h1 {
      width: 100%;
      height: 3.1rem;
      margin: 0.8rem 0;
      border-bottom: 1px solid;
      border-color: ${({ theme }) => theme.colors.moddy_blue};

      color: ${({ theme }) => theme.colors.moddy_blue};

      ${({ theme }) => theme.fonts.Headline01};
    }
  `,

  ContentDetailBox: styled.div`
    width: 100%;
    margin: 0.6rem 0;

    & > h2 {
      margin-bottom: 1rem;

      color: ${({ theme }) => theme.colors.moddy_gray50};

      ${({ theme }) => theme.fonts.Body01};
    }

    & > p {
      color: ${({ theme }) => theme.colors.moddy_bk};

      ${({ theme }) => theme.fonts.Body02};
    }
  `,
};

export default OfferDetailSection;
