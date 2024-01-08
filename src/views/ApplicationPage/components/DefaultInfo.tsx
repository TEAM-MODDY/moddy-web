import styled from 'styled-components';

import { IcEssential } from '../../@common/assets/icons';
import Button from '../../@common/components/Button';
import Header from '../../@common/components/Header';
import ProgressBar from '../../@common/components/ProgressBar';

import StyleButton from './StyleButton';

const DefaultInfo = () => {
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
          <S.HairImgList>
            <S.HairImgItem></S.HairImgItem>
            <S.HairImgItem></S.HairImgItem>
            <S.HairImgItem></S.HairImgItem>
            <S.HairImgItem></S.HairImgItem>
          </S.HairImgList>
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
            <StyleButton isSelected={true} type="일반 커트" />
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
      <Button text="다음" onClickFn={moveNext} isFixed={true} />
    </S.DefaultInfoLayout>
  );
};

const S = {
  DefaultInfoLayout: styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
  `,

  StyleSection: styled.section`
    position: relative;

    width: 100%;
    margin: 8.5rem 0 12.6rem;

    ${({ theme }) => theme.commons.scrollbar};

    & > hr {
      position: absolute;
      top: 27rem;

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

  HairImgList: styled.ul`
    display: flex;
    gap: 1.2rem;
    justify-content: space-between;

    width: 100%;
    height: 9.2rem;
    margin: 2rem 0 2.8rem;
  `,

  HairImgItem: styled.li`
    display: flex;
    flex: 1;

    height: 100%;
    padding: 0 0.7rem;
    border: 1px solid ${({ theme }) => theme.colors.moddy_gray20};
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.moddy_wt};
  `,

  DeserveStyleSection: styled.section`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-top: 2.8rem;

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
