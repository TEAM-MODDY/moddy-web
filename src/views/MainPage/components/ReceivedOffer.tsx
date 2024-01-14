import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { styled } from 'styled-components';

import { APPLY_STATUS } from '../constants/applyStatus';
import { ModelResponse } from '../hooks/type';

import ApplicationCard from './ApplicationCard';

interface ReceivedOfferProp {
  data: ModelResponse;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
const ReceivedOffer = (props: ReceivedOfferProp) => {
  const { data, setPage } = props;
  const [ref, inView] = useInView();

  useEffect(() => {
    inView && setPage((prev) => prev + 1);
  }, [inView]);

  return (
    <S.ReceivedOfferLayout>
      <S.TitleSpan>도착한 제안서</S.TitleSpan>
      {data?.status === APPLY_STATUS.RECEIVED ? (
        <S.ReceivedOfferBox>
          {data.offers.map((offer, index) => (
            <ApplicationCard
              key={index}
              offerId={offer.offerId}
              name={offer.name}
              shopName={offer.shopName}
              imgUrl={offer.imgUrl}
              isClicked={offer.isClicked}
              conditions={offer.conditions}
            />
          ))}
        </S.ReceivedOfferBox>
      ) : (
        <S.ReceivedOfferEmptyBox>
          <S.HelperTextSpan>
            {data?.status === APPLY_STATUS.NOTHING
              ? '지금 바로 헤어모델에 지원해 보세요 :)'
              : '첫 제안서를 기다리고 있어요 :)'}
          </S.HelperTextSpan>
        </S.ReceivedOfferEmptyBox>
      )}
      <div ref={ref}></div>
    </S.ReceivedOfferLayout>
  );
};
export default ReceivedOffer;

const ReceivedOfferLayout = styled.div`
  padding: 0 1.6rem 4rem;
`;

const TitleSpan = styled.span`
  color: ${({ theme }) => theme.colors.moddy_gray50};
  ${({ theme }) => theme.fonts.Body01};
`;

const ReceivedOfferEmptyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 20rem;
  margin-top: 1.2rem;
  border: 1px dashed ${({ theme }) => theme.colors.moddy_gray20};
  border-radius: 10px;

  background: ${({ theme }) => theme.colors.moddy_blue4};
`;

const HelperTextSpan = styled.span`
  color: ${({ theme }) => theme.colors.moddy_gray50};
  ${({ theme }) => theme.fonts.Headline04};
`;

const ReceivedOfferBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;

  width: 100%;
  margin-top: 1.2rem;
`;
const S = {
  ReceivedOfferLayout,
  ReceivedOfferEmptyBox,
  TitleSpan,
  HelperTextSpan,
  ReceivedOfferBox,
};
