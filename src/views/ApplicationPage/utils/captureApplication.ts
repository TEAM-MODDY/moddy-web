import html2canvas from 'html2canvas';

export const captureApplication = async (): Promise<File> => {
  let imgUrl = '';
  html2canvas(document.getElementById('applcationImg')!).then((canvas) => {
    imgUrl = canvas.toDataURL();
  });

  try {
    const response = await fetch(imgUrl);
    const blob = await response.blob();
    const file = new File([blob], 'captureApplication.png', { type: 'image/png' });

    return file;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
