import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import Button from '../views/@common/components/Button';
import Header from '../views/@common/components/Header';
import CopyButton from '../views/ModelInfoPage/components/CopyButton';
import OfferDetail from '../views/ModelInfoPage/components/OfferDetail';
import OfferDetailBox from '../views/ModelInfoPage/components/OfferDetailBox';
import { MODEL_DATA } from '../views/ModelInfoPage/constants/MODEL_DATA';
import { MODEL_INFO_DATA } from '@/views/ModelInfoPage/constants/MODEL_INFO_DATA';

const ModelInfoPage = () => {
  const ApplicationInfo = MODEL_DATA.data.applicationInfo;
  const ModelInfo = MODEL_DATA.data.modelInfo;


const ModelInfoPage = () => {
  const ApplicationInfo = MODEL_INFO_DATA.data.applicationInfo;
  const ModelInfo = MODEL_INFO_DATA.data.modelInfo;


  const navigate = useNavigate();
  const handleOnClickOffer = () => {
    navigate('/model-info/model-offer');
  };

  return (
    <>

      <Header isBackBtnExist={true} title="모델 지원 정보" />
      <S.ModelInfoLayout>
        <S.ImageBox src={ApplicationInfo.modelImgUrl} alt="모델 이미지"></S.ImageBox>
        <S.OfferDetailsBox>
          <h1>지원내역</h1>
          <S.ContentDetailBox>
            <OfferDetail content={ApplicationInfo.hairLength}>현재 기장</OfferDetail>
            <OfferDetail content={ApplicationInfo.preferHairstyles.join(', ')}>희망스타일</OfferDetail>
            <h2>시술이력</h2>
            <S.DetailBox>
              {ApplicationInfo.hairServiceRecords.map((record, idx) => (
                <OfferDetailBox key={idx} hairServiceTerm={record.hairServiceTerm} hairService={record.hairService} />
              ))}
            </S.DetailBox>
            <h2>상세 희망 스타일</h2>
            <S.DetailBox>
              <p>{ApplicationInfo.hairDetail}</p>
            </S.DetailBox>
          </S.ContentDetailBox>
        </S.OfferDetailsBox>
        <S.OfferDetailsBox>
          <h1>모델 정보</h1>
          <OfferDetail content={ModelInfo.name}>이름</OfferDetail>
          <OfferDetail content={ModelInfo.age}>나이</OfferDetail>
          <OfferDetail content={ModelInfo.gender}>성별</OfferDetail>
          <OfferDetail content={ModelInfo.preferRegions.join(', ')}>희망 지역</OfferDetail>
          <OfferDetail content={ModelInfo.instagramId}>인스타그램</OfferDetail>
          <CopyButton />
        </S.OfferDetailsBox>
      </S.ModelInfoLayout>
      <Button text="제안하기" isFixed={false} onClickFn={handleOnClickOffer} />
    </>
  );
};

const S = {
  ModelInfoLayout: styled.section`
    display: grid;

    width: 100%;
    margin: 5rem 0 5.7rem;
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
  DetailBox: styled.div`
    width: 100%;
    margin-bottom: 2rem;
    padding: 1.3rem 1.65rem;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.colors.moddy_gray05};

    & > p {
      color: ${({ theme }) => theme.colors.moddy_bk};

      ${({ theme }) => theme.fonts.Body02};

      word-break: keep-all;
    }
  `,
};

export default ModelInfoPage;
