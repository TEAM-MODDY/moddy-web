import { styled } from 'styled-components';

import ImgPropLogo from '../assets/images/img_proplogo.png';
import { OFFER_INFO_BTN, OFFER_INFO_CATEGORY } from '../constants/message';
import { UseGetOfferModelProps } from '../hooks/type';

import { IcBookmark, IcPin } from '@/views/OfferInfoPage/assets/icons';
import ConditionContentBox from '@/views/OfferInfoPage/components/ConditionContentBox';
import { CONDITION_DATA } from '@/views/OfferInfoPage/constants/CONDITION_DATA';

const OfferDetailSection = ({ data }: { data: UseGetOfferModelProps }) => {
  const { designerInfo, applicationInfo, offerInfo } = data;
  const { naverPlaceUrl, gender, dayoffs, shopAddress, shopDetailAddress } = designerInfo;
  const { preferStyle, modelApplicationDetail } = applicationInfo;
  const { designerOfferDetail, preferOfferConditions } = offerInfo;

  return (
    <>
      <S.OfferDetailLayout>
        <S.DetailTextBox>
          <IcBookmark />
          <S.DetailMainTitleBox>
            <h2>{OFFER_INFO_CATEGORY.PREFER_STYLE}</h2>
            <h1>{preferStyle?.join(', ')}</h1>
          </S.DetailMainTitleBox>
          <S.DesignContentBox>
            <h1>{OFFER_INFO_CATEGORY.DESIGNER_OFFER}</h1>
            <p>{designerOfferDetail}</p>
            <h1>{OFFER_INFO_CATEGORY.APPLICATION_DETAIL}</h1>
            <p>{modelApplicationDetail}</p>
          </S.DesignContentBox>

          <S.DetailMainTitleBox>
            <h1>{OFFER_INFO_CATEGORY.DESIGNER_INFO}</h1>
          </S.DetailMainTitleBox>
          <S.DetailContentBox>
            <h2>{OFFER_INFO_CATEGORY.GENDER}</h2>
            <h3>{gender}</h3>
          </S.DetailContentBox>
          <S.DetailContentBox>
            <h2>{OFFER_INFO_CATEGORY.DAYOFF}</h2>
            <h3>{dayoffs && dayoffs.length > 0 ? dayoffs.join(', ') : '없음'}</h3>
          </S.DetailContentBox>
          <S.DetailContentBox>
            <h2>{OFFER_INFO_CATEGORY.ADDRESS}</h2>
            <div>
              <h3>{shopAddress}</h3>
              <h3>{shopDetailAddress}</h3>
              <a href={naverPlaceUrl} target="_blank" rel="noreferrer">
                <button type="button">
                  <IcPin />
                  {OFFER_INFO_BTN.MAP}
                </button>
              </a>
            </div>
          </S.DetailContentBox>

          <S.DetailMainTitleBox>
            <h1>{OFFER_INFO_CATEGORY.OFFER_CONDITION}</h1>
          </S.DetailMainTitleBox>
          <S.ConditionListBox>
            {CONDITION_DATA.map((data, index) => (
              <ConditionContentBox
                key={index}
                icon={data.icon}
                activeIcon={data.activeIcon}
                condition={data.condition}
                preferConditions={preferOfferConditions}
                index={index}
              />
            ))}
          </S.ConditionListBox>
          <S.LogoImg src={ImgPropLogo} />
        </S.DetailTextBox>
      </S.OfferDetailLayout>
    </>
  );
};

const S = {
  OfferDetailLayout: styled.section`
    display: grid;

    width: 100%;
    padding: 0 1.6rem;
  `,

  DetailContentBox: styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    margin: 0.6rem 0;

    & > h2 {
      color: ${({ theme }) => theme.colors.moddy_gray50};

      ${({ theme }) => theme.fonts.Body01};
    }

    & > h3 {
      color: ${({ theme }) => theme.colors.moddy_bk};

      ${({ theme }) => theme.fonts.Body02};
    }

    & > div > h3 {
      color: ${({ theme }) => theme.colors.moddy_bk};
      text-align: right;

      ${({ theme }) => theme.fonts.Body02};
    }

    & > div > a > button {
      display: flex;
      gap: 0.2rem;
      justify-content: center;
      align-items: center;
      float: right;

      margin-top: 0.6rem;

      /* stylelint-disable-next-line unit-allowed-list */
      grid-template-columns: repeat(2, 1fr);

      color: ${({ theme }) => theme.colors.moddy_blue};
      ${({ theme }) => theme.fonts.Caption03};

      cursor: pointer;
    }
  `,
  DetailTextBox: styled.div`
    position: relative;

    width: 100%;
    padding: 4rem 1.83rem 0.95rem;
    border: 1.5px solid ${({ theme }) => theme.colors.moddy_blue};
    border-radius: 12px;

    box-shadow: ${({ theme }) => theme.effects.shadow5};

    & > svg {
      position: absolute;
      top: -1.1rem;
      right: 3.14rem;
    }
  `,

  DetailMainTitleBox: styled.div`
    margin-bottom: 1.3rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.moddy_blue};

    & > h1 {
      margin-bottom: 1rem;

      color: ${({ theme }) => theme.colors.moddy_blue};
      ${({ theme }) => theme.fonts.Headline01};
    }

    & > h2 {
      margin-bottom: 0.4rem;

      color: ${({ theme }) => theme.colors.moddy_gray50};
      ${({ theme }) => theme.fonts.Body01};
    }
  `,
  ConditionListBox: styled.div`
    display: grid;

    margin-top: 0.85rem;
    /* stylelint-disable-next-line unit-allowed-list */
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.2rem;

    color: ${({ theme }) => theme.colors.moddy_bk};
  `,

  ConditionListContentBox: styled.div`
    display: flex;
    justify-content: center;

    color: ${({ theme }) => theme.colors.moddy_gray50};
    ${({ theme }) => theme.fonts.Body02};

    & > svg {
      margin-right: 0.6rem;
    }
  `,

  LogoImg: styled.img`
    width: 15rem;
    margin-top: 1.6rem;
  `,

  DesignContentBox: styled.div`
    width: 100%;
    margin: 2.7rem 0 3.2rem;
    word-break: keep-all;

    color: ${({ theme }) => theme.colors.moddy_bk};

    & > h1 {
      margin-bottom: 1rem;

      color: ${({ theme }) => theme.colors.moddy_blue};
      ${({ theme }) => theme.fonts.Body01};
    }

    & > h1:nth-child(3) {
      color: ${({ theme }) => theme.colors.moddy_gray50};
      ${({ theme }) => theme.fonts.Body01};
    }

    & > p {
      margin-bottom: 2rem;
      padding: 1.3rem 1.8rem;

      background-color: ${({ theme }) => theme.colors.moddy_blue4};

      ${({ theme }) => theme.fonts.Body04};
    }

    & > p:nth-child(4) {
      background-color: ${({ theme }) => theme.colors.moddy_gray05};

      color: ${({ theme }) => theme.colors.moddy_bk};

      ${({ theme }) => theme.fonts.Body04};
    }
  `,
};

export default OfferDetailSection;
