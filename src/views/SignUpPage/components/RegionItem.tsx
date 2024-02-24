import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { IcCheckboxBlue, IcCheckboxGrey } from '../../@common/assets/icons';
import { PREFER_REGION_MAX_COUNT, SELECT_ALL } from '../constants/constants';

import { preferRegionState } from '@/recoil/atoms/signUpState';
interface RegionItemProps {
  region: string;
  index: number;
  regionList: { id: number; name: string }[];
}

const RegionItem = (props: RegionItemProps) => {
  const { region, index, regionList } = props;
  const [isCheckedList, setIsCheckedList] = useRecoilState(preferRegionState);

  const 개별선택_또는_개별해제 = () => {
    setIsCheckedList((prev) => {
      const updatedList = [...prev];
      updatedList[index] = !updatedList[index];
      if (index !== SELECT_ALL && updatedList[SELECT_ALL]) {
        updatedList[SELECT_ALL] = false;
      }
      return updatedList;
    });
  };

  const 전체선택_또는_전체해제 = () => {
    setIsCheckedList((prev) => {
      //전체가 이미 선택돼있다면 전체 취소하기/ 선택돼있지 않다면 전체 선택하고 나머지 다 취소
      const isAllSelected = prev[SELECT_ALL];
      const updatedData = isAllSelected
        ? [false, ...Array(regionList.length - 1)]
        : [true, ...Array(regionList.length - 1)];
      return updatedData;
    });
  };

  const handleCheck = () => {
    const selectedCount = isCheckedList.filter((value) => value === true).length;
    // 전체선택을 누르면
    if (index === SELECT_ALL) {
      전체선택_또는_전체해제();
    } else {
      //체크된게 3이상이면
      if (selectedCount >= PREFER_REGION_MAX_COUNT) {
        //기존 체크된거 취소만 가능
        if (isCheckedList[index]) {
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
    <S.CategoryItem>
      <button type="button" onClick={handleCheck}>
        {isCheckedList && isCheckedList[index] ? <IcCheckboxBlue /> : <IcCheckboxGrey />}
      </button>
      <S.RegionSpan $ischecked={true.toString()}>{region}</S.RegionSpan>
    </S.CategoryItem>
  );
};

export default RegionItem;

const CategoryItem = styled.li`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  padding: 0.6rem 0;
`;

const RegionSpan = styled.span<{ $ischecked: string }>`
  color: ${({ theme, $ischecked }) => ($ischecked === 'true' ? theme.colors.moddy_bk : theme.colors.moddy_gray50)};
  ${({ theme }) => theme.fonts.Headline04};
`;

const S = {
  CategoryItem,
  RegionSpan,
};
