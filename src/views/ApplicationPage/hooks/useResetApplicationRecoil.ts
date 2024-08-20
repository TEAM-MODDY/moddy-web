import { useResetRecoilState } from 'recoil';

import {
  applicationCaptureImgUrlState,
  applyStepState,
  deatiledStyleState,
  hairStyleState,
  historyState,
  profileState,
} from '@/recoil/atoms/applicationState';

const useResetApplicationRecoil = () => {
  //state 초기화
  const stepReset = useResetRecoilState(applyStepState);
  const styleReset = useResetRecoilState(hairStyleState);
  const detailedStyleReset = useResetRecoilState(deatiledStyleState);
  const historyReset = useResetRecoilState(historyState);
  const profileReset = useResetRecoilState(profileState);
  const imgUrlReset = useResetRecoilState(applicationCaptureImgUrlState);

  const resetApplicationAtom = () => {
    stepReset();
    styleReset();
    detailedStyleReset();
    historyReset();
    profileReset();
    imgUrlReset();
  };

  return resetApplicationAtom;
};

export default useResetApplicationRecoil;
