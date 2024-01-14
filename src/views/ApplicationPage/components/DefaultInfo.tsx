import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { IcEssential } from '../../@common/assets/icons';
import Button from '../../@common/components/Button';
import Header from '../../@common/components/Header';
import ProgressBar from '../../@common/components/ProgressBar';
import { INFO_MESSAGE } from '../constants/message';

import HairTypeInput from './HairTypeInput';
import StyleButton from './StyleButton';

import { applyStepState, hairStyleState } from '@/recoil/atoms/applicationState';
const DefaultInfo = () => {
  const [step, setStep] = useRecoilState(applyStepState);
  const [selectedStyle, setSelectedStyle] = useRecoilState(hairStyleState);
  const { length, preference, verifyStatus } = selectedStyle;
  const [lengthState, setLengthState] = useState([false, false, false, false]);
  const navigate = useNavigate();

  useEffect(() => {
    length && preference[0]
      ? setSelectedStyle({ ...selectedStyle, verifyStatus: true })
      : setSelectedStyle({ ...selectedStyle, verifyStatus: false });
  }, [length, preference]);

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
              <HairTypeInput lengthState={lengthState} setLengthState={setLengthState} imgIdx={0} />
              <HairTypeInput lengthState={lengthState} setLengthState={setLengthState} imgIdx={1} />
              <HairTypeInput lengthState={lengthState} setLengthState={setLengthState} imgIdx={2} />
              <HairTypeInput lengthState={lengthState} setLengthState={setLengthState} imgIdx={3} />
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
            <S.StyleBox>
              <h3>커트</h3>
              <StyleButton isSelected={false} type="일반 커트" />
            </S.StyleBox>
            <hr />
            <S.StyleBox>
              <h3>컬러</h3>
              <S.SelectList>
                <StyleButton isSelected={false} type="전체 염색" />
                <StyleButton isSelected={false} type="전체 탈색" />
              </S.SelectList>
            </S.StyleBox>
            <hr />
            <S.StyleBox>
              <h3>펌</h3>
              <S.SelectList>
                <StyleButton isSelected={false} type="셋팅펌" />
                <StyleButton isSelected={false} type="일반펌" />
                <StyleButton isSelected={false} type="매직" />
              </S.SelectList>
            </S.StyleBox>
          </S.DeserveStyleSection>
        </S.StyleSection>
      </S.MainStyle>
      <Button
        text={INFO_MESSAGE.NEXT}
        onClickFn={() => {
          setStep({ ...step, current: step.current + 1 });
        }}
        isFixed={true}
        disabled={!verifyStatus}
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
    margin: 8.5rem 1rem 10rem;
    padding: 0 0.8rem 0 1rem;

    ${({ theme }) => theme.commons.scrollbar};
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
    margin: 2rem 0 2.8rem;
  `,

  DeserveStyleSection: styled.section`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-top: 2.4rem;

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
