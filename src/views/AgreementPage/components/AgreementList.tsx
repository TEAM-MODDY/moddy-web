import { useState } from 'react';
import styled from 'styled-components';

import AgreementItem from './AgreementItem';

const AgreementList = () => {
  const [isChecked, setChecked] = useState(new Array(4).fill(false));

  const handleCheck = (idx: number) => {
    const tempCheckedArray = [...isChecked];
    tempCheckedArray[idx] = !isChecked[idx];
    setChecked(tempCheckedArray);
  };
  return (
    <S.AgreementListLayout>
      <AgreementItem
        firstItem
        text="모든 약관에 동의합니다"
        isChecked={isChecked[0]}
        onClickCheck={() => {
          setChecked(new Array(4).fill(!isChecked[0]));
        }}
      />
      <S.AgreementLine />
      <AgreementItem text="모디 서비스 이용약관 동의" isChecked={isChecked[1]} onClickCheck={() => handleCheck(1)} />
      <AgreementItem text="개인정보 수집 및 이용 동의" isChecked={isChecked[2]} onClickCheck={() => handleCheck(2)} />
      <AgreementItem text="마케팅 정보 수신 동의 (선택)" isChecked={isChecked[3]} onClickCheck={() => handleCheck(3)} />
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
