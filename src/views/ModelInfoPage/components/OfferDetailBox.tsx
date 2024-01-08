import { styled } from 'styled-components';

interface OfferDetailBoxProps {
  hairServiceTerm: string;
  hairService: string;
}

const OfferDetailBox = ({ hairServiceTerm, hairService }: OfferDetailBoxProps) => {
  return (
    <S.OfferDetailWrapperBox>
      <h3>{hairServiceTerm}</h3>
      <h4>{hairService}</h4>
    </S.OfferDetailWrapperBox>
  );
};

const S = {
  OfferDetailWrapperBox: styled.div`
    display: flex;
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }

    & > h3 {
      color: ${({ theme }) => theme.colors.moddy_gray50};

      ${({ theme }) => theme.fonts.Body02};
    }

    & > h4 {
      color: ${({ theme }) => theme.colors.moddy_bk};

      ${({ theme }) => theme.fonts.Body02};
    }
  `,
};

export default OfferDetailBox;
