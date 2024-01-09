import { EmblaCarouselType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { styled } from 'styled-components';

import banner1 from '@images/img_banner1.png';
import banner2 from '@images/img_banner2.png';
import '../styles/carousel.css';

const Banner = () => {
  const slides = [banner1, banner2];

  const [selectedindex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const autoplayOptions = {
    delay: 6000,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'center',
      loop: true,
    },
    [Autoplay(autoplayOptions)],
  );

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <BannerLayout>
      <BannerBox>
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((banner, index) => (
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__inner">
                    <img src={banner} alt="배너" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="embla__navigator">
            {scrollSnaps.map((_, index) => (
              <button
                className="embla__dots"
                key={index}
                style={{
                  backgroundColor: selectedindex === index ? '#A38EFF' : '#D3D1FF',
                }}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </BannerBox>
    </BannerLayout>
  );
};

export default Banner;

const BannerLayout = styled.div`
  padding: 2.4rem 1.6rem;
`;

const BannerBox = styled.div`
  position: relative;

  width: 100%;
  height: 8.4rem;
  border-radius: 8px;

  & img {
    width: 100%;
  }
`;
