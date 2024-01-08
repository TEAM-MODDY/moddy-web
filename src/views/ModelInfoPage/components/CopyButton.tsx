import { styled } from 'styled-components';

import { IcCopy } from '../assets/icons';

const CopyButton = () => {
  return (
    <S.CopyBtnWrapper type="button">
      <IcCopy />
      <p>아이디 복사</p>
    </S.CopyBtnWrapper>
  );
};

const S = {
  CopyBtnWrapper: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    float: right;

    cursor: pointer;

    & > p {
      margin-left: 0.4rem;

      color: ${({ theme }) => theme.colors.moddy_blue};
      ${({ theme }) => theme.fonts.Caption03};
    }
  `,
};
export default CopyButton;
