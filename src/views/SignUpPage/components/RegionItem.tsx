import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { IcCheckboxBlue, IcCheckboxGrey } from '../../@common/assets/icons';

import { preferRegionState } from '@/recoil/atoms/signUpState';
interface RegionItemProps {
  region: string;
  index: number;
  regionList: string[];
}

const RegionItem = (props: RegionItemProps) => {
  const { region, index, regionList } = props;
  const [isCheckedList, setIsCheckedList] = useRecoilState(preferRegionState);

  const handleCheck = () => {
    const selectedCount = isCheckedList.data.filter((value) => value === true).length;
    // 전체선택을 누르면
    if (index === 0) {
      setIsCheckedList((prev) => {
        //전체가 이미 선택돼있다면 전체 취소하기/ 선택돼있지 않다면 전체 선택하고 나머지 다 취소
        const isAllSelected = prev.data[0];
        const updatedData = isAllSelected
          ? [false, ...Array(regionList.length - 1)]
          : [true, ...Array(regionList.length - 1)];
        return {
          data: updatedData,
          verifyStatus: prev.verifyStatus,
        };
      });
    } else {
      //체크된게 3이상이면
      if (selectedCount >= 3) {
        //기존 체크된거 취소만 가능
        if (isCheckedList.data[index]) {
          setIsCheckedList((prev) => {
            const updatedList = [...prev.data];
            updatedList[index] = !updatedList[index];
            if (index !== 0 && updatedList[0]) {
              updatedList[0] = false;
            }
            return {
              data: updatedList,
              verifyStatus: prev.verifyStatus,
            };
          });
        }
      }
      //아니라면 체크하기/체크풀기 가능
      else {
        setIsCheckedList((prev) => {
          const updatedList = [...prev.data];
          updatedList[index] = !updatedList[index];
          if (index !== 0 && updatedList[0]) {
            updatedList[0] = false;
          }
          return {
            data: updatedList,
            verifyStatus: prev.verifyStatus,
          };
        });
      }
    }
  };

  return (
    <S.CategoryItem>
      <button type="button" onClick={handleCheck}>
        {isCheckedList.data && isCheckedList.data[index] ? <IcCheckboxBlue /> : <IcCheckboxGrey />}
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
