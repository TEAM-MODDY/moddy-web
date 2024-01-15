import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import Banner from '../views/MainPage/components/Banner';
import GuestContents from '../views/MainPage/components/GuestContents';
import StatusBarForiOS from '../views/MainPage/components/StatusBarForiOS';
import TopSheet from '../views/MainPage/components/TopSheet';
import { ReceivedOffer, ReceivedApplication } from '../views/MainPage/components/UserContents';

import { userTypeState } from '@/recoil/atoms/signUpState';
import { USER_TYPE } from '@/views/@common/constants/userType';
import useGetMain from '@/views/MainPage/hooks/useGetMain';

const MainPage = () => {
  const userType = useRecoilValue(userTypeState);
  // const userType = USER_TYPE.GUEST;

  const [page, setPage] = useState(1);
  const { data } = useGetMain({ user: userType, page: page });

  const MainContents = () => {
    switch (userType) {
      case USER_TYPE.GUEST:
        return <GuestContents />;
      case USER_TYPE.DESIGNER:
        return data && <ReceivedApplication data={data} setPage={setPage} />;
      case USER_TYPE.MODEL:
        return data && <ReceivedOffer data={data} setPage={setPage} />;
      default:
        return null;
    }
  };

  return (
    <>
      <MainPageLayout>
        <StatusBarForiOS />
        <TopSheet
          userType={userType}
          applyType={userType === USER_TYPE.MODEL && data && 'status' in data ? data.status : ''}
          name={data ? data.name : ''}
        />
        <Banner />
        <MainContents />
      </MainPageLayout>
    </>
  );
};

export default MainPage;

const MainPageLayout = styled.div`
  height: 100%;
  min-height: 100dvh;

  background: ${({ theme }) => theme.colors.moddy_wt};
`;
