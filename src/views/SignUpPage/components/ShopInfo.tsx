import { styled } from 'styled-components';

import { TOTAL_STEP } from '../constants/step';
import { EnterProfileProp } from '../utils/enterProfileProp';

import Button from '@/views/@common/components/Button';
import ProgressBar from '@/views/@common/components/ProgressBar';

const ShopInfo = ({ setStep }: EnterProfileProp) => {
  return (
    <>
      <ProgressBar whole={TOTAL_STEP.DESIGNER_VIEW} current={3} />
      <ShopInfoLayout>
        <p>샵정보</p>
        <p>주소찾기</p>
      </ShopInfoLayout>
      <Button text="다음" isFixed={true} onClickFn={() => setStep((prev) => prev + 1)} />
    </>
  );
};
export default ShopInfo;

const ShopInfoLayout = styled.div`
  margin-top: 8.6rem;
  padding: 0 1.6rem;
`;
