import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { AGREEMENT_LINK, AGREEMENT_TOTAL_COUNT } from '../constants/AGREEMENT_LINK';

import AgreementItem from './AgreementItem';

import { agreementState } from '@/recoil/atoms/agreementState';
import { marketingState } from '@/recoil/atoms/signUpState';

const AgreementList = () => {
  const [, setMarketingAgree] = useRecoilState(marketingState);
  const [isChecked, setChecked] = useRecoilState<boolean[]>(agreementState);

  const handleCheck = (idx: number) => {
    if (idx === 0) {
      setChecked(new Array(AGREEMENT_TOTAL_COUNT).fill(!isChecked[0]));
      isChecked[3] ? setMarketingAgree(false) : setMarketingAgree(true);
    } else {
      if (idx === 3) {
        isChecked[idx] ? setMarketingAgree(false) : setMarketingAgree(true);
      }
      const tempCheckedArray = [...isChecked];
      tempCheckedArray[idx] = !isChecked[idx];
      setChecked(tempCheckedArray);
    }
  };
  return (
    <S.AgreementListLayout>
      <AgreementItem
        firstItem
        text="모든 약관에 동의합니다"
        isChecked={isChecked[0]}
        onClickCheck={() => {
          handleCheck(0);
        }}
      />
      <S.AgreementLine />
      <AgreementItem
        text="모디 서비스 이용약관 동의"
        isChecked={isChecked[1]}
        onClickCheck={() => handleCheck(1)}
        link={AGREEMENT_LINK.useService}
      />
      <AgreementItem
        text="개인정보 수집 및 이용 동의"
        isChecked={isChecked[2]}
        onClickCheck={() => handleCheck(2)}
        link={AGREEMENT_LINK.personalInfo}
      />
      <AgreementItem
        text="마케팅 정보 수신 동의 (선택)"
        isChecked={isChecked[3]}
        onClickCheck={() => handleCheck(3)}
        link={AGREEMENT_LINK.marketing}
      />
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
