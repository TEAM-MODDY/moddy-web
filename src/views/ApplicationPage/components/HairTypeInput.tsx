import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { SELECT_LENGTH } from '../constants/select';

import { hairStyleState } from '@/recoil/atoms/applicationState';

interface HairTypeInputProps {
  type: string;
}

const HairTypeInput = ({ type }: HairTypeInputProps) => {
  const [selectedStyle, setSelectedStyle] = useRecoilState(hairStyleState);
  const [hairImg, setHairImg] = useState<string[]>(['', '']);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    SELECT_LENGTH.forEach((item) => {
      if (item.LENGTH === type) setHairImg([item.IMAGES.DEFAULT, item.IMAGES.SELECTED]);
    });

    type === selectedStyle.length ? setIsActive(true) : setIsActive(false);
  }, [selectedStyle.length]);

  return (
    <S.HairTypeLayout htmlFor={type}>
      <S.HairTypeInput
        type="radio"
        id={type}
        name="hairType"
        onChange={() => {
          setSelectedStyle({ ...selectedStyle, length: type });
        }}
      />
      <S.HairTypeImg src={!isActive ? hairImg[0] : hairImg[1]} alt="hairImg" $isActive={isActive} />
    </S.HairTypeLayout>
  );
};

const S = {
  HairTypeLayout: styled.label`
    display: flex;
    align-items: center;

    width: fit-content;
    height: 100%;

    cursor: pointer;
  `,

  HairTypeInput: styled.input`
    display: none;
  `,

  HairTypeImg: styled.img<{ $isActive: boolean }>`
    width: 100%;
    max-height: 100%;
    border: ${({ $isActive, theme }) =>
      $isActive ? `1.25px solid ${theme.colors.moddy_blue}` : `1px solid ${theme.colors.moddy_gray20}`};
    border-radius: 8px;

    box-shadow: ${({ $isActive, theme }) => ($isActive ? theme.effects.shadow3 : 'none')};

    object-fit: contain;
  `,
};

export default HairTypeInput;
