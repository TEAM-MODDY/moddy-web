import { styled } from 'styled-components';

import { TOTAL_STEP } from '../constants/step';
import { EnterProfileProp } from '../utils/enterProfileProp';

import Button from '@/views/@common/components/Button';
import ProgressBar from '@/views/@common/components/ProgressBar';

const Profile = ({ setStep }: EnterProfileProp) => {
  return (
    <>
      <ProgressBar whole={TOTAL_STEP.DESIGNER_VIEW} current={4} />
      <ProfileLayout>
        <p>프로필사진 & 포트폴리오</p>
      </ProfileLayout>
      <Button text="다음" isFixed={true} onClickFn={() => setStep((prev) => prev + 1)} />
    </>
  );
};
export default Profile;

const ProfileLayout = styled.div`
  margin-top: 8.6rem;
  padding: 0 1.6rem;
`;
