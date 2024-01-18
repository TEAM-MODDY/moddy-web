import html2canvas from 'html2canvas';

export const captureApplication = async () => {
  try {
    const canvas = await html2canvas(document.getElementById('applicationImg')!);
    if (canvas) {
      console.log(canvas);
      const imgUrl = canvas.toDataURL();
      downloadURL(imgUrl, 'test.png');
      const previewImage = document.getElementById('weird_test') as HTMLImageElement;

      previewImage.src = imgUrl;

      const response = await fetch(imgUrl);
      if (response) {
        const blob = await response.blob();
        const file = new File([blob], 'captureApplication.png', { type: 'image/png' });
        return file;
      }
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
};

//이미지 다운로드 받는 함수
function downloadURL(uri: string, name: string) {
  const link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
}
