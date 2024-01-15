// export interface readImgProps {
//   event: React.ChangeEvent<HTMLInputElement>;
//   setUrl: React.Dispatch<React.SetStateAction<string>>;
// }

import { useRecoilState } from 'recoil';

import { profileState } from '@/recoil/atoms/applicationState';

export const readImg = (event: React.ChangeEvent<HTMLInputElement>) => {
  // const [url, setUrl] = useRecoilState(profileState);
  const input = event.target.files;

  // 인풋 태그에 파일이 있는 경우
  if (input && input[0]) {
    // FileReader 인스턴스 생성
    const reader = new FileReader();
    // reader가 이미지 읽도록 하기
    reader.readAsDataURL(input[0]);

    // 이미지가 로드가 된 경우
    reader.onload = (e) => {
      const previewImg = document.getElementById('profileImg') as HTMLImageElement;

      if (typeof e.target!.result === 'string') {
        previewImg.src = e.target!.result;
        setUrl({ ...url, modelImgUrl: e.target!.result });
      }
    };
  }
};
// const formData = new FormData();
// formData.append('image', file); API request body의 key에 맞게 설정
