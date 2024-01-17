import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { IcCheckboxBlue, IcCheckboxGrey } from '../../@common/assets/icons';

import { hairStyleState } from '@/recoil/atoms/applicationState';

interface StyleButtonProps {
  type: string;
  title: string;
  isSelected: boolean;
}

const StyleButton = ({ type, title, isSelected }: StyleButtonProps) => {
  const [selectedStyle, setSelectedStyle] = useRecoilState(hairStyleState);
  const { preference, preferenceTitle } = selectedStyle;
  const [activate, setActivate] = useState(isSelected);

  useEffect(() => {
    preference.forEach((element) => {
      element === type ? setActivate(true) : setActivate(false);
    });
  }, []);

  const styleResult = () => {
    if (activate) {
      setActivate(false);

      const tempPreference = [...preference];
      const tempPreferenceTitle = [...preferenceTitle];

      tempPreference.forEach((element, index) => {
        if (element === type) {
          tempPreference.splice(index, 1);
          tempPreferenceTitle.splice(index, 1);
        }
      });
      setSelectedStyle({ ...selectedStyle, preference: tempPreference, preferenceTitle: tempPreferenceTitle });
    } else {
      setActivate(true);

      const tempPreference = [type, ...preference];
      const tempPreferenceTitle = [title, ...preferenceTitle];
      setSelectedStyle({ ...selectedStyle, preference: tempPreference, preferenceTitle: tempPreferenceTitle });
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
