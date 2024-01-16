export const readImg = (event: React.ChangeEvent<HTMLInputElement>): Promise<{ previewSrc: string; imgUrl: File }> => {
  const input = event.target.files;

  return new Promise((resolve, reject) => {
    if (input && input[0]) {
      const reader = new FileReader();
      const formData = new FormData();
      formData.append('modelImgUrl', input[0]);

      reader.onload = (e) => {
        const previewImage = document.getElementById('profileImg') as HTMLImageElement;

        if (typeof e.target!.result === 'string') {
          previewImage.src = e.target!.result;

          resolve({ previewSrc: e.target!.result, imgUrl: input[0] });
        }
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(input[0]);
    }
  });
};
