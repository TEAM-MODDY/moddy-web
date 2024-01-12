import { atom } from 'recoil';

export const agreementState = atom<boolean[]>({
  key: 'agreementArray',
  default: new Array(4).fill(false),
});
