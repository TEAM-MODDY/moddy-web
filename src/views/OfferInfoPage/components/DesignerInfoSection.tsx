import { styled } from 'styled-components';

import { IcLeft } from '../assets/icons';
import { OFFER_DATA } from '../constants/OFFER_DATA';

const DesignerInfoSection = () => {
  const DesingerInfo = OFFER_DATA.data.designerInfo;
  return (
    <div>
      <S.DesignerInfoLayout>
        <S.ProfileBox>
          <S.ProfileImg src={DesingerInfo.imgUrl} />
          <S.ProfileTextBox>
            <h2>{DesingerInfo.shopName}</h2>
            <h1>{DesingerInfo.name}</h1>
          </S.ProfileTextBox>
        </S.ProfileBox>
        <S.ButtonBox>
          <a href={DesingerInfo.instagramUrl} target="_blank" rel="noreferrer">
            <S.LinkButton type="button">
              <p>인스타그램</p>
              <IcLeft />
            </S.LinkButton>
          </a>
          <a href={DesingerInfo.naverPlaceUrl} target="_blank" rel="noreferrer">
            <S.LinkButton type="button">
              <p>네이버 플레이스</p>
              <IcLeft />
            </S.LinkButton>
          </a>
        </S.ButtonBox>
        <S.IntroductionBox>{DesingerInfo.introduction}</S.IntroductionBox>
      </S.DesignerInfoLayout>
    </div>
  );
};

const S = {
  DesignerInfoLayout: styled.section`
    display: grid;

    width: 100%;
    margin: 5.7rem 0 0;
    padding: 0 1.6rem;

    & > svg {
      position: absolute;
      top: 0.9rem;
      right: 1.3rem;
    }
  `,
  ProfileImg: styled.img`
    width: 8rem;
    height: 8rem;
    margin-right: 2.5rem;
    border-radius: 4px;
  `,

  ProfileBox: styled.div`
    display: flex;

    margin-bottom: 0.54;
  `,
  ProfileTextBox: styled.div`
    & > h1 {
      color: ${({ theme }) => theme.colors.moddy_bk};
      ${({ theme }) => theme.fonts.Headline01};
    }

    & > h2 {
      margin: 1.95rem 0 0.4rem;

      color: ${({ theme }) => theme.colors.moddy_gray50};
      ${({ theme }) => theme.fonts.Body03};
    }
  `,

  ButtonBox: styled.div`
    display: grid;

    margin: 1.09rem 0;
    /* stylelint-disable-next-line unit-allowed-list */
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;

    & > a {
      text-decoration: 0;
    }

    & > a > button {
      width: 100%;
    }
  `,

  LinkButton: styled.button`
    display: flex;
    justify-content: center;

    padding: 1rem 0;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.moddy_blue};

    cursor: pointer;

    & > p {
      margin-right: 0.7rem;

      color: ${({ theme }) => theme.colors.moddy_wt};

      ${({ theme }) => theme.fonts.Body03};
    }
  `,

  IntroductionBox: styled.div`
    width: 100%;
    margin-bottom: 3.2rem;
    padding: 1.3rem 1.25rem;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.colors.moddy_gray05};

    ${({ theme }) => theme.fonts.Body04};
  `,
};

export default DesignerInfoSection;
