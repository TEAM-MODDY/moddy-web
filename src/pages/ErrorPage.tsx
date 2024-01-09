import styled from 'styled-components';

import ErrorButton from '@/views/ErrorPage/components/ErrorButton';
import ErrorText from '@/views/ErrorPage/components/ErrorText';
import imgHeejun from '@images/img__heejun.png';

const ErrorPage = () => {
  return (
    <S.ErrorPageLayout>
      <img src={imgHeejun} alt="에러페이지" />
      <ErrorText />
      <ErrorButton />
    </S.ErrorPageLayout>
  );
};

export default ErrorPage;

const S = {
  ErrorPageLayout: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;

    & > img {
      width: 13.2rem;
      height: 12.4rem;
    }
  `,
};
