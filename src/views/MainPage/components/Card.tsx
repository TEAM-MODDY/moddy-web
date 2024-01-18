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

const OfferCard = (props: OfferCardProps) => {
  const navigate = useNavigate();
  const { offerId, name, shopName, imgUrl, isClicked, conditions } = props;
  return (
    <S.ApplicationCardLayout onClick={() => navigate('/offer-info', { state: offerId })}>
      {isClicked ? null : (
        <S.NewTagBox>
          <ImgNew />
        </S.NewTagBox>
      )}
      <S.ProfileImageBox $img={imgUrl} title="제안서 프로필 사진" />
      <S.ModelInfoBox>
        <S.PersonalInfoBox>
          <S.NameSpan>{name}</S.NameSpan>
          <S.AgeGenderSpan>{shopName}</S.AgeGenderSpan>
        </S.PersonalInfoBox>
        <S.PreferStyleWrapperBox>
          {conditions.map((item, index) => (
            <S.PreferStyleTagBox key={index}>{item}</S.PreferStyleTagBox>
          ))}
        </S.PreferStyleWrapperBox>
      </S.ModelInfoBox>
    </S.ApplicationCardLayout>
  );
};

const ApplicationCard = (props: ApplicationCardProps) => {
  const navigate = useNavigate();
  const { applicationId, name, age, imgUrl, gender, preferHairStyles } = props;
  return (
    <S.ApplicationCardLayout onClick={() => navigate('/model-info', { state: applicationId })}>
      <S.ProfileImageBox $img={imgUrl} title="지원서 프로필 사진" />
      <S.ModelInfoBox>
        <S.PersonalInfoBox>
          <S.NameSpan>{name}</S.NameSpan>
          <S.AgeGenderSpan>
            {age}세 / {gender}
          </S.AgeGenderSpan>
        </S.PersonalInfoBox>
        <S.PreferStyleWrapperBox>
          {preferHairStyles.map((item, index) => (
            <S.PreferStyleTagBox key={index}>{item}</S.PreferStyleTagBox>
          ))}
        </S.PreferStyleWrapperBox>
      </S.ModelInfoBox>
    </S.ApplicationCardLayout>
  );
};

export { OfferCard, ApplicationCard };

const ApplicationCardLayout = styled.button`
  flex-grow: 1;
  position: relative;

  max-width: calc(100% / 2 - 0.75rem);
  height: 22rem;
  border-radius: 12px;

  box-shadow: ${({ theme }) => theme.effects.shadow1};
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

const ModelInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  padding: 0.8rem 1.5rem;
`;

const PersonalInfoBox = styled.div`
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

const AgeGenderSpan = styled.span`
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
  ApplicationCardLayout,
  ProfileImageBox,
  ModelInfoBox,
  PersonalInfoBox,
  NameSpan,
  AgeGenderSpan,
  PreferStyleWrapperBox,
  PreferStyleTagBox,
  NewTagBox,
};
