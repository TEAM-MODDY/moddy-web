import { useState } from 'react';
import { styled } from 'styled-components';

interface TextArea200Props {
  placeholderText: string;
  initialValue?: string;
  onChangeFn: (value: string) => void;
}

const TextArea200 = ({ placeholderText, initialValue, onChangeFn }: TextArea200Props) => {
  const MAX_LENGTH = 200;

  const [textLength, setTextLength] = useState(initialValue ? initialValue.length : 0);
  const [name, setName] = useState(initialValue ? initialValue : '');

  const textChangeFn = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value.length > MAX_LENGTH ? e.target.value.slice(0, MAX_LENGTH) : e.target.value;

    setTextLength(text.length);
    setName(text);
    onChangeFn(text);
  };

  return (
    <S.TextAreaLayout>
      <S.TextArea
        placeholder={placeholderText}
        defaultValue={name}
        onChange={(e) => {
          textChangeFn(e);
        }}
        maxLength={200}
      />
      <S.TextAreaSpan>
        <S.TextAreaCountSpan $isZero={textLength === 0}>{textLength}</S.TextAreaCountSpan> / 200
      </S.TextAreaSpan>
    </S.TextAreaLayout>
  );
};

export default TextArea200;

const S = {
  TextAreaLayout: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    align-items: end;

    width: 100%;
  `,
  TextAreaSpan: styled.span`
    color: ${({ theme }) => theme.colors.moddy_gray20};
    ${({ theme }) => theme.fonts.Body04};
  `,
  TextAreaCountSpan: styled.span<{ $isZero: boolean }>`
    color: ${({ theme, $isZero }) => ($isZero ? theme.colors.moddy_gray20 : theme.colors.moddy_blue2)};
    ${({ theme }) => theme.fonts.Body04};
  `,
  TextArea: styled.textarea`
    width: 100%;
    height: 15rem;
    padding: 1.2rem 1.6rem;
    border: 1.5px solid ${({ theme }) => theme.colors.moddy_gray20};
    border-radius: 8px;
    resize: none;

    color: ${({ theme }) => theme.colors.moddy_bk};

    ${({ theme }) => theme.fonts.Body02};

    &:focus {
      outline: none;

      border: 1.5px solid ${({ theme }) => theme.colors.moddy_blue};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.moddy_gray20};

      ${({ theme }) => theme.fonts.Body02};
    }
  `,
};
