import { useState } from 'react';
import { styled } from 'styled-components';

import shortDefault from '../../@common/assets/images/btn_hair1_default.png';
import shortSelected from '../../@common/assets/images/btn_hair1_selected.png';
import mediumDefault from '../../@common/assets/images/btn_hair2_default.png';
import mediumSelected from '../../@common/assets/images/btn_hair2_selected.png';
import longDefault from '../../@common/assets/images/btn_hair3_default.png';
import longSelected from '../../@common/assets/images/btn_hair3_selected.png';
import rapunzelDefault from '../../@common/assets/images/btn_hair4_default.png';
import rapunzelSelected from '../../@common/assets/images/btn_hair4_selected.png';

interface HairTypeImgProps {
  setHairTypeFn: React.Dispatch<React.SetStateAction<string>>;
  hairType: string;
}

const HairTypeImg = ({ setHairTypeFn, hairType }: HairTypeImgProps) => {
  const [isTypeSelected, setIsTypeSelected] = useState(false);
  let imgSrc = '';

  switch (hairType) {
    case '숏':
      isTypeSelected ? (imgSrc = shortSelected) : (imgSrc = shortDefault);
      break;
    case '단발':
      isTypeSelected ? (imgSrc = mediumSelected) : (imgSrc = mediumDefault);
      break;
    case '어깨 아래':
      isTypeSelected ? (imgSrc = longSelected) : (imgSrc = longDefault);
      break;
    case '허리 아래':
      isTypeSelected ? (imgSrc = rapunzelSelected) : (imgSrc = rapunzelDefault);
      break;
  }

  return (
    <>
      <S.HairTypeInput
        type="radio"
        id={hairType}
        name="hairtype"
        onClick={(e) => {
          setHairTypeFn(hairType);
          isTypeSelected ? setIsTypeSelected(false) : setIsTypeSelected(true);
        }}
      />
      <S.HairType htmlFor={hairType}>
        <img src={imgSrc} alt={hairType} />
      </S.HairType>
    </>
  );
};

const S = {
  HairTypeInput: styled.input`
    appearance: auto;

    width: 100%;

    &:checked + label {
      box-shadow: ${({ theme }) => theme.effects.shadow3};
    }
  `,

  HairType: styled.label`
    width: 100%;
    height: 100%;
    border-radius: 8px;

    cursor: pointer;

    & > img {
      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  `,
};

export default HairTypeImg;
