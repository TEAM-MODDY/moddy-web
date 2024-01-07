import { useState } from 'react';
import styled from 'styled-components';

import AgreementItem from './AgreementItem';

const AgreementList = () => {
  const [isCheckedAll, setCheckedAll] = useState(false);

  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);

  return (
    <S.AgreementListLayout>
      <AgreementItem firstItem text="모든 약관에 동의합니다" isChecked={isCheckedAll} setChecked={setCheckedAll} />
      <S.AgreementLine />
      <AgreementItem text="모디 서비스 이용약관 동의" isChecked={isChecked1} setChecked={setChecked1} />
      <AgreementItem text="개인정보 수집 및 이용 동의" isChecked={isChecked2} setChecked={setChecked2} />
      <AgreementItem text="마케팅 정보 수신 동의 (선택)" isChecked={isChecked3} setChecked={setChecked3} />
    </S.AgreementListLayout>
  );
};

export default AgreementList;

const S = {
  AgreementListLayout: styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.3rem;

    width: 100%;
    padding: 8.3rem 1.6rem;
  `,
  AgreementLine: styled.div`
    width: 100%;
    height: 0.1rem;

    background-color: ${({ theme }) => theme.colors.moddy_gray10};
  `,
};
