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
    kakaoUrl: 'https://open.kakao.com/o/gukiuI2f',
    designerInfo: {
      imgUrl:
        'https://mblogthumb-phinf.pstatic.net/20151022_73/rucifer25_1445501490504O4fSt_JPEG/%C1%B6%B4%CF%B5%AA%2C%C6%C0%B9%F6%C6%B0_%BF%B5%C8%AD%2C%B0%A1%C0%A7%BC%D5%2C%B8%ED%C0%DB_%BF%B5%C8%AD_%C3%DF%C3%B5_%282%29.jpg?type=w420',
      shopName: '모디 헤어 강남점',
      name: '너무 졸려 디자이너',
      introduction:
        '안녕하세요 모디 헤어 강남점 너무 졸려 디자이너 입니다람쥐*^^* 정말 너무 졸리고요, 너무 졸리네요. 다크서클이 언제 이렇게 내려온건지, 엄마가 아침에 절 보고 눈이 꺼지다 못해 뒤통수랑 하이파이브하겠다네요. 시커먼 다크서클은 턱끝까지 내려오고, 이러다가 요절하는 건 아닐지 걱정되는 요즘, 벌써 2024년이 돼서 한 살을 더 먹네요. 인생이 왜이리 빠른 건지 이대로 가다간 곧 가겠어요. 참 재밌네요나쁘지 않아, 행복해. 나는 괜찮다니까? 아무튼 일단 와보세요. 본업은잘 하는 편? 일단 믿어는 봐 해달라는 대로 드릴게^^',
    },
  },
};

const CheckOffer = () => {
  //헤더 앞뒤 이동
  const navigate = useNavigate();
  const handleClickClose = () => {
    navigate('/');
  };
  const handleClickBack = () => {
    navigate(-1);
  };

  //페이지로 이동
  const OpenChatLink = CHECK_OFFER_DATA.data.kakaoUrl;
  const handleClickChat = () => {
    window.open(OpenChatLink, '_blank'); // Open the link in a new tab
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
            icon={<IcDownload />}
          />
          <S.Caption>지원 내역을 복사 / 저장 후 오픈 채팅방에 전달해주세요</S.Caption>
        </S.ButtonBox>
        <S.ButtonBox>
          <Button text="오픈 채팅방 입장하기" onClickFn={handleClickChat} icon={<IcLink />} />
          <S.Caption>정확하고 편한 소통을 위해 ‘실명 입장’을 부탁드려요</S.Caption>
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
