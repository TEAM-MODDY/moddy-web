import { useState } from 'react';
import { styled } from 'styled-components';

import { IcCheckboxGrey, IcCheckboxBlue } from '../views/@common/assets/icons';
import Button from '../views/@common/components/Button';
import Header from '../views/@common/components/Header';
import {
  IcCamera,
  IcModdyhearts1,
  IcGift,
  IcMask,
  IcPhotoshop,
  IcHearthand,
} from '../views/ModelInfoPage/assets/icons';
import { IcLeft, IcBookmark, IcPin } from '../views/OfferInfoPage/assets/icons';
import ImgPropLogo from '../views/OfferInfoPage/assets/images/img_proplogo.png';

const DATA = {
  code: 200,
  message: '제안서 조회 성공',
  data: {
    designerInfo: {
      imgUrl:
        'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1Y7L/image/d2ObJGSfzhn9hKaDdt1fjErq4cw.jpg',
      shopName: '모디 헤어 강남점',
      name: '강모디',
      instagramUrl: 'htttp://instagram-url',
      naverPlaceUrl: 'htttp://naver-place',
      introduction:
        '안녕하세요 모디 헤어 강남점 너무 졸려 디자이너 입니다람쥐*^^* 정말 너무 졸리고요, 너무 졸리네요. 다크서클이 언제 이렇게 내려온건지, 엄마가 아침에 절 보고 눈이 꺼지다 못해 뒤통수랑 하이파이브하겠다네요. 시커먼 다크서클은 턱끝까지 내려오고, 이러다가 요절 하는 건 아닐지 걱정되는 요즘, 벌써 2024년이 돼서 한 살을 더 먹네 요. 인생이 왜이리 빠른 건지 이대로 가다간 곧 가겠어요. 참 재밌네요나쁘지 않아, 행복해. 나는 괜찮다니까? 아무튼 일단 와보세요. 본업은 잘 하는 편? 일단 믿어는 봐 해달라는 대로 드릴게^^',
      gender: '여성',
      dayoffs: ['월', '화'],
      shopAddress: '서울특별시 강남구 어쩌구 ',
      shopDetailAddress: '302호 ',
    },
    offerDetail: {
      isAgree: true,
      preferStyle: ['레이어드컷', 'C컬펌'],
      designerOfferDetail:
        '이러쿵저러쿵 이쁘게 최양락은 아니면서 웬디는 될 수 없만 최양락은좀 아니지 않나 하는 생각에 일단 단발을 하고는 싶지만 그래도 긴머리는 포기 못하는 그런 흠냐흠냐..어렵다 어려워 그래도 아무래도 헤어 디자이너면 이런건 알아서 잘 딱 깔끔하게 해주실 수 있을거라고 믿을게요? 잘 부탁드리겠습니다. 머리 망하면 리뷰 테러각 꼭 갈 거니까 받아들이세요^^',
      modelApplicationDetail: '고객이 작성한 상세 제안 와라라라라라라라ㅏ라라 이거까지 끝내고 진자 잔다 선언',
    },
  },
};

