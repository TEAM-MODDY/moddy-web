import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';

import applyImg from '../../@common/assets/images/img_applylogo.png';
import Button from '../../@common/components/Button';
import Header from '../../@common/components/Header';
import { INFO_MESSAGE } from '../constants/message';
import { SELECT_TYPE } from '../constants/select';
import usePostApplication from '../hooks/usePostApplication';
import { captureApplication } from '../utils/captureApplication';

import {
  applicationCaptureImgUrlState,
  applyStepState,
  deatiledStyleState,
  hairStyleState,
  historyState,
  profileState,
} from '@/recoil/atoms/applicationState';

const ApplicationResult = () => {
  const setImgUrl = useSetRecoilState(applicationCaptureImgUrlState);
  const [step, setStep] = useRecoilState(applyStepState);
  const navigate = useNavigate();
  const postApplication = usePostApplication();
  //지원서에 update할 state들
  const { modelImgUrl } = useRecoilValue(profileState);
  const { length, preference } = useRecoilValue(hairStyleState);
  const detailedStyle = useRecoilValue(deatiledStyleState);
  const { hairServiceRecords } = useRecoilValue(historyState);

  useEffect(() => {
    captureApplication()
      .then((dataUrl) => {
        setImgUrl({ applicationCaptureImgUrl: dataUrl });
      })
      .catch(() => {
        navigate('/error');
      });
  }, []);

  const handleApplication = async () => {
    try {
      await postApplication();
      navigate(`/application/confirm`);
    } catch (err) {
      console.log(err);
      navigate('/error');
    }
  };

  const setLenghth = () => {
    switch (length) {
      case 'SHORT':
        return '숏';
      case 'ABOVE_SHOULDER':
        return '단발';
      case 'UNDER_SHOULDER':
        return '어깨 아래';
      case 'UNDER_WAIST':
        return '허리 아래';
      default:
        '없음';
    }
  };

  const setHairStyle = (style: string) => {
    let res = [];

    switch (style) {
      case '커트':
        res = preference.filter((value) => value.includes('커트'));
        return res;
      case '컬러':
        res = preference.filter((value) => value.includes('색'));
        return res;
      case '펌':
        res = preference.filter((value) => value.includes('펌'));
        return res;
      default:
        '선택 없음';
    }
  };

  return (
    <S.ApplicationResultLayout>
      <Header
        isBackBtnExist={true}
        isCloseBtnExist={true}
        title={INFO_MESSAGE.FINAL_TITLE}
        backFn={() => {
          setStep({ ...step, current: step.current - 1 });
        }}
        closeFn={() => {
          navigate(`/`);
        }}
      />
      <S.MainContent>
        <S.ContentSection>
          <S.ContentBoxWrapper id="applcationImg">
            <S.ContentBox>
              <h2>{INFO_MESSAGE.MODEL_INFO}</h2>
              <S.DivideBox>
                <img alt="profile" src={modelImgUrl} />
                <S.Info>
                  <li>
                    <S.InfoTitle>{INFO_MESSAGE.INFO_NAME}</S.InfoTitle>
                    <S.InfoSpan>서버 이름</S.InfoSpan>
                  </li>
                  <li>
                    <S.InfoTitle>{INFO_MESSAGE.INFO_GENDER_AGE}</S.InfoTitle>
                    <S.InfoSpan>서버 성별 / 서버 년도</S.InfoSpan>
                  </li>
                  <li>
                    <S.InfoTitle>{INFO_MESSAGE.INFO_REGION}</S.InfoTitle>
                    <S.InfoSpan>서버 지역</S.InfoSpan>
                  </li>
                  <li>
                    <S.InfoTitle>{INFO_MESSAGE.INFO_LENGTH}</S.InfoTitle>
                    <S.InfoSpan>{setLenghth()}</S.InfoSpan>
                  </li>
                </S.Info>
              </S.DivideBox>
            </S.ContentBox>
            <S.DivideBox>
              <S.ContentBox>
                <h2>{INFO_MESSAGE.HISTORY_INFO}</h2>
                <S.Info>
                  {hairServiceRecords.map((record) => (
                    <li key={record.hairService + record.hairServiceTerm}>
                      <S.InfoTitle>{record.hairServiceTerm}</S.InfoTitle>
                      <S.InfoSpan>{record.hairService}</S.InfoSpan>
                    </li>
                  ))}
                </S.Info>
              </S.ContentBox>
              <S.ContentBox>
                <h2>{INFO_MESSAGE.STYLE_INFO}</h2>
                <S.Info>
                  {Object.values(SELECT_TYPE).map((item) => (
                    <li key={item}>
                      <S.InfoTitle>{item}</S.InfoTitle>
                      {JSON.stringify(setHairStyle(item)) === JSON.stringify([]) ? (
                        <S.InfoSpan>선택 없음</S.InfoSpan>
                      ) : (
                        setHairStyle(item)?.map((value) => <S.InfoSpan key={value}>{value}</S.InfoSpan>)
                      )}
                    </li>
                  ))}
                </S.Info>
              </S.ContentBox>
            </S.DivideBox>
            <S.ContentBox>
              <h2>{INFO_MESSAGE.DETAILED_STYLE_INFO}</h2>
              <S.InfoText>{detailedStyle.data}</S.InfoText>
            </S.ContentBox>
          </S.ContentBoxWrapper>
          <img src={applyImg} alt="로고이미지" />
        </S.ContentSection>
      </S.MainContent>
      <Button text={INFO_MESSAGE.FINAL} isFixed={true} onClickFn={handleApplication} />
    </S.ApplicationResultLayout>
  );
};

const S = {
  ApplicationResultLayout: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;

    width: 100%;
    height: 100%;
    margin: 5.7rem 0 10rem;
    padding: 0 1rem;

    ${({ theme }) => theme.fonts.Body01};
  `,

  MainContent: styled.main`
    overflow-y: scroll;

    width: 100%;
    height: max-content;
    min-height: 100%;

    ${({ theme }) => theme.commons.scrollbar};
  `,

  ContentSection: styled.section`
    position: relative;

    & > img {
      position: absolute;
      right: 0;
      bottom: -4.5rem;

      width: 13.4rem;
      object-fit: cover;
    }
  `,

  ContentBoxWrapper: styled.section`
    display: flex;
    flex-direction: column;
    gap: 2.6rem;

    width: 100%;
    padding: 0 0.8rem 0 1rem;

    background-color: ${({ theme }) => theme.colors.moddy_wt};
  `,

  ContentBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    position: relative;

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
    min-height: 13.2rem;
    max-height: fit-content;
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
