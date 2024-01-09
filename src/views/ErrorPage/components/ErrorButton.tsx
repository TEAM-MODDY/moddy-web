import styled from 'styled-components';

const ErrorButton = () => {
  return <S.ErrorButtonLayout type="button">새로고침</S.ErrorButtonLayout>;
};

export default ErrorButton;

const S = {
  ErrorButtonLayout: styled.button`
    padding: 1.1rem 3.4rem;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.moddy_blue};

    color: ${({ theme }) => theme.colors.moddy_wt};
    ${({ theme }) => theme.fonts.Body01};
  `,
};
