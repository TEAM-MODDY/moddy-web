import styled from 'styled-components';

const Input = () => {
  const PLACE_HOLDER = '이름을 입력해주세요';
  return <S.InputLayout placeholder={PLACE_HOLDER} />;
};

export default Input;

const S = {
  InputLayout: styled.input`
    width: 100%;
    padding: 1.2rem 1.6rem;
    border: 1.5px solid ${({ theme }) => theme.colors.moddy_gray20};
    border-radius: 8px;

    ${({ theme }) => theme.fonts.Body02};

    color: ${({ theme }) => theme.colors.moddy_bk};

    &::placeholder {
      color: ${({ theme }) => theme.colors.moddy_gray50};
    }

    &:focus {
      outline: 1.5px solid ${({ theme }) => theme.colors.moddy_blue};
    }
  `,
};
