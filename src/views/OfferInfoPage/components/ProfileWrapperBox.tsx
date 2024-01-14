import { styled } from 'styled-components';

import { AgreeDesignerInfoProps } from '../hooks/type';

const ProfileWrapperBox = ({ designerInfo }: { designerInfo: AgreeDesignerInfoProps }) => {
  const { imgUrl, shopName, name, introduction }: AgreeDesignerInfoProps = designerInfo;
  return (
    <S.ProfileWrapperLayout>
      <S.ProfileBox>
        <img src={imgUrl} alt="디자이너 프로필 이미지" />
        <div>
          <h3>{shopName}</h3>
          <h2>{name}</h2>
        </div>
      </S.ProfileBox>
      <p>{introduction}</p>
    </S.ProfileWrapperLayout>
  );
};

const S = {
  ProfileWrapperLayout: styled.div`
    & > p {
      margin: 2.5rem 0 4rem;
      padding: 1.3rem 1.25rem;

      background-color: ${({ theme }) => theme.colors.moddy_gray05};

      color: ${({ theme }) => theme.colors.moddy_bk};
      word-break: keep-all;
      ${({ theme }) => theme.fonts.Body04};
    }
  `,

  ProfileBox: styled.div`
    display: flex;

    & > img {
      right: 2.5rem;

      width: 8rem;
      height: 8rem;
      border-radius: 4px;
      object-fit: cover;
    }

    & > div {
      margin: 1.95rem 0 0 2.5rem;
    }

    & > div > h2 {
      margin-top: 0.4rem;

      color: ${({ theme }) => theme.colors.moddy_bk};
      ${({ theme }) => theme.fonts.Headline01};
    }

    & > div > h3 {
      margin: 1.95 0 0.4rem;

      color: ${({ theme }) => theme.colors.moddy_gray50};
      ${({ theme }) => theme.fonts.Body03};
    }
  `,
};

export default ProfileWrapperBox;
