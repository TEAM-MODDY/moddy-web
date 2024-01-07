import styled from 'styled-components';

import { IcCheckboxBlue, IcCheckboxGrey } from '../../@common/assets/icons';

interface AgreementItemProps {
  firstItem?: boolean;
  text: string;
  isChecked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}
const AgreementItem = ({ firstItem, text, isChecked, setChecked }: AgreementItemProps) => {
  return (
    <S.AgreementItemLayout onClick={() => setChecked(!isChecked)}>
      {isChecked ? <IcCheckboxBlue /> : <IcCheckboxGrey />}
      <S.AgreementParagraph $firstItem={firstItem} $isChecked={isChecked}>
        {text}
      </S.AgreementParagraph>
    </S.AgreementItemLayout>
  );
};

export default AgreementItem;

const S = {
  AgreementItemLayout: styled.div`
    display: flex;
    gap: 1.1rem;
    align-items: center;

    width: 100%;
  `,
  AgreementParagraph: styled.p<{ $firstItem: boolean | undefined; $isChecked: boolean }>`
    color: ${({ theme, $firstItem, $isChecked }) =>
      $isChecked ? theme.colors.moddy_bk : $firstItem ? theme.colors.moddy_bk : theme.colors.moddy_gray50};
    ${({ theme, $firstItem }) => ($firstItem ? theme.fonts.Body01 : theme.fonts.Body02)};
  `,
};
