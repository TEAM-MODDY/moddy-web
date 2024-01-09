import { styled } from 'styled-components';

import Banner from '../views/MainPage/components/Banner';
import Contents from '../views/MainPage/components/Contents';
import ReceivedOffer from '../views/MainPage/components/ReceivedOffer';
import StatusBarForiOS from '../views/MainPage/components/StatusBarForiOS';
import TopSheet from '../views/MainPage/components/TopSheet';
import { APPLY_TYPE, USER_TYPE } from '../views/MainPage/constants/constants';

const MainPage = () => {
  const userType = USER_TYPE.GUEST;
  const applyType = APPLY_TYPE.NOT_YET;

  return (
    <MainPageLayout>
      <StatusBarForiOS />
      <TopSheet userType={userType} applyType={applyType} />
      <Banner userType={userType} />
      {userType === USER_TYPE.GUEST ? <Contents /> : <ReceivedOffer applyType={applyType} />}
    </MainPageLayout>
  );
};

export default MainPage;

const MainPageLayout = styled.div`
  background: ${({ theme }) => theme.colors.moddy_wt};
`;
