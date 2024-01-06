import { useState } from 'react';
import styled from 'styled-components';

const TextArea = () => {
  const [textLength, setTextLength] = useState(0);
  const PLACE_HOLDER = '자신에 대한 소개를 입력해주세요\n예시) 경력, 자격증, 강점 등';
  return (
    <S.TextAreaLayout>
      <S.TextArea placeholder={PLACE_HOLDER} onChange={(e) => setTextLength(e.target.value.length)} maxLength={200} />
      <S.TextAreaSpan>
        <S.TextAreaCountSpan>{textLength}</S.TextAreaCountSpan> / 200
      </S.TextAreaSpan>
    </S.TextAreaLayout>
  );
};

export default TextArea;

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
  TextAreaCountSpan: styled.span`
    color: ${({ theme }) => theme.colors.moddy_blue2};
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
