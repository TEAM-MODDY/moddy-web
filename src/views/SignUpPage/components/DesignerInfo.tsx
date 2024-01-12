import { styled } from 'styled-components';

import { TOTAL_STEP } from '../constants/step';
import { EnterProfileProp } from '../utils/enterProfileProp';

import Button from '@/views/@common/components/Button';
import ProgressBar from '@/views/@common/components/ProgressBar';

const DesignerInfo = ({ setStep }: EnterProfileProp) => {
  return (
    <>
      <ProgressBar whole={TOTAL_STEP.DESIGNER_VIEW} current={5} />
      <DesignerInfoLayout>
        <p>디자이너 소개</p>
      </DesignerInfoLayout>
      <Button text="다음" isFixed={true} onClickFn={() => setStep((prev) => prev + 1)} />
    </>
  );
};
export default DesignerInfo;

const DesignerInfoLayout = styled.div`
  margin-top: 8.6rem;
  padding: 0 1.6rem;
`;
