import styled from 'styled-components';

import { IcStepDone, IcStepOngoing, IcStepWaiting } from '../assets/icons';

const ProgressBar = () => {
  return (
    <S.ProgressBarLayout>
      <S.ProgressBarBox>
        <IcStepDone />
        <IcStepOngoing />
        <IcStepWaiting />
      </S.ProgressBarBox>
    </S.ProgressBarLayout>
  );
};

export default ProgressBar;

const S = {
  ProgressBarLayout: styled.div`
    display: flex;
    justify-content: center;

    width: 100%;
  `,
  ProgressBarBox: styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
  `,
};
