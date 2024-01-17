import { useState } from 'react';
import { styled } from 'styled-components';

import { IcCheckBlue } from '@/views/@common/assets/icons';

interface InputProps {
  placeholderText: string;
  initialValue?: string;
  onChangeFn: (value: string) => void;
  maxLength?: number;
}

const LimitInput = ({ placeholderText, initialValue, onChangeFn, maxLength }: InputProps) => {
  const [text, setText] = useState(initialValue ? initialValue : '');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (maxLength && value.length > maxLength) {
      value = text.slice(0, maxLength);
    }
    setText(value);
    onChangeFn(value);
  };

  return (
    <S.InputLayout>
      <S.Input placeholder={placeholderText} value={text} onChange={handleInputChange} />
      {text !== '' && <IcCheckBlue />}
    </S.InputLayout>
  );
};

export default LimitInput;

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
