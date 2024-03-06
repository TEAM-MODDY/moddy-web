import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import { applyStepState } from '@/recoil/atoms/applicationState';
import ApplicationResult from '@/views/ApplicationPage/components/ApplicationResult';
import DefaultInfo from '@/views/ApplicationPage/components/DefaultInfo';
import DetailedStyle from '@/views/ApplicationPage/components/DetailedStyle';
import Profile from '@/views/ApplicationPage/components/Profile';
import ServiceHistory from '@/views/ApplicationPage/components/ServiceHistory';
import { STEP } from '@/views/ApplicationPage/constants/step';

const ApplicationPage = () => {
  const step = useRecoilValue(applyStepState);

  const Contents = () => {
    switch (step.current) {
      case STEP.STYLE_BASIC:
        return <DefaultInfo />;
      case STEP.STYLE_DETAILED:
        return <DetailedStyle />;
      case STEP.SERVICE_HISTORY:
        return <ServiceHistory />;
      case STEP.PROFILE:
        return <Profile />;
      case STEP.RESULT:
        return <ApplicationResult />;
    }
  };

  return (
    <S.ApplicationPagSection>
      <Contents />
    </S.ApplicationPagSection>
  );
};

export default ApplicationPage;

const S = {
  ApplicationPagSection: styled.section`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100dvh;
  `,
};
