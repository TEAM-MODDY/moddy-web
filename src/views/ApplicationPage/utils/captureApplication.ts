import html2canvas from 'html2canvas';

export const captureApplication = (): string => {
  let imgUrl = '';
  html2canvas(document.getElementById('applcationImg')!).then((canvas) => {
    imgUrl = canvas.toDataURL();
    downloadURL(imgUrl, 'test.png');
  });

  return imgUrl;
};

function downloadURL(uri: string, name: string) {
  const link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
}
