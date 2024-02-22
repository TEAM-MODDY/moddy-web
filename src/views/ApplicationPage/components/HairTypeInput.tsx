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
    <>
      <S.HairTypeInput
        type="radio"
        id={type}
        name="hairtype"
        onChange={() => {
          setSelectedStyle({ ...selectedStyle, length: type });
        }}
      />
      <S.HairType htmlFor={type}>
        <img src={!isActive ? hairImg[0] : hairImg[1]} alt="hairImg" />
      </S.HairType>
    </>
  );
};

const S = {
  HairTypeInput: styled.input`
    display: none;

    width: 100%;

    &:checked + label {
      box-shadow: ${({ theme }) => theme.effects.shadow3};
    }
  `,

  HairType: styled.label`
    height: 100%;
    border-radius: 8px;

    cursor: pointer;

    & > img {
      width: 100%;
      height: 100%;

      object-fit: contain;
    }
  `,
};

export default HairTypeInput;
