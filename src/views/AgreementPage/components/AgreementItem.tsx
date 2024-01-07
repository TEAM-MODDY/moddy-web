import styled from 'styled-components';

import { IcCheckboxBlue, IcCheckboxGrey, IcRightGrey } from '../../@common/assets/icons';

interface AgreementItemProps {
  firstItem?: boolean;
  text: string;
  isChecked: boolean;
  onClickCheck: () => void;
  link?: string;
}
const AgreementItem = ({ firstItem, text, isChecked, onClickCheck, link }: AgreementItemProps) => {
  return (
    <S.AgreementItemLayout>
      <button onClick={onClickCheck}>{isChecked ? <IcCheckboxBlue /> : <IcCheckboxGrey />}</button>
      <S.AgreementParagraph $firstItem={firstItem} $isChecked={isChecked}>
        {text}
      </S.AgreementParagraph>
      {!firstItem && (
        <S.AgreementIcon href={link}>
          <IcRightGrey />
        </S.AgreementIcon>
      )}
    </S.AgreementItemLayout>
  );
};

export default AgreementItem;

const S = {
  AgreementItemLayout: styled.div`
    display: flex;
    gap: 1.1rem;
    align-items: center;
    position: relative;

    width: 100%;
  `,
  AgreementParagraph: styled.p<{ $firstItem: boolean | undefined; $isChecked: boolean }>`
    color: ${({ theme, $firstItem, $isChecked }) =>
      $isChecked ? theme.colors.moddy_bk : $firstItem ? theme.colors.moddy_bk : theme.colors.moddy_gray50};
    ${({ theme, $firstItem }) => ($firstItem ? theme.fonts.Body01 : theme.fonts.Body02)};
  `,
  AgreementIcon: styled.a`
    position: absolute;
    right: 0;
  `,
};
