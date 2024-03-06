export const readImg = (
  event: React.ChangeEvent<HTMLInputElement>,
  setToastOpen: (isOpen: boolean) => void,
): Promise<{ previewSrc: string; imgUrl: File }> => {
  const input = event.target.files;

  return new Promise((resolve, reject) => {
    if (input && input[0]) {
      //미리보기
      const reader = new FileReader();

      //폼데이터 생성
      const formData = new FormData();
      formData.append('DesignerImgUrl', input[0]);

      reader.onload = (e) => {
        const previewImage = document.getElementById('profileImg') as HTMLImageElement;

        const maxSize = 10 * 1024 * 1024;
        const fileSize = input[0].size;

        if (fileSize > maxSize) {
          setToastOpen(true);
          event.target.value = '';
          return;
        }

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
