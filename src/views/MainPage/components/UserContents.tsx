import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { styled } from 'styled-components';

import { APPLY_STATUS } from '../constants/applyStatus';
import { DesignerResponse, ModelResponse } from '../hooks/type';

import { OfferCard, ApplicationCard } from './Card';

interface UserContentsProps {
  data: DesignerResponse | ModelResponse;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const ReceivedOffer = (props: UserContentsProps) => {
  const { data, setPage } = props;
  const [ref, inView] = useInView();

  useEffect(() => {
    inView && setPage((prev) => prev + 1);
  }, [inView]);

  return (
    <S.UserContentsLayout>
      <S.TitleSpan>도착한 제안서</S.TitleSpan>
      {'status' in data && data.status === APPLY_STATUS.RECEIVED ? (
        <S.ContentsBox>
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
        </S.ContentsBox>
      ) : (
        <S.EmptyBox>
          <S.HelperTextSpan>
            {'status' in data && data.status === APPLY_STATUS.NOTHING ? (
              '지금 바로 헤어모델에 지원해 보세요 :)'
            ) : (
              <S.LineHeightSpan>
                조금만 기다리면 <br /> 디자이너의 모델 제안을 문자로 보내드릴게요 :&#41;
              </S.LineHeightSpan>
            )}
          </S.HelperTextSpan>
        </S.EmptyBox>
      )}
      {'offers' in data && data.offers.length < data.total && <div ref={ref}></div>}
    </S.UserContentsLayout>
  );
};

const ReceivedApplication = (props: UserContentsProps) => {
  const { data, setPage } = props;
  const [ref, inView] = useInView();

  useEffect(() => {
    inView && setPage((prev) => prev + 1);
  }, [inView]);

  return (
    <S.UserContentsLayout>
      <S.TitleSpan>도착한 지원서</S.TitleSpan>
      <S.ContentsBox>
        {'hairModelApplications' in data &&
          data.hairModelApplications.map((application, index) => (
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
      </S.ContentsBox>
      {'hairModelApplications' in data && data.hairModelApplications.length < data.total && <div ref={ref}></div>}
    </S.UserContentsLayout>
  );
};

export { ReceivedOffer, ReceivedApplication };

const UserContentsLayout = styled.div`
  padding: 0 1.6rem 4rem;
`;

const TitleSpan = styled.span`
  color: ${({ theme }) => theme.colors.moddy_gray50};
  ${({ theme }) => theme.fonts.Body01};
`;

const EmptyBox = styled.div`
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
  text-align: center;
  ${({ theme }) => theme.fonts.Headline04};
`;

const LineHeightSpan = styled(HelperTextSpan)`
  line-height: 1.4;
`;

const ContentsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;

  width: 100%;
  margin-top: 1.2rem;
`;
const S = {
  UserContentsLayout,
  EmptyBox,
  TitleSpan,
  HelperTextSpan,
  ContentsBox,
  LineHeightSpan,
};
