import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { styled } from 'styled-components';

import { APPLY_STATUS } from '../constants/applyStatus';
import { DesignerResponse, ModelResponse } from '../hooks/type';

import { OfferCard, ApplicationCard } from './Card';

interface DesignerContentsProps {
  data: DesignerResponse;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
interface ModelContentsProps {
  data: ModelResponse;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

interface UserContentsProps {
  title: string;
  children: React.ReactNode;
  ref: React.LegacyRef<HTMLDivElement>;
  dataLength: number;
  total: number;
}

interface UserContentsProps {
  title: string;
  children: React.ReactNode;
  dataLength: number;
  total: number;
}

const UserContents = React.forwardRef<HTMLDivElement, UserContentsProps>(
  ({ title, children, dataLength, total }, ref) => (
    <S.UserContentsLayout>
      <S.TitleSpan>{title}</S.TitleSpan>
      <S.ContentsBox>{children}</S.ContentsBox>
      {dataLength < total && <div ref={ref}></div>}
    </S.UserContentsLayout>
  ),
);
UserContents.displayName = 'UserContents';

const usePagination = (setPage: React.Dispatch<React.SetStateAction<number>>) => {
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) setPage((prev) => prev + 1);
  }, [inView, setPage]);

  return ref;
};

const ModelContents = ({ data, setPage }: ModelContentsProps) => {
  const ref = usePagination(setPage);

  const renderOffers = () => data.offers.map((offer, index) => <OfferCard key={index} {...offer} />);

  const renderEmptyState = () => (
    <S.EmptyBox>
      <S.HelperTextSpan>
        {data.status === APPLY_STATUS.NOTHING ? (
          '지금 바로 헤어모델에 지원해 보세요 :)'
        ) : (
          <S.LineHeightSpan>
            조금만 기다리면 <br /> 디자이너의 모델 제안을 문자로 보내드릴게요 :)
          </S.LineHeightSpan>
        )}
      </S.HelperTextSpan>
    </S.EmptyBox>
  );

  return (
    <UserContents title="도착한 제안서" ref={ref} dataLength={data.offers.length} total={data.total}>
      {data.status === APPLY_STATUS.RECEIVED ? renderOffers() : renderEmptyState()}
    </UserContents>
  );
};

const DesignerContents = ({ data, setPage }: DesignerContentsProps) => {
  const ref = usePagination(setPage);

  const renderApplications = () =>
    data.hairModelApplications.map((application, index) => <ApplicationCard key={index} {...application} />);

  return (
    <UserContents title="도착한 지원서" ref={ref} dataLength={data.hairModelApplications.length} total={data.total}>
      {renderApplications()}
    </UserContents>
  );
};

export { ModelContents, DesignerContents };

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

  width: 100%;
  height: 20rem;
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
