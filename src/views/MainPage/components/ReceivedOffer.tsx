import { styled } from 'styled-components';

import { APPLY_TYPE } from '../../@common/utils/constants';

import ApplicationCard from './ApplicationCard';

interface ReceivedOfferProps {
  applyType: number;
}

const ReceivedOffer = (props: ReceivedOfferProps) => {
  const { applyType } = props;

  return (
    <S.ReceivedOfferLayout>
      <S.TitleSpan>도착한 제안서</S.TitleSpan>
      {applyType === APPLY_TYPE.RECEIVED ? (
        <S.ReceivedOfferBox>
          <ApplicationCard />
          <ApplicationCard />
          <ApplicationCard />
        </S.ReceivedOfferBox>
      ) : (
        <S.ReceivedOfferEmptyBox>
          <S.HelperTextSpan>
            {applyType === APPLY_TYPE.NOT_YET
              ? '지금 바로 헤어모델에 지원해 보세요 :)'
              : '첫 제안서를 기다리고 있어요 :)'}
          </S.HelperTextSpan>
        </S.ReceivedOfferEmptyBox>
      )}
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
