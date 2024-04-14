import styled from 'styled-components';
import { IcEssential } from '../assets/icons';

interface TitleFieldProp {
  text: string;
  isEssential: boolean;
}

const TitleField = (props: TitleFieldProp) => {
  const { text, isEssential } = props;

  return (
    <S.FieldBox>
      <S.FieldSpan>{text}</S.FieldSpan>
      {isEssential ? <IcEssential /> : null}
    </S.FieldBox>
  );
};

const S = {
  FieldBox: styled.div`
    display: flex;

    margin-top: 3.6rem;
    margin-bottom: 1.1rem;

    &:first-child {
      margin-top: 0;
    }
  `,

  FieldSpan: styled.span`
    color: ${({ theme }) => theme.colors.moddy_bk};
    ${({ theme }) => theme.fonts.Headline01};
  `,
};
export default TitleField;
