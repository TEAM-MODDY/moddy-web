/* eslint-disable import/no-named-as-default */
import styled from 'styled-components';

import { IcCopy } from '../views/ModelInfoPage/assets/icons';
import OfferDetail from '../views/ModelInfoPage/components/OfferDetail';
import OfferDetailBox from '../views/ModelInfoPage/components/OfferDetailBox';

// interface HairServiceRecord {
//   hairServiceTerm: string;
//   hairService: string;
// }

// interface ApplicationInfo {
//   applicationId: number;
//   modelImgUrl: string;
//   hairLength: string;
//   preferHairstyles: string[];
//   hairServiceRecords: HairServiceRecord[];
//   hairDetail: string;
//   isSend: boolean;
// }

// interface ModelInfo {
//   modelId: number;
//   name: string;
//   age: string;
//   gender: string;
//   preferRegions: string[];
//   instagramId: string;
// }

// interface ModelInfoPageProps {
//   data: {
//     applicationInfo: ApplicationInfo;
//     modelInfo: ModelInfo;
//   };
// }

const DUMMY_DATA = {
  data: {
    applicationInfo: {
      applicationId: 1,
      modelImgUrl:
        'https://mblogthumb-phinf.pstatic.net/20121002_183/white_cloudy_1349105780071ubbWC_JPEG/naver_com_20120628_092207.jpg?type=w420',
      hairLength: '단발',
      preferHairstyles: ['일반 커트', '일반 펌'],
      hairServiceRecords: [
        {
          hairServiceTerm: '1~3개월',
          hairService: '블랙 염색',
        },
        {
          hairServiceTerm: '4~5개월',
          hairService: '탈색',
        },
      ],
      hairDetail:
        '이러쿵저러쿵 이쁘게 최양락은 아니면서 웬디는 될 수 없지만 최양 락은좀 아니지 않나 하는 생각에 일단 그래그래그래그래 그래 뭐',
      isSend: false,
    },
    modelInfo: {
      modelId: 1,
      name: '모디',
      age: '25',
      gender: '여성',
      preferRegions: ['관악구', '강남구'],
      instagramId: '2k_lin',
    },
  },
};

const ModelInfoPage = () => {
  const data = DUMMY_DATA.data;

  return (
    <S.ModelInfoLayout>
      <S.ImageBox src={data.applicationInfo.modelImgUrl} alt="모델 이미지"></S.ImageBox>
      <S.OfferDetailsBox>
        <h1>지원내역</h1>
        <S.ContentDetailBox>
          <OfferDetail content={data.applicationInfo.hairLength}>현재기장</OfferDetail>
          <OfferDetail content={data.applicationInfo.preferHairstyles.join(', ')}>희망스타일</OfferDetail>
          <h2>시술이력</h2>
          <S.DetailBox>
            {data.applicationInfo.hairServiceRecords.map((record, idx) => (
              <OfferDetailBox key={idx} hairServiceTerm={record.hairServiceTerm} hairService={record.hairService} />
            ))}
          </S.DetailBox>
          <h2>상세 희망 스타일</h2>
          <S.DetailBox>
            <p>{data.applicationInfo.hairDetail}</p>
          </S.DetailBox>
        </S.ContentDetailBox>
      </S.OfferDetailsBox>
      <S.OfferDetailsBox>
        <h1>모델 정보</h1>
        <OfferDetail content={data.modelInfo.name}>이름</OfferDetail>
        <OfferDetail content={data.modelInfo.age}>나이</OfferDetail>
        <OfferDetail content={data.modelInfo.gender}>성별</OfferDetail>
        <OfferDetail content={data.modelInfo.preferRegions.join(', ')}>희망 지역</OfferDetail>
        <OfferDetail content={data.modelInfo.instagramId}>인스타그램</OfferDetail>
        <S.CopyButton type="button">
          <IcCopy />
          <p>아이디 복사</p>
        </S.CopyButton>
      </S.OfferDetailsBox>
    </S.ModelInfoLayout>
  );
};

const S = {
  ModelInfoLayout: styled.section`
    display: grid;

    width: 100%;

    place-items: center;

    margin-bottom: 5.7rem;
  `,
  ImageBox: styled.img`
    width: 34.4rem;
    height: 34.4rem;
    margin: 1.6rem 0;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.colors.moddy_gray05};

    object-fit: cover;
  `,
  OfferDetailsBox: styled.div`
    width: 34.4rem;

    & > h1 {
      width: 34.4rem;
      height: 3.1rem;
      margin: 0.8rem 0;
      border-bottom: 1px solid;

      color: ${({ theme }) => theme.colors.moddy_blue};

      ${({ theme }) => theme.fonts.Headline01};
    }
  `,

  ContentDetailBox: styled.div`
    width: 34.4rem;
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
    width: 34.4rem;
    margin-bottom: 2rem;
    padding: 1.3rem 1.65rem;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.colors.moddy_gray05};

    & > p {
      color: ${({ theme }) => theme.colors.moddy_bk};

      ${({ theme }) => theme.fonts.Body02};
    }
  `,

  CopyButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    float: right;

    cursor: pointer;

    & > p {
      margin-left: 0.4rem;

      color: ${({ theme }) => theme.colors.moddy_blue};
      ${({ theme }) => theme.fonts.Caption03};
    }
  `,
};

export default ModelInfoPage;
