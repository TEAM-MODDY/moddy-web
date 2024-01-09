import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import Button from '../../@common/components/Button';
import Header from '../../@common/components/Header';
import { IcDownload, IcLink } from '../assets/icons';
import ImgShining from '../assets/images/img_shining.png';

const CHECK_OFFER_DATA = {
  code: 200,
  message: '제안서 승낙 성공',
  data: {
    applicationImgUrl: 'http://지원내역 캡쳐한거 클라가 넘겨준거 저장해둔거 보내쥼',
    kakaoUrl: 'http://카카오톡 url',
    designerInfo: {
      imgUrl:
        'data:image/jpeg;base64,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',
      shopName: '모디 헤어 강남점',
      name: '너무 졸려 디자이너',
      introduction:
        '안녕하세요 모디 헤어 강남점 너무 졸려 디자이너 입니다람쥐*^^* 정말 너무 졸리고요, 너무 졸리네요. 다크서클이 언제 이렇게 내려온건지, 엄마가 아침에 절 보고 눈이 꺼지다 못해 뒤통수랑 하이파이브하겠다네요. 시커먼 다크서클은 턱끝까지 내려오고, 이러다가 요절하는 건 아닐지 걱정되는 요즘, 벌써 2024년이 돼서 한 살을 더 먹네요. 인생이 왜이리 빠른 건지 이대로 가다간 곧 가겠어요. 참 재밌네요나쁘지 않아, 행복해. 나는 괜찮다니까? 아무튼 일단 와보세요. 본업은잘 하는 편? 일단 믿어는 봐 해달라는 대로 드릴게^^',
    },
  },
};

const CheckOffer = () => {
  const navigate = useNavigate();
  const handleClickClose = () => {
    navigate('/');
  };
  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Header
        title=""
        isBackBtnExist={true}
        isCloseBtnExist={true}
        backFn={handleClickBack}
        closeFn={handleClickClose}
      />
      <S.CheckOfferLayout>
        <S.ImgBox>
          <img src={ImgShining} alt="제안 성사 이미지" />
        </S.ImgBox>
        <h1>
          디자이너의 오픈채팅방에 입장해
          <br /> 제안서를 보내주세요
        </h1>
        <h2>지원 내역 확인 & 1:1 오픈 채팅</h2>
        <S.ButtonBox>
          <Button
            text="지원 내역 복사 / 저장하기"
            onClickFn={function (): void {
              throw new Error('Function not implemented.');
            }}
            icon={IcDownload}
          />
          <S.Caption>지원 내역을 복사 / 저장 후 오픈 채팅방에 전달해주세요</S.Caption>
        </S.ButtonBox>
        <S.ButtonBox>
          <Button
            text="오픈 채팅방 입장하기"
            onClickFn={function (): void {
              throw new Error('Function not implemented.');
            }}
            icon={IcLink}
          />
          <S.Caption>지원 내역을 복사 / 저장 후 오픈 채팅방에 전달해주세요</S.Caption>
        </S.ButtonBox>
        <h2>연결 예정 디자이너</h2>

        <S.ProfileWrapperBox>
          <S.ProfileBox>
            <img src={CHECK_OFFER_DATA.data.designerInfo.imgUrl} alt="디자이너 프로필 이미지" />
            <div>
              <h3>모디 헤어 강남점</h3>
              <h2>너무 졸려 디자이너</h2>
            </div>
          </S.ProfileBox>
          <p>{CHECK_OFFER_DATA.data.designerInfo.introduction}</p>
        </S.ProfileWrapperBox>
      </S.CheckOfferLayout>
    </>
  );
};

const S = {
  CheckOfferLayout: styled.div`
    margin: 5.7rem 0 6.2rem;
    padding: 0 1.6rem;

    & > h1 {
      margin: 2.4rem 0 5.26rem;

      color: ${({ theme }) => theme.colors.moddy_bk};
      text-align: center;

      ${({ theme }) => theme.fonts.Title01};
    }

    & > h2 {
      width: 100%;
      margin-bottom: 2.4rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid;
      border-color: ${({ theme }) => theme.colors.moddy_blue};

      color: ${({ theme }) => theme.colors.moddy_blue};
      ${({ theme }) => theme.fonts.Headline01};
    }
  `,

  ImgBox: styled.div`
    padding: 0 8rem;

    & > img {
      width: 100%;
    }
  `,
  ButtonBox: styled.div`
    width: 100%;
    margin-bottom: 2rem;

    text-align: center;

    & > section {
      padding: 0;
    }
  `,
  Caption: styled.p`
    margin-top: 1rem;

    color: ${({ theme }) => theme.colors.moddy_gray50};
    ${({ theme }) => theme.fonts.Body04};
  `,

  ProfileWrapperBox: styled.div`
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
export default CheckOffer;
