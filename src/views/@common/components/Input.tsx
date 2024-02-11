import { useState } from 'react';
import { styled } from 'styled-components';

import { IcCheckBlue } from '../assets/icons';

import { REGEX } from '@/views/@common/utils/regex';

interface InputProps {
  placeholderText: string;
  regex?: RegExp;
  initialValue?: string;
  maxLength?: number;
  onlyNumber?: boolean;
  onChangeFn: (value: string) => void;
}

const Input = (props: InputProps) => {
  const {
    placeholderText,
    initialValue = '',
    maxLength,
    regex = REGEX.NOT_EMPTY,
    onlyNumber = false,
    onChangeFn,
  } = props;

  const [text, setText] = useState(initialValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // 최대 길이 제한이 있는 경우, 입력값을 해당 길이로 제한
    if (maxLength && value.length > maxLength) {
      value = value.slice(0, maxLength);
    }

    // 숫자만 입력해야 할 경우, 숫자가 아닌 문자 입력 방지
    if (onlyNumber) {
      value = value.replace(REGEX.ONLY_NUMBER, '');
    }

    setText(value);
    onChangeFn(value);
  };

  return (
    <S.InputLayout>
      <S.Input
        maxLength={maxLength}
        placeholder={placeholderText}
        value={text}
        onChange={handleInputChange}
        type={onlyNumber ? 'tel' : 'text'}
      />
      {regex.test(text) && <IcCheckBlue />}
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
