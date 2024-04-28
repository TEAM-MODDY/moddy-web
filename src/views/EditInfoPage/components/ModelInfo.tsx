import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

import { MODEL_TOAST_MESSAGE } from '../constants/message';

import RegionList from './RegionList';

import { IcCloseSmBlue, IcDownGrey, IcInformation, IcUpBlue } from '@/views/@common/assets/icons';
import Input from '@/views/@common/components/Input';
import TitleField from '@/views/@common/components/TitleField';
import { REGEX } from '@/views/@common/utils/regex';
import { BIRTH_YEAR_LENGTH, NAME_MAX_LENGTH } from '@/views/SignUpPage/constants/constants';
import { PLACE_HOLDER_MESSAGE } from '@/views/SignUpPage/constants/message';

interface ModelInfoProps {
  setIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
  setToastMsg: React.Dispatch<React.SetStateAction<string>>;
}

export interface UserInfo {
  name: string;
  year: string;
  gender: string;
  phoneNumber: string;
  preferRegions: string[];
}

const ModelInfo = ({ setIsChanged, setToastMsg }: ModelInfoProps) => {
  const [isShowCategory, setIsShowCategory] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);
  const selectorBoxRef = useRef<HTMLDivElement>(null);

  const [info, setInfo] = useState<UserInfo>({
    name: '안현주',
    year: '2000',
    gender: '여성',
    phoneNumber: '010-1234-5678',
    preferRegions: ['강남구', '도봉구'],
  });

  //get api로 리스트 받아올 예정
  const regionList = [
    { id: 0, name: '전체' },
    { id: 1, name: '관악구' },
    { id: 2, name: '동작구' },
    { id: 3, name: '강남구' },
    { id: 4, name: '강동구' },
    { id: 5, name: '강북구' },
    { id: 6, name: '강서구' },
    { id: 7, name: '광진구' },
    { id: 8, name: '구로구' },
    { id: 9, name: '금천구' },
    { id: 10, name: '노원구' },
    { id: 11, name: '도봉구' },
    { id: 12, name: '동대문구' },
    { id: 13, name: '마포구' },
    { id: 14, name: '서대문구' },
    { id: 15, name: '서초구' },
    { id: 16, name: '성동구' },
    { id: 17, name: '성북구' },
    { id: 18, name: '송파구' },
    { id: 19, name: '양천구' },
    { id: 20, name: '영등포구' },
    { id: 21, name: '용산구' },
    { id: 22, name: '은평구' },
    { id: 23, name: '종로구' },
    { id: 24, name: '중구' },
    { id: 25, name: '중랑구' },
  ];

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

  const handleInputChange = (key: string, value: string | React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    const newValue = typeof value === 'string' ? value : value.currentTarget.innerText;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [key]: newValue,
    }));
    checkVerified();
    setIsChanged(true);
  };

  const checkVerified = () => {
    if (!REGEX.NAME.test(info.name)) {
      setToastMsg(MODEL_TOAST_MESSAGE.NAME);
    } else if (!REGEX.BIRTH_YEAR.test(info.year)) {
      setToastMsg(MODEL_TOAST_MESSAGE.BIRTH_YEAR);
    } else if (!info.preferRegions.length) {
      setToastMsg(MODEL_TOAST_MESSAGE.REGION);
    } else {
      setToastMsg('');
    }
  };

  const handleShowCategory = () => {
    setIsShowCategory((prev) => !prev);
  };

  return (
    <S.ModelInfoSectionLayout>
      <S.InputBox>
        <TitleField text="이름" isEssential={true} />
        <Input
          placeholderText={PLACE_HOLDER_MESSAGE.INPUT_NAME}
          initialValue={info.name}
          onChangeFn={(value) => handleInputChange('name', value)}
          maxLength={NAME_MAX_LENGTH}
        />
        <S.HelperBox>
          <IcInformation />
          <S.HelperSpan>실명을 입력해주세요</S.HelperSpan>
        </S.HelperBox>
      </S.InputBox>
      <S.InputBox>
        <TitleField text="출생 연도" isEssential={true} />
        <Input
          placeholderText={PLACE_HOLDER_MESSAGE.INPUT_BIRTH_YEAR}
          initialValue={info.year}
          onChangeFn={(value) => handleInputChange('birthYear', value)}
          regex={REGEX.BIRTH_YEAR}
          maxLength={BIRTH_YEAR_LENGTH}
        />
      </S.InputBox>
      <S.InputBox>
        <TitleField text="성별" isEssential={true} />
        <S.GenderSelectBox>
          <S.GenderRadio type="radio" id="FEMALE" name="gender-type" checked={info.gender === '여성'} />
          <S.GenderLabel htmlFor="FEMALE" onClick={(value) => handleInputChange('gender', value)}>
            여성
          </S.GenderLabel>
          <S.GenderRadio type="radio" id="MALE" name="gender-type" checked={info.gender === '남성'} />
          <S.GenderLabel htmlFor="MALE" onClick={(value) => handleInputChange('gender', value)}>
            남성
          </S.GenderLabel>
        </S.GenderSelectBox>
      </S.InputBox>
      <S.InputBox>
        <TitleField text="전화번호" isEssential={true} />
        <S.DisabledInputBox>{info.phoneNumber}</S.DisabledInputBox>
      </S.InputBox>
      <S.InputBox>
        <TitleField text="시술희망 지역" isEssential={true} />
        <S.SelectorBox
          $isShowChecked={isShowCategory.toString()}
          $isRegionSelected={info.preferRegions.length}
          onClick={handleShowCategory}
          ref={selectorBoxRef}>
          {info.preferRegions.length
            ? info.preferRegions.map((region) => (
                <S.SelectedRegionBox key={region}>
                  <S.RegionName>{region}</S.RegionName>
                  <IcCloseSmBlue />
                </S.SelectedRegionBox>
              ))
            : PLACE_HOLDER_MESSAGE.SELECT_PREFER_REGION}
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
                {regionList.map((region) => (
                  <RegionList key={region.name} currentRegions={info.preferRegions} region={region} setInfo={setInfo} />
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

  SelectorBox: styled.div<{ $isShowChecked: string; $isRegionSelected: number }>`
    display: flex;
    gap: 1rem;
    position: relative;

    width: 100%;
    padding: ${({ $isRegionSelected }) => ($isRegionSelected ? '0.4rem' : '1.2rem 1.6rem')};
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

export default ModelInfo;
