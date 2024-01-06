/* eslint-disable import/no-named-as-default */
import styled from 'styled-components';

import ImgModelApplication from '../views/@common/assets/images/img_modelapplication.png';
import { IcCopy } from '../views/ModelInfoPage/assets/icons';

const ModelInfoPage = () => {
  return (
    <S.ModelInfoLayout>
      <S.ImageBox src={ImgModelApplication} alt="모델 이미지"></S.ImageBox>
      <S.OfferDetailsBox>
        <h1>지원내역</h1>
        <S.ContentBox>
          <h2>현재기장</h2>
          <p>단발</p>
        </S.ContentBox>
        <S.ContentBox>
          <h2>희망 스타일</h2>
          <p>일반 커트, 일반 펌</p>
        </S.ContentBox>
        <S.ContentDetailBox>
          <h2>시술이력</h2>

          <S.DetailBox>
            <div>
              <h3>12개월 초과</h3>
              <h4>블랙염색</h4>
            </div>
            <div>
              <h3>36개월</h3>
              <h4>펌</h4>
            </div>
            <div>
              <h3>1개월 미만</h3>
              <h4>컬러 염색</h4>
            </div>
          </S.DetailBox>
          <h2>상세 희망 스타일</h2>
          <S.DetailBox>
            <p>
              이러쿵저러쿵 이쁘게 최양락은 아니면서 웬디는 될 수 없지만 최양 락은좀 아니지 않나 하는 생각에 일단 단발을
              하고는 싶지만 그래도 긴머리는 포기 못하는 그런 흠냐흠냐..어렵다 어려워 그래도 아무래 도 헤어 디자이너면
              이런건 알아서 잘 딱 깔끔하게 해주실 수 있을거 라고 믿을게요? 잘 부탁드리겠습니다. 머리 망하면 리뷰 테러각
              꼭 갈 거니까 받아들이세요^^
            </p>
          </S.DetailBox>
        </S.ContentDetailBox>
      </S.OfferDetailsBox>
      <S.OfferDetailsBox>
        <h1>모델 정보</h1>
        <S.ContentBox>
          <h2>이름</h2>
          <p>백모디</p>
        </S.ContentBox>
        <S.ContentBox>
          <h2>나이</h2>
          <p>25세</p>
        </S.ContentBox>
        <S.ContentBox>
          <h2>성별</h2>
          <p>여성</p>
        </S.ContentBox>
        <S.ContentBox>
          <h2>희망 지역</h2>
          <p>서울시 양천구</p>
        </S.ContentBox>
        <S.ContentBox>
          <h2>인스타그램</h2>
          <p>modee_is_mogee</p>
        </S.ContentBox>
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

  ContentBox: styled.div`
    display: flex;
    justify-content: space-between;
    list-style: none;

    width: 34.4rem;
    margin: 0.6rem 0;

    & > h2 {
      color: ${({ theme }) => theme.colors.moddy_gray50};

      ${({ theme }) => theme.fonts.Body01};
    }

    & > p {
      color: ${({ theme }) => theme.colors.moddy_bk};

      ${({ theme }) => theme.fonts.Body02};
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

    & > div {
      display: flex;
      justify-content: space-between;
    }

    & > div:not(:last-child) {
      margin-bottom: 0.5rem;
    }

    & > div > h3 {
      color: ${({ theme }) => theme.colors.moddy_gray50};

      ${({ theme }) => theme.fonts.Body02};
    }

    & > div > h4 {
      color: ${({ theme }) => theme.colors.moddy_bk};

      ${({ theme }) => theme.fonts.Body02};
    }

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
