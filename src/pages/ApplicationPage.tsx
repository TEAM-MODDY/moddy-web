import styled from 'styled-components';

import ApplicationInfo from '../views/ApplicationPage/components/ApplicationInfo';

const ApplicationPage = () => {
  return (
    <ApplicationPagSection>
      <ApplicationInfo />
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
