import { useState } from 'react';
import styled from 'styled-components';

import { IcCheckBlue } from '../assets/icons';

interface InputProps {
  placeholderText: string;
}

const Input = ({ placeholderText }: InputProps) => {
  const [name, setName] = useState('');
  return (
    <S.InputLayout>
      <S.Input placeholder={placeholderText} value={name} onChange={(e) => setName(e.target.value)} />
      {name !== '' && <IcCheckBlue />}
    </S.InputLayout>
  );
};

export default Input;

const S = {
  InputLayout: styled.div`
    position: relative;

    width: 100%;

    & > svg {
      position: absolute;
      top: 0.9rem;
      right: 1.3rem;
    }
  `,
  Input: styled.input`
    width: 100%;
    padding: 1.2rem 1.6rem;
    border: 1.5px solid ${({ theme }) => theme.colors.moddy_gray20};
    border-radius: 8px;

    color: ${({ theme }) => theme.colors.moddy_bk};
    ${({ theme }) => theme.fonts.Body02};

    &::placeholder {
      color: ${({ theme }) => theme.colors.moddy_gray50};
    }

    &:focus {
      outline: 1.5px solid ${({ theme }) => theme.colors.moddy_blue};
    }

    &:focus + svg {
      display: none;
    }
  `,
};