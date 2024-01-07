import { useState } from 'react';
import styled from 'styled-components';

import { IcCheckboxBlue, IcCheckboxGrey } from '../../@common/assets/icons';

const MyQuitCheck = () => {
  const [isChecked, setChecked] = useState(false);
  return (
    <S.MyQuitCheckLayout type="button" onClick={() => setChecked(!isChecked)}>
      {isChecked ? <IcCheckboxBlue /> : <IcCheckboxGrey />}
      <S.MyQuitCheckParagraph>위 내용을 모두 숙지했으며 탈퇴에 동의합니다.</S.MyQuitCheckParagraph>
    </S.MyQuitCheckLayout>
  );
};

export default MyQuitCheck;

const S = {
  MyQuitCheckLayout: styled.button`
    display: flex;
    gap: 1.1rem;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;

    width: 100%;
    max-width: 43rem;
    margin-bottom: 11.5rem;
  `,
  MyQuitCheckParagraph: styled.p`
    color: ${({ theme }) => theme.colors.moddy_bk};
    ${({ theme }) => theme.fonts.Body01};
  `,
};
