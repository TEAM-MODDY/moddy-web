import { useState } from 'react';
import { styled } from 'styled-components';

import { IcCheckboxBlue, IcCheckboxGrey } from '../../@common/assets/icons';

interface StyleButtonProps {
  type: string;
  isSelected: boolean;
  preferStyles: string[];
  setPreferStyles: React.Dispatch<React.SetStateAction<string[]>>;
}

const StyleButton = ({ type, isSelected, preferStyles, setPreferStyles }: StyleButtonProps) => {
  const [activate, isActivate] = useState(isSelected);

  const styleResult = () => {
    if (activate) {
      isActivate(false);

      preferStyles.forEach((element, index) => {
        element === type ? preferStyles.splice(index, 1) : null;
      });
    } else {
      isActivate(true);

      const newPreferStyle = [type, ...preferStyles];
      setPreferStyles(newPreferStyle);
    }
  };

  return (
    <S.StyleButtonLayout $activate={activate} type="button" onClick={styleResult}>
      {activate ? <IcCheckboxBlue /> : <IcCheckboxGrey />}
      {type}
    </S.StyleButtonLayout>
  );
};

const S = {
  StyleButtonLayout: styled.button<{ $activate: boolean }>`
    display: flex;
    gap: 0.8rem;
    align-items: center;

    width: 50%;

    color: ${({ $activate, theme }) => ($activate ? theme.colors.moddy_bk : theme.colors.moddy_gray50)};
    ${({ theme }) => theme.fonts.Headline04};
  `,
};

export default StyleButton;
