import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { ImgNew } from '../assets/images';

import { gaEvent } from '@/views/@common/utils/ga';
interface CardProps {
  id: number;
  navigateTo: string;
  isExpired?: boolean;
  children: React.ReactNode;
}

const CardMain = ({ navigateTo, id, children, isExpired = false }: CardProps) => {
  const navigate = useNavigate();
  const navigateState = {
    state: {
      applicationId: id,
      from: location.pathname,
    },
  };

  const handleClickCard = () => {
    gaEvent('제안 알림 전환', 'proposal');
    navigate(navigateTo, navigateState);
  };

  return (
    <S.CardLayout onClick={handleClickCard} $isExpired={isExpired}>
      {children}
    </S.CardLayout>
  );
};
interface ProfileImgProps {
  imgUrl: string;
  alt: string;
}
interface Props {
  children: React.ReactNode;
}
interface OptionTagProps {
  options: string[];
}

const ProfileImg = ({ imgUrl, alt }: ProfileImgProps) => <S.ProfileImageBox $img={imgUrl} title={alt} />;

const ContentsBox = ({ children }: Props) => <S.InfoBox>{children}</S.InfoBox>;

const Name = ({ children }: Props) => <S.NameSpan>{children}</S.NameSpan>;

const Detail = ({ children }: Props) => <S.DetailSpan>{children}</S.DetailSpan>;

const OptionTag = ({ options }: OptionTagProps) => (
  <S.OptionWrapperBox>
    {options.map((item, index) => (
      <S.OptionTagBox key={index}>{item}</S.OptionTagBox>
    ))}
  </S.OptionWrapperBox>
);

const NewIcon = () => (
  <S.NewTagBox>
    <ImgNew />
  </S.NewTagBox>
);

export const Card = Object.assign(CardMain, {
  NewIcon,
  ProfileImg,
  ContentsBox,
  Name,
  Detail,
  OptionTag,
});

const CardLayout = styled.div<{ $isExpired: boolean }>`
  flex-grow: 1;
  position: relative;

  max-width: calc(100% / 2 - 0.75rem);
  height: 22rem;
  border-radius: 12px;

  box-shadow: ${({ theme }) => theme.effects.shadow1};

  opacity: ${({ $isExpired }) => ($isExpired ? '0.3' : '1')};
`;

const ProfileImageBox = styled.div<{ $img: string }>`
  overflow: hidden;

  min-width: 16.4rem;
  height: 16.4rem;
  border-radius: 12px 12px 0 0;

  background: center/cover ${({ $img }) => `url(${$img})`} no-repeat;

  & > img {
    width: 100%;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  padding: 0.8rem 1.5rem;
`;

const FlexBox = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const NameSpan = styled.span`
  overflow: hidden;

  color: ${({ theme }) => theme.colors.moddy_bk};
  ${({ theme }) => theme.fonts.Body01};

  white-space: nowrap;
`;

const DetailSpan = styled.span`
  overflow: hidden;

  width: 6.5rem;

  color: ${({ theme }) => theme.colors.moddy_gray50};
  text-align: left;
  ${({ theme }) => theme.fonts.Body03};

  text-overflow: ellipsis;

  white-space: nowrap;
`;

const OptionWrapperBox = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const OptionTagBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 6.4rem;
  height: 1.6rem;
  padding: 0.2rem 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.moddy_gray20};
  border-radius: 4px;

  background: ${({ theme }) => theme.colors.moddy_wt};

  color: ${({ theme }) => theme.colors.moddy_gray50};
  ${({ theme }) => theme.fonts.Caption03};
`;

const NewTagBox = styled.div`
  position: absolute;
  top: -0.6rem;
  right: 1.2rem;
`;

const S = {
  CardLayout,
  ProfileImageBox,
  InfoBox,
  FlexBox,
  NameSpan,
  DetailSpan,
  OptionWrapperBox,
  OptionTagBox,
  NewTagBox,
};
