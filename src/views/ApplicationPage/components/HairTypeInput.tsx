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

import { hairStyleState } from '@/recoil/atoms/applicationState';

interface HairTypeInputProps {
  imgIdx: number;
  type: string;
}

const HairTypeInput = ({ imgIdx, type }: HairTypeInputProps) => {
  const [selectedStyle, setSelectedStyle] = useRecoilState(hairStyleState);
  const { length, lengthStatus } = selectedStyle;
  const [hairImg, setHairImg] = useState<string[]>(['', '']);

  useEffect(() => {
    let images;

    switch (imgIdx) {
      case 0:
        images = [shortDefault, shortSelected];
        break;
      case 1:
        images = [mediumDefault, mediumSelected];
        break;
      case 2:
        images = [longDefault, longSelected];
        break;
      case 3:
        images = [rapunzelDefault, rapunzelSelected];
        break;
      default:
        images = ['', ''];
    }
    setHairImg(images);

    const tempLengthState = [...lengthStatus];

    type === length ? (tempLengthState[imgIdx] = true) : (tempLengthState[imgIdx] = false);
    setSelectedStyle({ ...selectedStyle, lengthStatus: tempLengthState });
  }, []);

  const onlySelected = () => {
    const tempLengthState = [...lengthStatus];
    tempLengthState.forEach((_, index) =>
      index === imgIdx ? (tempLengthState[index] = true) : (tempLengthState[index] = false),
    );

    setSelectedStyle({ ...selectedStyle, lengthStatus: tempLengthState, length: type });
  };

  return (
    <>
      <S.HairTypeInput type="radio" id={type} name="hairtype" onChange={onlySelected} />
      <S.HairType htmlFor={type}>
        <img src={lengthStatus[imgIdx] ? hairImg[1] : hairImg[0]} alt="hairImg" />
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
