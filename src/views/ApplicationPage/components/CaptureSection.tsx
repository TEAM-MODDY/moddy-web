import React, { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { INFO_MESSAGE } from '../constants/message';
import { SELECT_TYPE } from '../constants/select';
import useGetUser from '../hooks/useGetUser';
import { captureApplication } from '../utils/captureApplication';

import {
  applicationCaptureImgUrlState,
  deatiledStyleState,
  hairStyleState,
  historyState,
  profileState,
} from '@/recoil/atoms/applicationState';

const CaptureSection = () => {
  //지원서에 update할 state들
  const { modelImgUrl } = useRecoilValue(profileState);
  const { length, preference } = useRecoilValue(hairStyleState);
  const detailedStyle = useRecoilValue(deatiledStyleState);
  const { hairServiceRecords } = useRecoilValue(historyState);
  const setImgUrl = useSetRecoilState(applicationCaptureImgUrlState);
  const modelInfo = useGetUser();
  useEffect(() => {
    captureApplication().then((dataUrl) => {
      dataUrl && setImgUrl({ applicationCaptureImgUrl: dataUrl });
    });
    // .catch(() => {
    //   navigate('/error');
    // });
  }, []);

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
      case SELECT_TYPE.CUT:
        res = preference.filter((value) => value.includes('커트'));
        return res;
      case SELECT_TYPE.COLOR:
        res = preference.filter((value) => value.includes('색'));
        return res;
      case SELECT_TYPE.PERM:
        res = preference.filter((value) => value.includes('펌') || value.includes('매직'));
        return res;
      default:
        '선택 없음';
    }
  };

  return (
    modelInfo && (
      <S.ContentSectioLayout id="applicationImg">
        <S.ContentBox>
          <h2>{INFO_MESSAGE.MODEL_INFO}</h2>
          <S.DivideBox>
            <img alt="profile" id="weird_test" src={modelImgUrl} />
            <S.Info>
              <li>
                <S.InfoTitle>{INFO_MESSAGE.INFO_NAME}</S.InfoTitle>
                <S.InfoSpan>{modelInfo.name}</S.InfoSpan>
              </li>
              <li>
                <S.InfoTitle>{INFO_MESSAGE.INFO_GENDER_AGE}</S.InfoTitle>
                <S.InfoSpan>
                  {modelInfo.gender} / {modelInfo.age}
                </S.InfoSpan>
              </li>
              <li>
                <S.InfoTitle>{INFO_MESSAGE.INFO_REGION}</S.InfoTitle>
                <S.InfoSpan>
                  {modelInfo.preferRegions.map((value, index, arr) => (
                    <React.Fragment key={value}>
                      {value}
                      {index !== arr.length - 1 && ', '}
                    </React.Fragment>
                  ))}
                </S.InfoSpan>
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
                  <S.InfoSpan>
                    {JSON.stringify(setHairStyle(item)) === JSON.stringify([]) ? (
                      <S.InfoSpan>선택 없음</S.InfoSpan>
                    ) : (
                      setHairStyle(item)?.map((value, index, arr) => (
                        <React.Fragment key={value}>
                          {value}
                          {index !== arr.length - 1 && ', '}
                        </React.Fragment>
                      ))
                    )}
                  </S.InfoSpan>
                </li>
              ))}
            </S.Info>
          </S.ContentBox>
        </S.DivideBox>
        <S.ContentBox>
          <h2>{INFO_MESSAGE.DETAILED_STYLE_INFO}</h2>
          <S.InfoText>{detailedStyle.data}</S.InfoText>
        </S.ContentBox>
      </S.ContentSectioLayout>
    )
  );
};

const S = {
  ContentSectioLayout: styled.section`
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
      height: 9rem;
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

export default CaptureSection;
