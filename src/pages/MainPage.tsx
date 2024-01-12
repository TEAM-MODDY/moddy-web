import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import Banner from '../views/MainPage/components/Banner';
import Contents from '../views/MainPage/components/Contents';
import ReceivedOffer from '../views/MainPage/components/ReceivedOffer';
import StatusBarForiOS from '../views/MainPage/components/StatusBarForiOS';
import TopSheet from '../views/MainPage/components/TopSheet';

import { userTypeState } from '@/recoil/atoms/signUpState';
import useGetModel from '@/views/MainPage/hooks/useGetModel';

const MainPage = () => {
  const userType = useRecoilValue(userTypeState);
  const { data } = useGetModel();
  return (
    <MainPageLayout>
      <StatusBarForiOS />
      <TopSheet applyType={data?.status} name={data?.userName} />
      <Banner />
      {!userType ? <Contents /> : data && <ReceivedOffer data={data} />}
    </MainPageLayout>
  );
};

export default MainPage;

const MainPageLayout = styled.div`
  height: 100%;
  min-height: 100dvh;

  background: ${({ theme }) => theme.colors.moddy_wt};
`;
