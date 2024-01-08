import { styled } from 'styled-components';

import ServiceHistory from '../views/ApplicationPage/components/ServiceHistory';

const ApplicationPage = () => {
  return (
    <ApplicationPagSection>
      <ServiceHistory />
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
