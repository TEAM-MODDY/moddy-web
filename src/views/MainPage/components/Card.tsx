import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { ImgNew } from '../assets/images';

interface OfferCardProps {
  offerId: number;
  name: string;
  shopName: string;
  imgUrl: string;
  isClicked: boolean;
  conditions: string[];
}

interface ApplicationCardProps {
  applicationId: number;
  name: string;
  age: number;
  imgUrl: string;
  gender: string;
  preferHairStyles: string[];
}
interface CardProps {
  analyticsId: string;
  id: number;
  navigateTo: string;
  children: React.ReactNode;
}

const CardMain = ({ analyticsId, navigateTo, id, children }: CardProps) => {
  const navigate = useNavigate();

  return (
    <S.CardLayout id={analyticsId} onClick={() => navigate(navigateTo, { state: id })}>
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
  <S.PreferStyleWrapperBox>
    {options.map((item, index) => (
      <S.PreferStyleTagBox key={index}>{item}</S.PreferStyleTagBox>
    ))}
  </S.PreferStyleWrapperBox>
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

const OfferCard = ({ offerId, name, shopName, imgUrl, isClicked, conditions }: OfferCardProps) => (
  <Card analyticsId="ga-offer-card" navigateTo="/offer-info" id={offerId}>
    {!isClicked && <Card.NewIcon />}
    <Card.ProfileImg imgUrl={imgUrl} alt="제안서 프로필 사진" />
    <Card.ContentsBox>
      <S.FlexBox>
        <Card.Name>{name}</Card.Name>
        <Card.Detail>{shopName}</Card.Detail>
      </S.FlexBox>
      <Card.OptionTag options={conditions} />
    </Card.ContentsBox>
  </Card>
);

const ApplicationCard = ({ applicationId, name, age, imgUrl, gender, preferHairStyles }: ApplicationCardProps) => (
  <Card analyticsId="ga-application-card" navigateTo="/model-info" id={applicationId}>
    <Card.ProfileImg imgUrl={imgUrl} alt="지원서 프로필 사진" />
    <Card.ContentsBox>
      <S.FlexBox>
        <Card.Name>{name}</Card.Name>
        <Card.Detail>{`${age}세 / ${gender}`}</Card.Detail>
      </S.FlexBox>
      <Card.OptionTag options={preferHairStyles} />
    </Card.ContentsBox>
  </Card>
);

export { OfferCard, ApplicationCard };

const CardLayout = styled.div`
  flex-grow: 1;
  overflow: hidden;
  position: relative;

  max-width: calc(100% / 2 - 0.75rem);
  height: 22rem;
  border-radius: 12px;

  box-shadow: ${({ theme }) => theme.effects.shadow1};

  cursor: pointer;
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

const PreferStyleWrapperBox = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const PreferStyleTagBox = styled.div`
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
  PreferStyleWrapperBox,
  PreferStyleTagBox,
  NewTagBox,
};
