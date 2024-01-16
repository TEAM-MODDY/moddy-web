import html2canvas from 'html2canvas';

export const captureApplication = async (): Promise<string> => {
  const canvas = await html2canvas(document.getElementById('applicationImg')!);
  const imgUrl = canvas.toDataURL();

  return imgUrl;
};
