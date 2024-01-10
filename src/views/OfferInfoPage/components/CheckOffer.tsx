import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import Header from '../../@common/components/Header';

import ButtonBox from './ButtonBox';
import ImgBox from './ImgBox';
import ProfileWrapperBox from './ProfileWrapperBox';

const CheckOffer = () => {
  //헤더 앞뒤 이동
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
        <ImgBox />
        <S.MainText>
          디자이너의 오픈채팅방에 입장해
          <br /> 제안서를 보내주세요
        </S.MainText>
        <S.SubTitle>지원 내역 확인 & 1:1 오픈 채팅</S.SubTitle>
        <ButtonBox />

        <S.SubTitle>연결 예정 디자이너</S.SubTitle>
        <ProfileWrapperBox />
      </S.CheckOfferLayout>
    </>
  );
};

const S = {
  CheckOfferLayout: styled.div`
    margin: 5.7rem 0 6.2rem;
    padding: 0 1.6rem;
  `,

  MainText: styled.h1`
    margin: 2.4rem 0 5.26rem;

    color: ${({ theme }) => theme.colors.moddy_bk};
    text-align: center;

    ${({ theme }) => theme.fonts.Title01};
  `,

  SubTitle: styled.h2`
    width: 100%;
    margin-bottom: 2.4rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.colors.moddy_blue};

    color: ${({ theme }) => theme.colors.moddy_blue};
    ${({ theme }) => theme.fonts.Headline01};
  `,
};
export default CheckOffer;
