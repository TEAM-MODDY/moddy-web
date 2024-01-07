import { styled } from 'styled-components';

import ApplicationResult from '../views/ApplicationPage/components/ApplicationResult';

const ApplicationPage = () => {
  return (
    <ApplicationPagSection>
      <ApplicationResult />
    </ApplicationPagSection>
  );
};

export default ApplicationPage;

const ApplicationPagSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100vh;
  padding: 0 2rem;
`;
