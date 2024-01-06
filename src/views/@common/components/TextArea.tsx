import styled from 'styled-components';

const TextArea = () => {
  const PLACE_HOLDER = '자신에 대한 소개를 입력해주세요\n예시) 경력, 자격증, 강점 등';
  return (
    <S.TextAreaLayout>
      <S.TextArea placeholder={PLACE_HOLDER} />
      <S.TextAreaSpan>0 / 200</S.TextAreaSpan>
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
    ${({ theme }) => theme.fonts.Body04};

    color: ${({ theme }) => theme.colors.moddy_gray20};
  `,
  TextArea: styled.textarea`
    width: 100%;
    height: 15rem;
    padding: 1.2rem 1.6rem;
    border: 1.5px solid ${({ theme }) => theme.colors.moddy_gray20};
    border-radius: 8px;
    resize: none;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.moddy_gray20};
      ${({ theme }) => theme.fonts.Body02};
    }
  `,
};
