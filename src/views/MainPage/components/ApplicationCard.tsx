import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import { ImgNew } from '../assets/images';
import { CONDITION } from '../constants/tag';

import { userTypeState } from '@/recoil/atoms/signUpState';

interface ApplicationCardProps {
  offerId: number;
  name: string;
  shopName: string;
  imgUrl: string;
  isClicked: boolean;
  conditions: string[];
}
const ApplicationCard = (props: ApplicationCardProps) => {
  const navigate = useNavigate();
  const { offerId, name, shopName, imgUrl, isClicked, conditions } = props;
  // const userType = useRecoilValue(userTypeState); 디자이너 메인뷰에서 쓸 거
  return (
    <S.ApplicationCardLayout onClick={() => navigate('/offer-info', { state: offerId })}>
      {isClicked ? null : (
        <S.NewTagBox>
          <ImgNew />
        </S.NewTagBox>
      )}
      <S.ProfileImageBox>
        <img src={imgUrl} alt="프로필 이미지" />
      </S.ProfileImageBox>
      <S.ModelInfoBox>
        <S.PersonalInfoBox>
          <S.NameSpan>{name.slice(0, 5)}</S.NameSpan>
          <S.AgeGenderSpan>{shopName}</S.AgeGenderSpan>
        </S.PersonalInfoBox>
        <S.PreferStyleWrapperBox>
          {conditions.map((item, index) => (
            <S.PreferStyleTagBox key={index}>{CONDITION[item as keyof typeof CONDITION]}</S.PreferStyleTagBox>
          ))}
        </S.PreferStyleWrapperBox>
      </S.ModelInfoBox>
    </S.ApplicationCardLayout>
  );
};
export default ApplicationCard;

const ApplicationCardLayout = styled.button`
  flex-grow: 1;
  position: relative;

  max-width: calc(100% / 2 - 0.75rem);
  height: 22rem;
  border-radius: 12px;

  box-shadow: ${({ theme }) => theme.effects.shadow1};
`;

const ProfileImageBox = styled.div`
  overflow: hidden;

  height: 16.4rem;
  min-width: 16.4rem;

  border-radius: 12px 12px 0 0;

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
  color: ${({ theme }) => theme.colors.moddy_bk};
  ${({ theme }) => theme.fonts.Body01};
  overflow: hidden;
  white-space: nowrap;
`;

const AgeGenderSpan = styled.span`
  color: ${({ theme }) => theme.colors.moddy_gray50};
  ${({ theme }) => theme.fonts.Body03};
  width: 6.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
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