const OfferInfoPage = () => {
  const DesingerInfo = DATA.data.designerInfo;
  const OfferDetail = DATA.data.offerDetail;

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckBoxClick = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <>
      <Header title="도착한 제안서" isBackBtnExist={true} />
      <S.OfferInfoLayout>
        <S.DesignerInfoLayout>
          <S.ProfileBox>
            <S.ProfileImg src={DesingerInfo.imgUrl} />
            <S.ProfileTextBox>
              <h2>{DesingerInfo.shopName}</h2>
              <h1>{DesingerInfo.name}</h1>
            </S.ProfileTextBox>
          </S.ProfileBox>
          <S.ButtonBox>
            <S.LinkButton type="button">
              <p>인스타그램</p>
              <IcLeft />
            </S.LinkButton>
            <S.LinkButton type="button">
              <p>네이버 플레이스</p>
              <IcLeft />
            </S.LinkButton>
          </S.ButtonBox>
          <S.IntroductionBox>{DesingerInfo.introduction}</S.IntroductionBox>
        </S.DesignerInfoLayout>
        <S.DivisionLine />
        <S.OfferDetailLayout>
          <S.DetailTextBox>
            <IcBookmark />
            <S.DetailMainTitleBox>
              <h2>요청 스타일</h2>
              <h1>{OfferDetail.preferStyle.join(', ')}</h1>
            </S.DetailMainTitleBox>
            <S.DesignContentBox>
              <h1>디자이너 상세 제안</h1>
              <p>{OfferDetail.designerOfferDetail}</p>
              <h1>상세 희망 스타일</h1>
              <p>{OfferDetail.modelApplicationDetail}</p>
            </S.DesignContentBox>

            <S.DetailMainTitleBox>
              <h1>디자이너 정보</h1>
            </S.DetailMainTitleBox>
            <S.DetailContentBox>
              <h2>성별</h2>
              <h3>{DesingerInfo.gender}</h3>
            </S.DetailContentBox>
            <S.DetailContentBox>
              <h2>휴무일</h2>
              <h3>{DesingerInfo.dayoffs.join(', ')}</h3>
            </S.DetailContentBox>
            <S.DetailContentBox>
              <h2>주소</h2>
              <div>
                <h3>{DesingerInfo.shopAddress}</h3>
                <h3>{DesingerInfo.shopDetailAddress}</h3>
                <button type="button">
                  <IcPin />
                  지도
                </button>
              </div>
            </S.DetailContentBox>

            <S.DetailMainTitleBox>
              <h1>제안 조건</h1>
            </S.DetailMainTitleBox>
            <S.ConditionListBox>
              <div>
                <IcCamera />
                얼굴 촬영
              </div>
              <div>
                <IcModdyhearts1 />
                SNS 게시
              </div>
              <div>
                <IcGift />
                전액 무료
              </div>
              <div>
                <IcMask />
                마스크 착용
              </div>
              <div>
                <IcPhotoshop /> 포토샵 보정
              </div>
              <div>
                <IcHearthand />
                소정의 약값
              </div>
            </S.ConditionListBox>
            <S.LogoImg src={ImgPropLogo} />
          </S.DetailTextBox>
        </S.OfferDetailLayout>
        <S.AgreementBox>
          <S.CheckboxBtn onClick={handleCheckBoxClick}>
            {isChecked ? <IcCheckboxBlue /> : <IcCheckboxGrey />}
          </S.CheckboxBtn>
          해당 제안서의 내용에 동의합니다.
        </S.AgreementBox>
      </S.OfferInfoLayout>
      <Button text="다음" isFixed={false} disabled={!isChecked} />
    </>
  );
};

const S = {
  OfferInfoLayout: styled.section`
    width: 100vw;
    margin-top: 5.7rem;
  `,
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
  `,

  LinkButton: styled.button`
    display: flex;
    justify-content: center;

    padding: 1rem 0;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.moddy_blue2};

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

  OfferDetailLayout: styled.section`
    display: grid;

    width: 100%;
    padding: 0 1.6rem;
  `,

  DivisionLine: styled.div`
    width: 100vw;
    height: 0.8rem;
    margin-bottom: 3.03rem;

    background-color: ${({ theme }) => theme.colors.moddy_gray05};
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
      top: -0.6rem;
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

  CheckboxBtn: styled.button`
    margin-right: 1.1rem;
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

    & > div > button {
      display: grid;
      justify-content: center;
      align-items: center;
      float: right;

      margin-top: 0.6rem;

      /* stylelint-disable-next-line unit-allowed-list */
      grid-template-columns: repeat(2, 1fr);

      grid-gap: 0.2rem;

      color: ${({ theme }) => theme.colors.moddy_blue};
      ${({ theme }) => theme.fonts.Caption03};

      cursor: pointer;
    }
  `,
  LogoImg: styled.img`
    width: 15rem;
    margin-top: 1.6rem;
  `,

  AgreementBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    margin: 2.4rem 0;

    color: ${({ theme }) => theme.colors.moddy_bk};
    ${({ theme }) => theme.fonts.Body01};
  `,

  ConditionListBox: styled.div`
    display: grid;

    margin-top: 0.85rem;
    /* stylelint-disable-next-line unit-allowed-list */
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.6rem;

    & > div {
      display: flex;
      justify-content: center;

      color: ${({ theme }) => theme.colors.moddy_gray50};
      ${({ theme }) => theme.fonts.Body02};
    }

    & > div > svg {
      margin-right: 0.6rem;
    }

    color: ${({ theme }) => theme.colors.moddy_bk};
  `,
};

export default OfferInfoPage;
