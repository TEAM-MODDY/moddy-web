import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import Banner from '../views/MainPage/components/Banner';
import Contents from '../views/MainPage/components/GuestContents';
import StatusBarForiOS from '../views/MainPage/components/StatusBarForiOS';
import TopSheet from '../views/MainPage/components/TopSheet';
import { ReceivedOffer, ReceivedApplication } from '../views/MainPage/components/UserContents';

import { userTypeState } from '@/recoil/atoms/signUpState';
import { USER_TYPE } from '@/views/@common/constants/userType';
import useGetMain from '@/views/MainPage/hooks/useGetMain';

const MainPage = () => {
  // const userType = useRecoilValue(userTypeState);
  const userType = USER_TYPE.DESIGNER;

  const [page, setPage] = useState(1);
  const { data } = useGetMain({ page: page });

  const MainContents = () => {
    switch (userType) {
      case USER_TYPE.GUEST:
        return <Contents />;
      case USER_TYPE.DESIGNER:
        return <ReceivedApplication data={data} setPage={setPage} />;
      case USER_TYPE.MODEL:
        return <ReceivedOffer data={data} setPage={setPage} />;
      default:
        return null;
    }
  };
  return (
    <>
      <MainPageLayout>
        <StatusBarForiOS />
        {data && (
          <TopSheet
            userType={userType}
            applyType={userType === USER_TYPE.MODEL && 'status' in data ? data.status : undefined}
            name={
              userType === USER_TYPE.DESIGNER
                ? 'name' in data
                  ? data.name
                  : undefined
                : 'userName' in data
                  ? data.userName
                  : undefined
            }
          />
        )}
        <Banner />
        {data && <MainContents />}
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
