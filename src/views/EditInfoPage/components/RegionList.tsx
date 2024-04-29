import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { ModelUserInfo } from '../hooks/type';

import { IcCheckboxBlue, IcCheckboxGrey } from '@/views/@common/assets/icons';

interface RegionItemProps {
  currentRegions: string[];
  region: {
    id: number;
    name: string;
  };
  setInfo: React.Dispatch<React.SetStateAction<ModelUserInfo>>;
  setIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegionList = ({ currentRegions, region, setInfo, setIsChanged }: RegionItemProps) => {
  const SELECT_ALL = 0;
  const [isActivated, setIsActivated] = useState(false);

  useEffect(() => {
    setIsActivated(currentRegions.includes(region.name));
  }, [currentRegions]);

  const 개별선택_또는_개별해제 = () => {
    if (isActivated) {
      const indexToRemove = currentRegions.indexOf(region.name);
      currentRegions.splice(indexToRemove, 1);

      setInfo((prevInfo) => ({
        ...prevInfo,
        preferRegions: [...currentRegions],
      }));
    } else {
      setInfo((prevInfo) => ({
        ...prevInfo,
        preferRegions: [...currentRegions, region.name],
      }));
    }
    setIsActivated((prev) => !prev);
  };

  const 전체선택_또는_전체해제 = () => {
    //전체가 이미 선택돼있다면 전체 취소하기 - 선택돼있지 않다면 전체 선택하고 나머지 다 취소
    if (isActivated) {
      const newList: string[] = [];
      setInfo((prevInfo) => ({
        ...prevInfo,
        preferRegions: newList,
      }));
    } else {
      const newList = [region.name];
      setInfo((prevInfo) => ({
        ...prevInfo,
        preferRegions: newList,
      }));
    }
    setIsActivated((prev) => !prev);
  };

  const handleCheck = () => {
    setIsChanged(true);

    // 전체선택을 누르면
    if (region.id === SELECT_ALL) {
      전체선택_또는_전체해제();
    } else {
      //체크된게 3이상이면
      if (currentRegions.length >= 3) {
        //기존 체크된거 취소만 가능
        if (isActivated) {
          개별선택_또는_개별해제();
        }
      }
      //아니라면 체크하기/체크풀기 가능
      else {
        개별선택_또는_개별해제();
      }
    }
  };

  return (
    <S.RegionButton type="button" onClick={handleCheck}>
      {isActivated ? <IcCheckboxBlue /> : <IcCheckboxGrey />}
      <S.RegionSpan $isChecked={true.toString()}>{region.name}</S.RegionSpan>
    </S.RegionButton>
  );
};

const S = {
  RegionButton: styled.button`
    display: flex;
    gap: 0.8rem;
    align-items: center;

    padding: 0.6rem 0;
  `,
  RegionSpan: styled.span<{ $isChecked: string }>`
    display: flex;
    flex: 1;

    color: ${({ theme, $isChecked }) => ($isChecked === 'true' ? theme.colors.moddy_bk : theme.colors.moddy_gray50)};
    ${({ theme }) => theme.fonts.Headline04};
  `,
};

export default RegionList;
