import { styled } from 'styled-components';

import { ImgNew } from '../assets/images';
import profileImg from '../assets/images/img_homecontents1.png';

const ApplicationCard = () => {
  return (
    <S.ApplicationCardLayout>
      <S.NewTagBox>
        <ImgNew />
      </S.NewTagBox>
      <S.ProfileImageBox></S.ProfileImageBox>
      <S.ModelInfoBox>
        <S.PersonalInfoBox>
          <S.NameSpan>백모디</S.NameSpan>
          <S.AgeGenderSpan>25세 / 여자</S.AgeGenderSpan>
        </S.PersonalInfoBox>
        <S.PreferStyleWrapperBox>
          <S.PreferStyleTagBox>일반 커트</S.PreferStyleTagBox>
          <S.PreferStyleTagBox>전체 염색</S.PreferStyleTagBox>
        </S.PreferStyleWrapperBox>
      </S.ModelInfoBox>
    </S.ApplicationCardLayout>
  );
};
export default ApplicationCard;

const ApplicationCardLayout = styled.div`
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
  border-radius: 12px 12px 0 0;

  background: center/cover url(${profileImg});
`;

const ModelInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  padding: 0.8rem 2rem;
`;

const PersonalInfoBox = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const NameSpan = styled.span`
  color: ${({ theme }) => theme.colors.moddy_bk};
  ${({ theme }) => theme.fonts.Body01};
`;

const AgeGenderSpan = styled.span`
  color: ${({ theme }) => theme.colors.moddy_gray50};
  ${({ theme }) => theme.fonts.Body03};
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
  right: 2rem;
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
