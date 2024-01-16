import html2canvas from 'html2canvas';

export const captureApplication = async (): Promise<FormData> => {
  const canvas = await html2canvas(document.getElementById('applicationImg')!);
  const blob = await fetch(canvas.toDataURL()).then((res) => res.blob());
  const formData = new FormData();
  formData.append('applicationCaptureImgUrl', blob);

  return formData;
};
