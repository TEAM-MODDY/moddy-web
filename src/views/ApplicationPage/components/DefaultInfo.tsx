import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import { IcEssential } from '../../@common/assets/icons';
import Button from '../../@common/components/Button';
import Header from '../../@common/components/Header';
import ProgressBar from '../../@common/components/ProgressBar';
import { INFO_MESSAGE } from '../constants/message';
import { SELECT_LENGTH, SELECT_STYLE } from '../constants/select';

import HairTypeInput from './HairTypeInput';
import StyleButton from './StyleButton';

import { applyStepState, hairStyleState } from '@/recoil/atoms/applicationState';

const DefaultInfo = () => {
  const [step, setStep] = useRecoilState(applyStepState);
  const selectedStyle = useRecoilValue(hairStyleState);
  const [isAllVerified, setIsAllVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkVerify = () => {
      selectedStyle.length && selectedStyle.preference.length > 0 ? setIsAllVerified(true) : setIsAllVerified(false);
    };

    checkVerify();
  }, [selectedStyle.length, selectedStyle.preference]);

  const activateCheckbox = (type: string): boolean => {
    return selectedStyle.preference.includes(type);
  };

  return (
    <S.DefaultInfoLayout>
      <Header
        title={INFO_MESSAGE.TITLE}
        isBackBtnExist={true}
        isCloseBtnExist={false}
        closeFn={() => {
          navigate(`/`);
        }}
      />
      <ProgressBar whole={step.total} current={step.current} />
      <S.MainStyle>
        <S.StyleSection>
          <S.HairLengthSection>
            <S.Title>
              <h2>
                {INFO_MESSAGE.LENGTH_TITLE}
                <IcEssential />
              </h2>
              <span>{INFO_MESSAGE.LENGTH_SUBTITLE}</span>
            </S.Title>
            <S.HairTypeInputBox>
              {SELECT_LENGTH.map((element) => (
                <HairTypeInput key={element.LENGTH} type={element.LENGTH} />
              ))}
            </S.HairTypeInputBox>
          </S.HairLengthSection>
          <hr />
          <S.DeserveStyleSection>
            <S.Title>
              <h2>
                {INFO_MESSAGE.PREFERENCE_TITLE} <IcEssential />
              </h2>
              <span>{INFO_MESSAGE.PREFERENCE_SUBTITLE}</span>
            </S.Title>
            {SELECT_STYLE.map((element, index) => (
              <React.Fragment key={element.TITLE}>
                <S.StyleBox>
                  <h3>{element.TITLE}</h3>
                  <S.SelectList>
                    {Object.keys(element.CONTENT).map((content) => (
                      <StyleButton key={content} isSelected={activateCheckbox(content)} type={content} />
                    ))}
                  </S.SelectList>
                </S.StyleBox>
                {index === SELECT_STYLE.length - 1 ? null : <hr />}
              </React.Fragment>
            ))}
          </S.DeserveStyleSection>
        </S.StyleSection>
      </S.MainStyle>
      <Button
        text={INFO_MESSAGE.NEXT}
        onClickFn={() => {
          setStep({ ...step, current: step.current + 1 });
        }}
        isFixed={true}
        disabled={!isAllVerified}
      />
    </S.DefaultInfoLayout>
  );
};

const S = {
  DefaultInfoLayout: styled.section`
    display: flex;
    overflow: hidden;

    width: 100%;
  `,

  MainStyle: styled.main`
    overflow-y: scroll;

    width: 100%;
    margin: 8.5rem 0 10rem;

    &::-webkit-scrollbar {
      width: 0;
    }
  `,

  StyleSection: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding-bottom: 2.6rem;

    & > hr {
      width: 100%;
      height: 4px;
      border: none;

      background-color: ${({ theme }) => theme.colors.moddy_gray05};
    }
  `,

  HairLengthSection: styled.section`
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 0 1.6rem;
  `,

  Title: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    & > h2 {
      display: flex;
      justify-content: flex-start;

      color: ${({ theme }) => theme.colors.moddy_bk};

      ${({ theme }) => theme.fonts.Headline01};
    }

    & > span {
      color: ${({ theme }) => theme.colors.moddy_gray50};

      ${({ theme }) => theme.fonts.Body02};
    }
  `,

  HairTypeInputBox: styled.div`
    display: flex;
    gap: 1.2rem;
    justify-content: space-between;

    width: 100%;
    height: 9.2rem;
    margin: 2rem 0 2.4rem;
  `,

  DeserveStyleSection: styled.section`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-top: 2.4rem;
    padding: 0 1.6rem;

    & > p {
      display: flex;
      justify-content: flex-start;
    }

    & > hr {
      width: 100%;
      height: 1px;
      border: none;

      background-color: ${({ theme }) => theme.colors.moddy_gray05};
    }
  `,

  StyleBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    margin: 1.6rem 0;

    & > h3 {
      color: ${({ theme }) => theme.colors.moddy_bk};

      ${({ theme }) => theme.fonts.Body01};
    }
  `,

  SelectList: styled.ul`
    display: flex;
    flex-wrap: wrap;
    row-gap: 1.2rem;
  `,
};

export default DefaultInfo;
