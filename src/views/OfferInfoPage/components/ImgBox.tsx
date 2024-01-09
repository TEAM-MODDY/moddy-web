import { styled } from 'styled-components';

import ImgShining from '../assets/images/img_shining.png';

const ImgBox = () => {
  return (
    <S.ImgBox>
      <img src={ImgShining} alt="제안 성사 이미지" />
    </S.ImgBox>
  );
};

export default ImgBox;

const S = {
  ImgBox: styled.div`
    padding: 0 8rem;

    & > img {
      width: 100%;
    }
  `,
};
