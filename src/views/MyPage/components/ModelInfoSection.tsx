import { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import { preferRegionState } from '@/recoil/atoms/signUpState';
import { IcCloseSmBlue, IcDownGrey, IcInformation, IcUpBlue } from '@/views/@common/assets/icons';
import Input from '@/views/@common/components/Input';
import RegionItem from '@/views/@common/components/RegionItem';
import TitleField from '@/views/@common/components/TitleField';

interface ModelInfoSectionProps {
  onInfoChange: () => void;
}

const ModelInfoSection = ({ onInfoChange }: ModelInfoSectionProps) => {
  const regionList = [
    { id: 0, name: '전체' },
    { id: 1, name: '강남구' },
    { id: 2, name: '서초구' },
    { id: 3, name: '관악구' },
    { id: 4, name: '종로구' },
    { id: 5, name: '광진구' },
    { id: 6, name: '송파구' },
  ];
  const isRegionList = useRecoilValue(preferRegionState);
  const [isShowCategory, setIsShowCategory] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);
  const selectorBoxRef = useRef<HTMLDivElement>(null);

  const isRegionSelected = isRegionList.every((region) => !region);

  useEffect(() => {
    // 특정 영역 외 클릭 시 발생하는 이벤트
    const handleFocus = (e: MouseEvent) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(e.target as Node) &&
        selectorBoxRef.current &&
        !selectorBoxRef.current.contains(e.target as Node)
      ) {
        setIsShowCategory(false);
      }
    };

    document.addEventListener('mouseup', handleFocus);

    return () => {
      document.removeEventListener('mouseup', handleFocus);
    };
  }, [categoryRef]);

  const handleShowCategory = () => {
    setIsShowCategory((prev) => !prev);
  };

  return (
    <S.ModelInfoSectionLayout>
      <S.InputBox>
        <TitleField text="이름" isEssential={true} />
        <Input placeholderText="정보" onChangeFn={onInfoChange} />
        <S.HelperBox>
          <IcInformation />
          <S.HelperSpan>실명을 입력해주세요</S.HelperSpan>
        </S.HelperBox>
      </S.InputBox>
      <S.InputBox>
        <TitleField text="출생 연도" isEssential={true} />
        <Input placeholderText="정보" onChangeFn={onInfoChange} />
      </S.InputBox>
      <S.InputBox>
        <TitleField text="성별" isEssential={true} />
        <S.GenderSelectBox>
          <S.GenderRadio type="radio" />
          <S.GenderLabel>여성</S.GenderLabel>
          <S.GenderRadio type="radio" />
          <S.GenderLabel>남성</S.GenderLabel>
        </S.GenderSelectBox>
      </S.InputBox>
      <S.InputBox>
        <TitleField text="전화번호" isEssential={true} />
        <S.DisabledInputBox>정보</S.DisabledInputBox>
      </S.InputBox>
      <S.InputBox>
        <TitleField text="시술희망 지역" isEssential={true} />
        <S.SelectorBox
          $isShowChecked={isShowCategory.toString()}
          $isRegionSelected={isRegionSelected}
          onClick={handleShowCategory}
          ref={selectorBoxRef}>
          {isRegionSelected
            ? '희망 지역 선택 안내'
            : isRegionList.map((region, index) =>
                region ? (
                  <S.SelectedRegionBox key={index}>
                    <S.RegionName>{regionList[index].name}</S.RegionName>
                    <IcCloseSmBlue />
                  </S.SelectedRegionBox>
                ) : null,
              )}
          {!isShowCategory ? <IcDownGrey /> : <IcUpBlue />}
        </S.SelectorBox>
        {!isShowCategory ? (
          <S.HelperBox>
            <IcInformation />
            <S.HelperSpan>지금은 서울특별시에서만 운영하고 있어요.</S.HelperSpan>
          </S.HelperBox>
        ) : (
          <S.CategoryBox ref={categoryRef}>
            <S.InnerBox>
              <S.CitySpan>서울특별시</S.CitySpan>
              <S.RegionList>
                {regionList.map((region, index) => (
                  <RegionItem key={index} region={region.name} index={region.id} regionList={regionList} />
                ))}
              </S.RegionList>
            </S.InnerBox>
          </S.CategoryBox>
        )}
      </S.InputBox>
    </S.ModelInfoSectionLayout>
  );
};

