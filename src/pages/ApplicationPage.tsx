import styled from 'styled-components';

import ApplicationInfo from '../views/ApplicationPage/components/ApplicationInfo';
import ConfirmPage from '../views/ApplicationPage/pages/ConfirmPage';

const ApplicationPage = () => {
  return (
    <>
      <ConfirmPage />
    </>
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
