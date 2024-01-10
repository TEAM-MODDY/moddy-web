interface readImgProps {
  input: React.ChangeEvent<HTMLInputElement>;
}

export const readImg = ({ input }: readImgProps) => {
  // 인풋 태그에 파일이 있는 경우
  if (input.target.files && input.target.files[0]) {
    // FileReader 인스턴스 생성
    const reader = new FileReader();
    // reader가 이미지 읽도록 하기
    reader.readAsDataURL(input.target.files[0]);
    // 이미지가 로드가 된 경우
    reader.onload = (e) => {
      const previewImg = document.getElementById('profileImg');
      previewImg!.src = e.target!.result;
    };
  }
};