const S = {
  ModelInfoSectionLayout: styled.section`
    display: flex;
    flex-direction: column;
    gap: 3.6rem;
  `,
  InputBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  `,
  GenderSelectBox: styled.div`
    display: flex;
    gap: 1.6rem;
  `,
  GenderRadio: styled.input`
    display: none;

    &:checked + label {
      border: 1.5px solid ${({ theme }) => theme.colors.moddy_blue};

      box-shadow: ${({ theme }) => theme.effects.shadow2};

      color: ${({ theme }) => theme.colors.moddy_bk};
    }
  `,
  GenderLabel: styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    width: 16.4rem;
    padding: 1.2rem 0;
    border: 1.5px solid ${({ theme }) => theme.colors.moddy_gray20};
    border-radius: 8px;

    background: ${({ theme }) => theme.colors.moddy_wt};

    color: ${({ theme }) => theme.colors.moddy_gray50};
    ${({ theme }) => theme.fonts.Body01};
  `,
  DisabledInputBox: styled.div`
    width: 100%;
    height: 4.2rem;
    padding: 1.2rem 1.5rem;
    border: 1.5px solid ${({ theme }) => theme.colors.moddy_gray20};
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.moddy_gray05};

    color: ${({ theme }) => theme.colors.moddy_gray50};
    ${({ theme }) => theme.fonts.Body02};
  `,

  SelectorBox: styled.div<{ $isShowChecked: string; $isRegionSelected: boolean }>`
    display: flex;
    gap: 1rem;
    position: relative;

    width: 100%;
    padding: ${({ $isRegionSelected }) => ($isRegionSelected ? '1.2rem 1.6rem' : '0.4rem')};
    border: 1.5px solid
      ${({ theme, $isShowChecked }) =>
        $isShowChecked === 'true' ? theme.colors.moddy_blue : theme.colors.moddy_gray20};
    ${({ theme }) => theme.colors.moddy_gray20};

    border-radius: 8px;
    ${({ theme }) => theme.fonts.Body02};

    color: ${({ theme }) => theme.colors.moddy_gray50};

    & > svg {
      position: absolute;
      top: 1.1rem;
      right: 1.3rem;
    }
  `,

  SelectedRegionBox: styled.div`
    display: flex;
    gap: 0.4rem;
    align-items: center;

    width: fit-content;
    padding: 0.7rem 1.2rem;
    border: 1.5px solid ${({ theme }) => theme.colors.moddy_blue};
    border-radius: 6px;

    background-color: ${({ theme }) => theme.colors.moddy_blue4};
  `,
  RegionName: styled.span`
    height: fit-content;

    color: ${({ theme }) => theme.colors.moddy_blue};
    ${({ theme }) => theme.fonts.Headline04};
  `,

  HelperBox: styled.div`
    display: flex;
    gap: 0.4rem;

    margin-top: -0.4rem;
  `,

  HelperSpan: styled.span`
    color: ${({ theme }) => theme.colors.moddy_blue2};
    ${({ theme }) => theme.fonts.Body04};
  `,

  CategoryBox: styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;

    width: 100%;
    height: 25.8rem;
    margin-top: 0.4rem;
    padding: 1.2rem;
    border-radius: 8px;

    background: ${({ theme }) => theme.colors.moddy_wt};
    box-shadow: ${({ theme }) => theme.effects.shadow4};
  `,
  InnerBox: styled.div`
    width: 100%;

    ${({ theme }) => theme.commons.scrollbar};
  `,

  CitySpan: styled.span`
    color: ${({ theme }) => theme.colors.moddy_blue2};
    ${({ theme }) => theme.fonts.Body03};
  `,

  RegionList: styled.ul`
    margin-top: 0.4rem;
    padding: 0.6rem 2rem;
  `,
};

export default ModelInfoSection;
