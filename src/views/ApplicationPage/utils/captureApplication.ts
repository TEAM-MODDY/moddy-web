import html2canvas from 'html2canvas';

export const captureApplication = (): string => {
  let imgUrl = '';
  html2canvas(document.getElementById('applcationImg')!).then((canvas) => {
    imgUrl = canvas.toDataURL();
  });

  return imgUrl;
};
