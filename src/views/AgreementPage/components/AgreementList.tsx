import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import AgreementItem from './AgreementItem';

import { agreementState } from '@/recoil/atoms/signUpState';

interface AgreementListProps {
  isChecked: boolean[];
  setChecked: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const AgreementList = ({ isChecked, setChecked }: AgreementListProps) => {
  const [, setMarketingAgree] = useRecoilState(agreementState);

  const handleCheck = (idx: number) => {
    if (idx === 0) {
      setChecked(new Array(4).fill(!isChecked[0]));
      isChecked[3] ? setMarketingAgree(true) : setMarketingAgree(false);
    } else {
      if (idx === 3) {
        isChecked[idx] ? setMarketingAgree(true) : setMarketingAgree(false);
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
        link="https://moddy.notion.site/b6d316bce4f0476f812c2bff25ec6bf8?pvs=4"
      />
      <AgreementItem
        text="개인정보 수집 및 이용 동의"
        isChecked={isChecked[2]}
        onClickCheck={() => handleCheck(2)}
        link="https://moddy.notion.site/b5837d44058647eabc646492aa4a12a2?pvs=4"
      />
      <AgreementItem
        text="마케팅 정보 수신 동의 (선택)"
        isChecked={isChecked[3]}
        onClickCheck={() => handleCheck(3)}
        link="https://moddy.notion.site/7afa88127b754445b8eba475414b587a?pvs=4"
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
