import styled from 'styled-components';

import { IcStepDone, IcStepOngoing, IcStepWaiting } from '../assets/icons';

interface ProgressBarProps {
  whole: number;
  current: number;
}
const ProgressBar = ({ whole, current }: ProgressBarProps) => {
  const arr = new Array(whole).fill(0);

  return (
    <S.ProgressBarLayout>
      <S.ProgressBarBox>
        {arr.map((_, idx) =>
          idx < current - 1 ? (
            <IcStepDone key={idx} />
          ) : idx === current - 1 ? (
            <IcStepOngoing key={idx} />
          ) : (
            <IcStepWaiting key={idx} />
          ),
        )}
      </S.ProgressBarBox>
    </S.ProgressBarLayout>
  );
};

export default ProgressBar;

const S = {
  ProgressBarLayout: styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    top: 5rem;

    width: 100%;
    max-width: 43rem;
    padding: 0.5rem;

    background-color: ${({ theme }) => theme.colors.moddy_wt};
  `,
  ProgressBarBox: styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  `,
};
