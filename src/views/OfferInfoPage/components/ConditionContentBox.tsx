import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface ConditionContentBoxProps {
  icon: ReactNode;
  activeIcon: ReactNode;
  condition: string;
  preferConditions: boolean[];
  index: number;
}

const ConditionContentBox = ({ icon, activeIcon, condition, preferConditions, index }: ConditionContentBoxProps) => {
  const currentIndex = index;

  return (
    <S.ConditionContentLayout $isActive={preferConditions[currentIndex]}>
      {preferConditions[currentIndex] ? activeIcon : icon}
      <p>{condition}</p>
    </S.ConditionContentLayout>
  );
};

const S = {
  ConditionContentLayout: styled.section<{ $isActive: boolean }>`
    display: flex;
    justify-content: center;

    & > p {
      color: ${({ theme, $isActive }) => ($isActive ? theme.colors.moddy_bk : theme.colors.moddy_gray50)};
      ${({ theme }) => theme.fonts.Body02};
    }

    & > svg {
      margin-right: 0.6rem;
    }
  `,
};
export default ConditionContentBox;
