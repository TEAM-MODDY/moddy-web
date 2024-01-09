import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import applyImg from '../../@common/assets/images/img_applylogo.png';
import Button from '../../@common/components/Button';
import Header from '../../@common/components/Header';

const ApplicationResult = () => {
  const navigate = useNavigate();
  return (
    <S.ApplicationResultLayout>
      <Header isBackBtnExist={true} isCloseBtnExist={true} title="최종 확인" />
      <S.ContentSection>
        <S.ContentBox>
          <h2>모델 정보</h2>
          <S.DivideBox>
            <img alt="profile" src="src/views/@common/assets/images/img_samplemodel.png" />
            <S.Info>
              <li>
                <S.InfoTitle>이름</S.InfoTitle>
                <S.InfoSpan>백모디</S.InfoSpan>
              </li>
              <li>
                <S.InfoTitle>성별/나이</S.InfoTitle>
                <S.InfoSpan>여성/25살</S.InfoSpan>
              </li>
              <li>
                <S.InfoTitle>희망 지역</S.InfoTitle>
                <S.InfoSpan>양천구</S.InfoSpan>
              </li>
              <li>
                <S.InfoTitle>현재 기장</S.InfoTitle>
                <S.InfoSpan>허리 아래</S.InfoSpan>
              </li>
            </S.Info>
          </S.DivideBox>
        </S.ContentBox>
        <S.DivideBox>
          <S.ContentBox>
            <h2>최근 시술 이력</h2>
            <S.Info>
              <li>
                <S.InfoTitle>1개월 미만</S.InfoTitle>
                <S.InfoSpan>블랙 염색</S.InfoSpan>
              </li>
              <li>
                <S.InfoTitle>7 - 12개월</S.InfoTitle>
                <S.InfoSpan>컬러 염색</S.InfoSpan>
              </li>
              <li>
                <S.InfoTitle>12개월 초과</S.InfoTitle>
                <S.InfoSpan>탈색</S.InfoSpan>
              </li>
            </S.Info>
          </S.ContentBox>
          <S.ContentBox>
            <h2>희망 스타일</h2>
            <S.Info>
              <li>
                <S.InfoTitle>커트</S.InfoTitle>
                <S.InfoSpan>일반 커트</S.InfoSpan>
              </li>
              <li>
                <S.InfoTitle>컬러</S.InfoTitle>
                <S.InfoSpan>선택 없음</S.InfoSpan>
              </li>
              <li>
                <S.InfoTitle>펌</S.InfoTitle>
                <S.InfoSpan>일반펌</S.InfoSpan>
              </li>
            </S.Info>
          </S.ContentBox>
        </S.DivideBox>
        <S.ContentBox>
          <h2>상세 희망 스타일</h2>
          <S.InfoText>더미데이터 </S.InfoText>
        </S.ContentBox>
      </S.ContentSection>
      <img src={applyImg} alt="로고이미지" />
      <Button
        text="지원하기"
        isFixed={true}
        onClickFn={() => {
          navigate(`/application/confirm`);
        }}
      />
    </S.ApplicationResultLayout>
  );
};

const S = {
  ApplicationResultLayout: styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;

    width: 100%;
    height: 100%;
    margin: 5.7rem 0 10rem;

    ${({ theme }) => theme.fonts.Body01};

    & > img {
      position: absolute;
      right: 1.3rem;
      bottom: 9.5rem;

      width: 13.4rem;
      object-fit: cover;
    }
  `,

  ContentSection: styled.section`
    display: flex;
    flex-direction: column;
    gap: 2.6rem;
    overflow-y: scroll;
    position: relative;

    width: 100%;
    margin-right: 8px;
    padding: 0 2rem 2.3rem;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 12px;

      background: ${({ theme }) => theme.colors.moddy_blue3};
      background-clip: padding box;
    }
  `,

  ContentBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    width: 100%;

    & > h2 {
      padding-bottom: 0.6rem;
      border-bottom: 0.1px solid ${({ theme }) => theme.colors.moddy_blue};

      color: ${({ theme }) => theme.colors.moddy_blue};

      ${({ theme }) => theme.fonts.Body01};
    }
  `,

  DivideBox: styled.div`
    display: flex;
    gap: 1.6rem;
    justify-content: space-between;

    width: 100%;

    & > img {
      overflow: hidden;

      width: 9rem;
      margin-right: 0.2rem;
      border-radius: 6px;
      object-fit: cover;
    }
  `,

  Info: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    flex: 1;

    & > li {
      display: flex;
      justify-content: space-between;
    }
  `,

  InfoTitle: styled.h3`
    color: ${({ theme }) => theme.colors.moddy_gray50};

    ${({ theme }) => theme.fonts.Body02};
  `,

  InfoSpan: styled.span`
    color: ${({ theme }) => theme.colors.moddy_bk};

    ${({ theme }) => theme.fonts.Body02};
  `,

  InfoText: styled.p`
    height: 13.2rem;
    padding: 1.2rem 1.55rem;
    border: none;
    border-radius: 10px;
    resize: none;

    background-color: ${({ theme }) => theme.colors.moddy_blue4};

    color: ${({ theme }) => theme.colors.moddy_bk};

    ${({ theme }) => theme.fonts.Body04};
  `,
};

export default ApplicationResult;