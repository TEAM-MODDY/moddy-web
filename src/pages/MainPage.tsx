import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import Banner from '../views/MainPage/components/Banner';
import Contents from '../views/MainPage/components/Contents';
import ReceivedOffer from '../views/MainPage/components/ReceivedOffer';
import StatusBarForiOS from '../views/MainPage/components/StatusBarForiOS';
import TopSheet from '../views/MainPage/components/TopSheet';
import { APPLY_STATUS } from '../views/MainPage/constants/applyStatus';

import { userTypeState } from '@/recoil/atoms/signUpState';

const MainPage = () => {
  const userType = useRecoilValue(userTypeState);
  const applyType = APPLY_STATUS.NOTHING;

  return (
    <MainPageLayout>
      <StatusBarForiOS />
      <TopSheet applyType={applyType} />
      <Banner />
      {!userType ? <Contents /> : <ReceivedOffer />}
    </MainPageLayout>
  );
};

export default MainPage;

const MainPageLayout = styled.div`
  height: 100%;
  min-height: 100dvh;

  background: ${({ theme }) => theme.colors.moddy_wt};
`;
