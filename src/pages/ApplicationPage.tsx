import { styled } from 'styled-components';

import ApplicationResult from '@/views/ApplicationPage/components/ApplicationResult';

const ApplicationPage = () => {
  return (
    <S.ApplicationPagSection>
      <ApplicationResult />
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
