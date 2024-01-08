import { styled } from 'styled-components';

import ProfileUpload from './ProfileUpload';
const ApplicationPage = () => {
  return (
    <S.ApplicationPagSection>
      <ProfileUpload />
    </S.ApplicationPagSection>
  );
};

export default ApplicationPage;

const S = {
  ApplicationPagSection: styled.section`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100vh;
  `,
};
