import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { IcCheckboxBlue, IcCheckboxGrey } from '../../@common/assets/icons';

import { hairStyleState } from '@/recoil/atoms/applicationState';

interface StyleButtonProps {
  type: string;
  isSelected: boolean;
}

const StyleButton = ({ type, isSelected }: StyleButtonProps) => {
  const [selectedStyle, setSelectedStyle] = useRecoilState(hairStyleState);
  const { preference } = selectedStyle;
  const [activate, setActivate] = useState(isSelected);

  const styleResult = () => {
    if (activate) {
      setActivate(false);

      const tempPreference = [...preference];

      tempPreference.forEach((element, index) => {
        if (element === type) {
          tempPreference.splice(index, 1);
        }
      });
      setSelectedStyle({ ...selectedStyle, preference: tempPreference });
    } else {
      setActivate(true);

      const tempPreference = [type, ...preference];
      setSelectedStyle({ ...selectedStyle, preference: tempPreference });
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
