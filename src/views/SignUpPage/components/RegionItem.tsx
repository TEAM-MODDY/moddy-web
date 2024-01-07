import { styled } from 'styled-components';

import { IcCheckboxBlue, IcCheckboxGrey } from '../../@common/assets/icons';

interface RegionItemProps {
  region: string;
  isCheckedList: boolean[];
  index: number;
  setIsCheckedList: React.Dispatch<React.SetStateAction<boolean[]>>;
  regionList: string[];
}
const RegionItem = (props: RegionItemProps) => {
  const { region, isCheckedList, index, setIsCheckedList, regionList } = props;

  const handleCheck = () => {
    const selectedCount = isCheckedList.filter((value) => value === true).length;
    // 전체선택을 누르면
    if (index === 0) {
      setIsCheckedList(() => {
        //전체가 이미 선택돼있다면 전체 취소하기/ 선택돼있지 않다면 전체 선택하고 나머지 다 취소
        const updatedList = !isCheckedList[0]
          ? [true, ...Array(regionList.length - 1)]
          : [false, ...Array(regionList.length - 1)];
        return updatedList;
      });
    } else {
      //체크된게 3이상이면
      if (selectedCount >= 3) {
        //기존 체크된거 취소만 가능
        if (isCheckedList[index]) {
          setIsCheckedList((prev) => {
            const updatedList = [...prev];
            updatedList[index] = !updatedList[index];
            isCheckedList[0] && (updatedList[0] = false);
            return updatedList;
          });
        }
      }
      //아니라면 체크하기/체크풀기 가능
      else {
        setIsCheckedList((prev) => {
          const updatedList = [...prev];
          updatedList[index] = !updatedList[index];
          isCheckedList[0] && (updatedList[0] = false);
          return updatedList;
        });
      }
    }
  };
  return (
    <S.CategoryItem>
      <button type="button" onClick={handleCheck}>
        {isCheckedList[index] ? <IcCheckboxBlue /> : <IcCheckboxGrey />}
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
