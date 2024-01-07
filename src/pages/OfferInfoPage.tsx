import { styled } from 'styled-components';

import { IcLeft } from '../views/OfferInfoPage/assets/icons';

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
      shopDetailAddress: '서울특별시 강남구 어쩌구 ',
    },
    offerDetail: {
      isAgree: true,
      preferStyle: ['레이어드컷', 'C컬펌'],
      designerOfferDetail: '디자이너가 작성한 상세 제안',
      modelApplicationDetail: '고객이 작성한 상세 제안',
    },
  },
};

const OfferInfoPage = () => {
  const DesingerInfo = DATA.data.designerInfo;
  const OfferDetail = DATA.data.offerDetail;

  return (
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
          <S.LinkButton>
            <p>인스타그램</p>
            <IcLeft />
          </S.LinkButton>
          <S.LinkButton>
            <p>네이버 플레이스</p>
            <IcLeft />
          </S.LinkButton>
        </S.ButtonBox>
        <S.IntroductionBox>{DesingerInfo.introduction}</S.IntroductionBox>
      </S.DesignerInfoLayout>
      <S.DivisionLine />
      <S.OfferDetailLayout>
        <S.DetailTextBox>
          <S.DetailMainTitleBox>
            <h2>요청 스타일</h2>
            <h1>일반 커트, 일반 펌</h1>
          </S.DetailMainTitleBox>
        </S.DetailTextBox>
      </S.OfferDetailLayout>
    </S.OfferInfoLayout>
  );
};

const S = {
  OfferInfoLayout: styled.section`
    width: 100vw;
  `,
  DesignerInfoLayout: styled.section`
    display: grid;

    width: 100%;
    margin-top: 5.7rem;
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

    background-color: ${({ theme }) => theme.colors.moddy_gray05};
  `,

  DetailTextBox: styled.div`
    position: relative;

    width: 100%;
    padding: 4rem 1.83rem;
    border: 1.5px solid ${({ theme }) => theme.colors.moddy_blue};
    border-radius: 12px;
  `,

  DetailMainTitleBox: styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.colors.moddy_blue};

    & > h1 {
      margin-bottom: 1rem;

      color: ${({ theme }) => theme.colors.moddy_blue};
      ${({ theme }) => theme.fonts.Headline01};
    }

    & > h2 {
      margin-bottom: 0.4rem;

      color: ${({ theme }) => theme.colors.moddy_gray50};
      ${({ theme }) => theme.fonts.Body1};
    }
  `,
};

export default OfferInfoPage;
