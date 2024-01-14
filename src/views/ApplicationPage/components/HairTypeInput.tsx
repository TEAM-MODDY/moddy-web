import { styled } from 'styled-components';

import shortDefault from '../../@common/assets/images/btn_hair1_default.png';
import shortSelected from '../../@common/assets/images/btn_hair1_selected.png';
import mediumDefault from '../../@common/assets/images/btn_hair2_default.png';
import mediumSelected from '../../@common/assets/images/btn_hair2_selected.png';
import longDefault from '../../@common/assets/images/btn_hair3_default.png';
import longSelected from '../../@common/assets/images/btn_hair3_selected.png';
import rapunzelDefault from '../../@common/assets/images/btn_hair4_default.png';
import rapunzelSelected from '../../@common/assets/images/btn_hair4_selected.png';

interface HairTypeInputProps {
  lengthState: boolean[];
  setLengthState: React.Dispatch<React.SetStateAction<boolean[]>>;
  imgIdx: number;
  setHairLengthFn: React.Dispatch<React.SetStateAction<string>>;
}

const HairTypeInput = ({ lengthState, setLengthState, imgIdx, setHairLengthFn }: HairTypeInputProps) => {
  const onlySelected = () => {
    setHairLengthFn(hairType);

    const tempLengthState = [...lengthState];
    tempLengthState.forEach((_, index) => (tempLengthState[index] = index === imgIdx ? true : false));

    setLengthState(tempLengthState);
  };

  let hairType = '';
  let hairImgDefault = '';
  let hairImgChecked = '';

  switch (imgIdx) {
    case 0:
      hairType = '숏';
      hairImgDefault = shortDefault;
      hairImgChecked = shortSelected;
      break;
    case 1:
      hairType = '단발';
      hairImgDefault = mediumDefault;
      hairImgChecked = mediumSelected;
      break;
    case 2:
      hairType = '어깨 아래';
      hairImgDefault = longDefault;
      hairImgChecked = longSelected;
      break;
    case 3:
      hairType = '허리 아래';
      hairImgDefault = rapunzelDefault;
      hairImgChecked = rapunzelSelected;
      break;
  }

  return (
    <>
      <S.HairTypeInput type="radio" id={hairType} name="hairtype" onChange={onlySelected} />
      <S.HairType htmlFor={hairType}>
        <img src={lengthState[imgIdx] ? hairImgChecked : hairImgDefault} alt="hairImg" />
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
