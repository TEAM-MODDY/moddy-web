import Slider from 'react-slick';
import styled from 'styled-components';

import ImgBackground from '@/views/LoginPage/assets/images/img_Background.png';
import LoginButton from '@/views/LoginPage/components/LoginButton';
import OnboardingStep1 from '@/views/LoginPage/components/OnboardingStep1';
import OnboardingStep2 from '@/views/LoginPage/components/OnboardingStep2';
import OnboardingStep3 from '@/views/LoginPage/components/OnboardingStep3';
const LoginPage = () => {
  const settings = {
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    customPaging: () => {
      return (
        <S.Dot>
          <i />
        </S.Dot>
      );
    },
  };
  return (
    <S.LoginPageLayout>
      <Slider {...settings}>
        <OnboardingStep1 />
        <OnboardingStep2 />
        <OnboardingStep3 />
      </Slider>
      <LoginButton />
    </S.LoginPageLayout>
  );
};

export default LoginPage;

const S = {
  LoginPageLayout: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    height: 100dvh;
    padding: 7.6rem 0 4rem;

    background-image: url(${ImgBackground});
    background-size: cover;

    & .slick-slider {
      height: 100%;
    }

    & .slick-slide {
      padding-right: 0;
    }

    & .slick-dots {
      display: flex !important;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 0;

      margin-bottom: 2.4rem;

      & > li {
        width: 1rem;
        height: 1rem;
        margin: 0;
      }
    }
  `,
  Dot: styled.i`
    display: block;

    width: 0.6rem;
    height: 0.6rem;
    margin: 0.2rem;
    border-radius: 100px;

    background-color: ${({ theme }) => theme.colors.moddy_wt};

    .slick-active > & {
      position: relative;

      width: 1rem;
      height: 1rem;
      margin: 0;

      background-color: ${({ theme }) => theme.colors.moddy_blue2};

      & > i {
        position: absolute;
        top: 2px;
        left: 2px;

        width: 0.6rem;
        height: 0.6rem;
        border-radius: 100px;

        background-color: ${({ theme }) => theme.colors.moddy_blue};
      }
    }
  `,
};
