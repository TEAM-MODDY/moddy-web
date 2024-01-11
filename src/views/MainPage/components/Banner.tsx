import Slider from 'react-slick';
import '../styles/carousel.css';
import { styled } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import banner1 from '@images/img_banner1.png';
import banner2 from '@images/img_banner2.png';

const Banner = () => {
  const images = [banner1, banner2];
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 6000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: JSX.Element) => (
      <div
        style={{
          width: 'calc(100% - 16px)',
          position: 'absolute',
          bottom: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: 'dots_custom',
  };
  return (
    <BannerLayout>
      <BannerBox>
        <Slider {...settings}>
          {images.map((item: string) => (
            <img src={item} alt="img" key={item} />
          ))}
        </Slider>
      </BannerBox>
    </BannerLayout>
  );
};

export default Banner;

const BannerLayout = styled.div`
  padding: 2.4rem 0 2.4rem 1.6rem;
`;

const BannerBox = styled.div`
  height: 8.4rem;
  border-radius: 8px;

  & img {
    width: 100%;
  }
`;
