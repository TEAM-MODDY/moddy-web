import styled from 'styled-components';

import AgreementItem from './AgreementItem';

const AgreementList = () => {
  return (
    <S.AgreementListLayout>
      <AgreementItem />
      <S.AgreementLine />
      <AgreementItem />
      <AgreementItem />
      <AgreementItem />
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
