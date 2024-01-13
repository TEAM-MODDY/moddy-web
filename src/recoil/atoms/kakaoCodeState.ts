import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: '카카오 인가코드',
  storage: sessionStorage,
});

export const kakaoCodeState = atom({
  key: 'kakaoCode',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
