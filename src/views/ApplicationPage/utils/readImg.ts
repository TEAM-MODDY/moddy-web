export const readImg = (event: React.ChangeEvent<HTMLInputElement>): Promise<string> => {
  const input = event.target.files;

  return new Promise((resolve, reject) => {
    if (input && input[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const previewImage = document.getElementById('profileImg') as HTMLImageElement;

        if (typeof e.target!.result === 'string') {
          previewImage.src = e.target!.result;

          resolve(e.target!.result);
        }
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(input[0]);
    }
  });
};
// const formData = new FormData();
// formData.append('image', file); API request body의 key에 맞게 설정
