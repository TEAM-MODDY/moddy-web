import styled from 'styled-components';

import { IcCheckboxBlue, IcCheckboxGrey } from '../../@common/assets/icons';

interface StyleButtonProps {
  type: string;
  isSelected: boolean;
}

const StyleButton = ({ type, isSelected }: StyleButtonProps) => {
  return (
    <S.StyleButtonLayout type="button">
      {isSelected ? <IcCheckboxBlue /> : <IcCheckboxGrey />}
      <S.StyleTitle $isSelected={isSelected}>{type}</S.StyleTitle>
    </S.StyleButtonLayout>
  );
};

const S = {
  StyleButtonLayout: styled.button`
    display: flex;
    gap: 0.8rem;
    align-items: center;

    width: 50%;
  `,

  StyleTitle: styled.span<{ $isSelected: boolean }>`
    color: ${({ $isSelected, theme }) => ($isSelected ? theme.colors.moddy_bk : theme.colors.moddy_gray50)};
    ${({ theme }) => theme.fonts.Headline04};
  `,
};

export default StyleButton;
