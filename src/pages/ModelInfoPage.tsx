/* eslint-disable import/no-named-as-default */
import styled from 'styled-components';

const ModelInfoPage = () => {
  return (
    <div>
      <S.ImageBox></S.ImageBox>
    </div>
  );
};

const S = {
  ImageBox: styled.div`
    width: 34.4rem;
    height: 34.4rem;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.colors.kakao};
  `,
};

export default ModelInfoPage;
