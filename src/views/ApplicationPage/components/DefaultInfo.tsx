import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { IcEssential } from '../../@common/assets/icons';
import Button from '../../@common/components/Button';
import Header from '../../@common/components/Header';
import ProgressBar from '../../@common/components/ProgressBar';

import HairTypeInput from './HairTypeInput';
import StyleButton from './StyleButton';
const DefaultInfo = () => {
  const [selectedLength, setSelectedLength] = useState('');
  const [lengthState, setLengthState] = useState([false, false, false, false]);
  const [preferStyles, setPreferStyles] = useState<string[]>([]);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    selectedLength && preferStyles[0] ? setVerified(true) : setVerified(false);
  }, [selectedLength, preferStyles]);

  const moveNext = () => {};

  return (
    <S.DefaultInfoLayout>
      <Header title="모델 지원하기" isBackBtnExist={true} isCloseBtnExist={true} />
      <ProgressBar whole={4} current={1} />
      <S.StyleSection>
        <S.HairLengthSection>
          <S.Title>
            <h2>
              머리 기장 <IcEssential />
            </h2>
            <span>현재 머리 기장을 선택해주세요</span>
          </S.Title>
          <S.HairTypeInputBox>
            <HairTypeInput
              lengthState={lengthState}
              setLengthState={setLengthState}
              setHairLengthFn={setSelectedLength}
              imgIdx={0}
            />
            <HairTypeInput
              lengthState={lengthState}
              setLengthState={setLengthState}
              setHairLengthFn={setSelectedLength}
              imgIdx={1}
            />
            <HairTypeInput
              lengthState={lengthState}
              setLengthState={setLengthState}
              setHairLengthFn={setSelectedLength}
              imgIdx={2}
            />
            <HairTypeInput
              lengthState={lengthState}
              setLengthState={setLengthState}
              setHairLengthFn={setSelectedLength}
              imgIdx={3}
            />
          </S.HairTypeInputBox>
        </S.HairLengthSection>
        <hr />
        <S.DeserveStyleSection>
          <S.Title>
            <h2>
              희망 스타일 <IcEssential />
            </h2>
            <span>원하시는 시술을 모두 선택해주세요</span>
          </S.Title>
          <S.StyleBox>
            <h3>커트</h3>
            <StyleButton
              isSelected={false}
              type="일반 커트"
              preferStyles={preferStyles}
              setPreferStyles={setPreferStyles}
            />
          </S.StyleBox>
          <hr />
          <S.StyleBox>
            <h3>컬러</h3>
            <S.SelectList>
              <StyleButton
                isSelected={false}
                type="전체 염색"
                preferStyles={preferStyles}
                setPreferStyles={setPreferStyles}
              />
              <StyleButton
                isSelected={false}
                type="전체 탈색"
                preferStyles={preferStyles}
                setPreferStyles={setPreferStyles}
              />
            </S.SelectList>
          </S.StyleBox>
          <hr />
          <S.StyleBox>
            <h3>펌</h3>
            <S.SelectList>
              <StyleButton
                isSelected={false}
                type="셋팅펌"
                preferStyles={preferStyles}
                setPreferStyles={setPreferStyles}
              />
              <StyleButton
                isSelected={false}
                type="일반펌"
                preferStyles={preferStyles}
                setPreferStyles={setPreferStyles}
              />
              <StyleButton
                isSelected={false}
                type="매직"
                preferStyles={preferStyles}
                setPreferStyles={setPreferStyles}
              />
            </S.SelectList>
          </S.StyleBox>
        </S.DeserveStyleSection>
      </S.StyleSection>
      <Button text="다음" onClickFn={moveNext} isFixed={true} disabled={!verified} />
    </S.DefaultInfoLayout>
  );
};

const S = {
  DefaultInfoLayout: styled.main`
    display: flex;
    overflow: hidden;

    width: 100%;
  `,

  StyleSection: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    width: 100%;
    margin: 8.5rem auto 10rem;
    padding-bottom: 2.6rem;

    ${({ theme }) => theme.commons.scrollbar};

    & > hr {
      position: absolute;
      top: 18.2rem;

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
    margin: 2rem 0 2.8rem;
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
