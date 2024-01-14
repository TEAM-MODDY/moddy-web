import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { styled } from 'styled-components';

import { APPLY_STATUS } from '../constants/applyStatus';
import { DesignerResponse, ModelResponse } from '../hooks/type';

import { OfferCard, ApplicationCard } from './Card';

interface UserContentsProps {
  data: DesignerResponse | ModelResponse | undefined;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const ReceivedOffer = (props: UserContentsProps) => {
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
            <OfferCard
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
      {data && data.length > 4 && <div ref={ref}></div>}
    </S.ReceivedOfferLayout>
  );
};

const ReceivedApplication = (props: UserContentsProps) => {
  const { data, setPage } = props;
  const [ref, inView] = useInView();
  console.log(data);

  useEffect(() => {
    inView && setPage((prev) => prev + 1);
  }, [inView]);

  return (
    <S.ReceivedOfferLayout>
      <S.TitleSpan>도착한 지원서</S.TitleSpan>
      <S.ReceivedOfferBox>
        {data.hairModelApplications.map((application, index) => (
          <ApplicationCard
            key={index}
            applicationId={application.applicationId}
            name={application.name}
            age={application.age}
            imgUrl={application.imgUrl}
            gender={application.gender}
            preferHairStyles={application.preferHairStyles}
          />
        ))}
      </S.ReceivedOfferBox>
      {data && data.length > 4 && <div ref={ref}></div>}
    </S.ReceivedOfferLayout>
  );
};

export { ReceivedOffer, ReceivedApplication };

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
