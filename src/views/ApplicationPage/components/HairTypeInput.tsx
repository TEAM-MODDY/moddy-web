import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import shortDefault from '../../@common/assets/images/btn_hair1_default.png';
import shortSelected from '../../@common/assets/images/btn_hair1_selected.png';
import mediumDefault from '../../@common/assets/images/btn_hair2_default.png';
import mediumSelected from '../../@common/assets/images/btn_hair2_selected.png';
import longDefault from '../../@common/assets/images/btn_hair3_default.png';
import longSelected from '../../@common/assets/images/btn_hair3_selected.png';
import rapunzelDefault from '../../@common/assets/images/btn_hair4_default.png';
import rapunzelSelected from '../../@common/assets/images/btn_hair4_selected.png';
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
    let images;
    switch (type) {
      case SELECT_LENGTH[0]:
        images = [shortDefault, shortSelected];
        break;
      case SELECT_LENGTH[1]:
        images = [mediumDefault, mediumSelected];
        break;
      case SELECT_LENGTH[2]:
        images = [longDefault, longSelected];
        break;
      case SELECT_LENGTH[3]:
        images = [rapunzelDefault, rapunzelSelected];
        break;
      default:
        images = ['', ''];
    }
    setHairImg(images);

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
        <img src={isActive ? hairImg[1] : hairImg[0]} alt="hairImg" />
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
