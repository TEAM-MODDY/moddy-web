import styled from 'styled-components';

import DetailedStyle from '../views/ApplicationPage/components/DetailedStyle';

const ApplicationPage = () => {
  return (
    <ApplicationPagSection>
      <DetailedStyle />
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
