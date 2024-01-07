import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface ConditionBoxProps {
  icon: ReactNode;
  activeIcon: ReactNode;
  condition: string;
  index: number;
  onClick: (index: number) => void;
  isSelected: boolean;
}

const ConditionBox = ({ icon, activeIcon, condition, onClick, index, isSelected }: ConditionBoxProps) => {
  return (
    <S.ConditionWrapperButton onClick={() => onClick(index)} $isSelected={isSelected}>
      <div>{isSelected ? activeIcon : icon}</div>
      <p>{condition}</p>
    </S.ConditionWrapperButton>
  );
};

const S = {
  ConditionWrapperButton: styled.button<{ $isSelected: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.7rem 0.8rem;
    border: 1.5px solid
      ${({ $isSelected, theme }) => ($isSelected ? theme.colors.moddy_blue : theme.colors.moddy_gray20)};
    border-radius: 8px;

    background-color: ${({ $isSelected, theme }) => ($isSelected ? theme.colors.moddy_blue4 : theme.colors.moddy_wt)};

    & > div {
      margin-right: 0.6rem;
    }

    & > p {
      color: ${({ $isSelected, theme }) => ($isSelected ? theme.colors.moddy_blue : theme.colors.moddy_gray50)};

      ${({ theme }) => theme.fonts.Body02};
    }
  `,
};

export default ConditionBox;
