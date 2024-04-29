import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

import { MODEL_TOAST_MESSAGE } from '../constants/message';
import { UserInfo } from '../hooks/type';
import useGetRegionList from '../hooks/useGetRegionList';

import RegionList from './RegionList';

import { IcCloseSmBlue, IcDownGrey, IcInformation, IcUpBlue } from '@/views/@common/assets/icons';
import Input from '@/views/@common/components/Input';
import TitleField from '@/views/@common/components/TitleField';
import { REGEX } from '@/views/@common/utils/regex';
import { BIRTH_YEAR_LENGTH, NAME_MAX_LENGTH } from '@/views/SignUpPage/constants/constants';
import { PLACE_HOLDER_MESSAGE } from '@/views/SignUpPage/constants/message';

interface ModelInfoProps {
  initialInfo: UserInfo;
  setIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
  setToastMsg: React.Dispatch<React.SetStateAction<string>>;
}

const ModelInfo = ({ initialInfo, setIsChanged, setToastMsg }: ModelInfoProps) => {
  const [isShowCategory, setIsShowCategory] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);
  const selectorBoxRef = useRef<HTMLDivElement>(null);

  const regionList = useGetRegionList();

  const [info, setInfo] = useState<UserInfo>(initialInfo);

  useEffect(() => {
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

    checkVerified();
  }, [info]);

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

  const handleInputChange = (key: string, value: string | React.ChangeEvent<HTMLInputElement>) => {
    const newValue = typeof value === 'string' ? value : value.target.id;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [key]: newValue,
    }));
    setIsChanged(true);
  };

  const deleteRegion = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, region: string) => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      preferRegions: prevInfo.preferRegions.filter((r) => r !== region),
    }));
    setIsChanged(true);
    event.stopPropagation();
  };

  const handleShowCategory = () => {
    setIsShowCategory((prev) => !prev);
  };

  return (
    initialInfo && (
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
            onChangeFn={(value) => handleInputChange('year', value)}
            regex={REGEX.BIRTH_YEAR}
            maxLength={BIRTH_YEAR_LENGTH}
          />
        </S.InputBox>
        <S.InputBox>
          <TitleField text="성별" isEssential={true} />
          <S.GenderSelectBox>
            <S.GenderRadio
              type="radio"
              id="여성"
              name="gender-type"
              checked={info.gender === '여성'}
              onChange={(value) => handleInputChange('gender', value)}
            />
            <S.GenderLabel htmlFor="여성">여성</S.GenderLabel>
            <S.GenderRadio
              type="radio"
              id="남성"
              name="gender-type"
              checked={info.gender === '남성'}
              onChange={(value) => handleInputChange('gender', value)}
            />
            <S.GenderLabel htmlFor="남성">남성</S.GenderLabel>
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
                    <button type="button" onClick={(event) => deleteRegion(event, region)}>
                      <IcCloseSmBlue />
                    </button>
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
                    <RegionList
                      key={region.name}
                      currentRegions={info.preferRegions}
                      region={region}
                      setInfo={setInfo}
                      setIsChanged={setIsChanged}
                    />
                  ))}
                </S.RegionList>
              </S.InnerBox>
            </S.CategoryBox>
          )}
        </S.InputBox>
      </S.ModelInfoSectionLayout>
    )
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
    gap: 0.65rem;
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
    padding: 0.6rem 0.5rem 0.6rem 1rem;
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
