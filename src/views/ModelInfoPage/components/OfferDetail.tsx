import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface OfferDetailProps {
  children: ReactNode;
  content: number | string | Array<string>;
}

const OfferDetail = ({ children, content }: OfferDetailProps) => {
  return (
    <>
      <S.ContentBox>
        <h2>{children}</h2>
        <p>{content}</p>
      </S.ContentBox>
    </>
  );
};

const S = {
  ContentBox: styled.div`
    display: flex;
    justify-content: space-between;
    list-style: none;

    width: 34.4rem;
    margin: 0.6rem 0;

    & > h2 {
      color: ${({ theme }) => theme.colors.moddy_gray50};

      ${({ theme }) => theme.fonts.Body01};
    }

    & > p {
      color: ${({ theme }) => theme.colors.moddy_bk};

      ${({ theme }) => theme.fonts.Body02};
    }
  `,
};

export default OfferDetail;
