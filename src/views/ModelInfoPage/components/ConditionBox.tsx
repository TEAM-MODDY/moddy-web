import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface ConditionBoxProps {
  icon: ReactNode;
  condition: string;
  isClicked: boolean;
}

const ConditionBox = ({ icon, condition, isClicked }: ConditionBoxProps) => {
  return (
    <S.ConditionWrapperButton $isClicked={isClicked}>
      <div>{icon}</div>
      <p>{condition}</p>
    </S.ConditionWrapperButton>
  );
};

const S = {
  ConditionWrapperButton: styled.button<{ $isClicked: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.7rem 0.8rem;
    border: 1.5px solid ${({ theme }) => theme.colors.moddy_gray20};
    border-radius: 8px;

    & > div {
      margin-right: 0.6rem;
    }

    & > p {
      background-color: ${({ $isClicked, theme }) => ($isClicked ? theme.colors.moddy_blue4 : theme.colors.moddy_wt)};

      color: ${({ $isClicked, theme }) => ($isClicked ? theme.colors.moddy_blue : theme.colors.moddy_gray50)};

      ${({ theme }) => theme.fonts.Body02};
    }
  `,
};

export default ConditionBox;
