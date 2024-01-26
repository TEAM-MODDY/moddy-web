import html2canvas from 'html2canvas';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { applicationCaptureImgUrlState } from '@/recoil/atoms/applicationState';

export const useCaptureApplication = async (ref: HTMLElement | null) => {
  const [image, setImage] = useState<HTMLElement>();
  const setImgData = useSetRecoilState(applicationCaptureImgUrlState);

  useEffect(() => {
    ref && setImage(ref);
  }, [ref]);

  if (image) {
    const canvas = await html2canvas(image);
    if (canvas.height !== 0) {
      const imgUrl = canvas.toDataURL();
      const response = await fetch(imgUrl);
      const blob = await response.blob();
      const file = new File([blob], 'captureApplication.png', { type: 'image/png' });

      setImgData({ applicationCaptureImgUrl: file });
    }
  }
};
