import Banner from '../views/MainPage/components/Banner';
import Contents from '../views/MainPage/components/Contents';
import ReceivedOffer from '../views/MainPage/components/ReceivedOffer';
import TopSheet from '../views/MainPage/components/TopSheet';
import { APPLY_TYPE, USER_TYPE } from '../views/MainPage/constants/constants';

const MainPage = () => {
  const userType = USER_TYPE.GUEST;
  const applyType = APPLY_TYPE.NOT_YET;
  return (
    <>
      <TopSheet userType={userType} applyType={applyType} />
      <Banner />
      {userType === USER_TYPE.GUEST ? <Contents /> : <ReceivedOffer applyType={applyType} />}
    </>
  );
};

export default MainPage;
