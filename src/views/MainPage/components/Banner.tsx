import { styled } from 'styled-components';

import { USER_TYPE } from '../constants/constants';

import banner1 from '@images/img_banner1.png';
import banner2 from '@images/img_banner2.png';

interface BannerProps {
  userType: number;
}
const Banner = ({ userType }: BannerProps) => {
  return (
    <BannerLayout>
      <BannerBox>
        <img src={userType === USER_TYPE.DESIGNER ? banner1 : banner2} alt="배너" />
      </BannerBox>
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

  & > img {
    width: 100%;
  }
`;
