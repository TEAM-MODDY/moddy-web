import { styled } from 'styled-components';

import { IcEssential } from '../../@common/assets/icons';

interface FieldProp {
  name: string;
  isEssential: boolean;
}
const Field = (props: FieldProp) => {
  const { name, isEssential } = props;

  return (
    <FieldBox>
      <FieldSpan>{name}</FieldSpan>
      {isEssential ? <IcEssential /> : null}
    </FieldBox>
  );
};

export default Field;

const FieldBox = styled.div`
  display: flex;

  margin-top: 3.6rem;
  margin-bottom: 1.1rem;

  &:first-child {
    margin-top: 0;
  }
`;

const FieldSpan = styled.span`
  color: ${({ theme }) => theme.colors.moddy_bk};
  ${({ theme }) => theme.fonts.Headline01};
`;
