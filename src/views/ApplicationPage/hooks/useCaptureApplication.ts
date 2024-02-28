import html2canvas from 'html2canvas';

export const captureImage = async (ref: HTMLElement | null) => {
  if (ref) {
    const canvas = await html2canvas(ref);
    if (canvas.height !== 0) {
      const imgUrl = canvas.toDataURL();
      downloadURL(imgUrl, 'test.png');
      const response = await fetch(imgUrl);
      const blob = await response.blob();
      const file = new File([blob], 'captureApplication.png', { type: 'image/png' });

      return file;
    }
  }
};

function downloadURL(uri: string, name: string) {
  const link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
}
