import { styled } from 'styled-components';

const Banner = () => {
  return (
    <BannerLayout>
      <BannerBox></BannerBox>
    </BannerLayout>
  );
};

export default Banner;

const BannerLayout = styled.div`
  padding: 2.4rem 1.6rem;
`;

const BannerBox = styled.div`
  width: 100%;
  height: 8.4rem;
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.moddy_bk};
`;
