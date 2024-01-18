import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import { useEffect, useState } from 'react';

export const useCaptureApplication = async (ref: HTMLElement | null) => {
  const [image, setImage] = useState<HTMLElement>();

  useEffect(() => {
    ref && setImage(ref);
  }, [ref]);

  if (image) {
    const canvas = await html2canvas(image);
    if (canvas.height !== 0) {
      console.log(canvas);
      const imgUrl = canvas.toDataURL();
      console.log(imgUrl); // 잘나옴
    }
  }

  // try {
  //   const canvas = await html2canvas(ref);
  //   console.log(canvas);
  // } catch (err) {
  //   console.log(err);
  // }

  // try {
  //   const canvas = await html2canvas(ref);

  // if (canvas) {
  //   console.log(canvas);
  //   const imgUrl = canvas.toDataURL();
  //   downloadURL(imgUrl, 'test.png');
  //   const previewImage = document.getElementById('weird_test') as HTMLImageElement;

  //   previewImage.src = imgUrl;

  //   const response = await fetch(imgUrl);
  //   if (response) {
  //     const blob = await response.blob();
  //     const file = new File([blob], 'captureApplication.png', { type: 'image/png' });
  //     return file;
  //   }
  // }
  // } catch (e) {
  //   console.error(e);
  //   throw e;
  // }
};

//이미지 다운로드 받는 함수
function downloadURL(uri: string, name: string) {
  const link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
}
