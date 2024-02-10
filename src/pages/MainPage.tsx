import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import Banner from '../views/MainPage/components/Banner';
import GuestContents from '../views/MainPage/components/GuestContents';
import StatusBarForiOS from '../views/MainPage/components/StatusBarForiOS';
import TopSheet from '../views/MainPage/components/TopSheet';
import { DesignerContents, ModelContents } from '../views/MainPage/components/UserContents';

import { userTypeState } from '@/recoil/atoms/signUpState';
import { USER_TYPE } from '@/views/@common/constants/userType';
import { INITIAL_PAGE } from '@/views/MainPage/constants/constant';
import useGetMain from '@/views/MainPage/hooks/useGetMain';

const MainPage = () => {
  const userType = useRecoilValue(userTypeState);
  const [page, setPage] = useState(INITIAL_PAGE);
  const { modelData, designerData } = useGetMain({ user: userType, page: page });

  // 뒤로 가기 막기 관련
  const navigate = useNavigate();
  useEffect(() => {
    const handlePopState = () => navigate('/');
    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', handlePopState);

    return () => window.removeEventListener('popstate', handlePopState);
  }, [navigate]);

  const Contents = {
    [USER_TYPE.GUEST]: {
      mainContent: GuestContents,
    },
    [USER_TYPE.DESIGNER]: {
      mainContent: () => designerData && <DesignerContents data={designerData} setPage={setPage} />,
      name: designerData?.name,
    },
    [USER_TYPE.MODEL]: {
      mainContent: () => modelData && <ModelContents data={modelData} setPage={setPage} />,
      applyType: modelData?.status,
      name: modelData?.name,
    },
  };

  const TopSheetProps = {
    userType,
    applyType: Contents[userType].applyType,
    name: Contents[userType].name,
  };

  const MainContentsByUserType = () => {
    const ContentComponent = Contents[userType].mainContent;
    return <ContentComponent />;
  };
  return (
    <MainPageLayout>
      <StatusBarForiOS />
      <TopSheet {...TopSheetProps} />
      <Banner />
      <MainContentsByUserType />
    </MainPageLayout>
  );
};

export default MainPage;

const MainPageLayout = styled.div`
  height: 100%;
  min-height: 100dvh;

  background: ${({ theme }) => theme.colors.moddy_wt};
`;
