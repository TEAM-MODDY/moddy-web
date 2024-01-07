import styled from 'styled-components';

import DefaultInfo from '../views/ApplicationPage/components/DefaultInfo';

const ApplicationPage = () => {
  return (
    <ApplicationPagSection>
      <DefaultInfo />
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
`;
