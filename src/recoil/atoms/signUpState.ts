import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { STATUS } from '@/views/SignUpPage/constants/requestStatus';

export interface inputDataType {
  data: string;
  verifyStatus: boolean;
}

interface verificationDataType {
  data: string;
  status: number;
}

export interface preferRegionDataType {
  data: boolean[];
  verifyStatus: boolean;
}

export interface selectDateType {
  data: string[];
}

export interface searchAddressType {
  data: string;
}

export interface inputImgType {
  data: string;
  file: File;
}

const { persistAtom } = recoilPersist({
  key: '사용자 타입',
  storage: sessionStorage,
});

export const userTypeState = atom({
  key: 'userType',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const tempUserTypeState = atom<string>({
  key: 'tempUserType',
  default: '',
});

export const marketingState = atom<boolean>({
  key: 'marketing',
  default: false,
});

export const nameState = atom<string>({
  key: 'name',
  default: '',
});

export const birthYearState = atom<string>({
  key: 'birthYear',
  default: '',
});

export const genderState = atom<string>({
  key: 'gender',
  default: '',
});

export const preferRegionState = atom<boolean[]>({
  key: 'preferRegion',
  default: [],
});

export const regionState = atom<{ id: number; name: string }[]>({
  key: 'region',
  default: [],
});

export const phoneNumberState = atom<verificationDataType>({
  key: 'phoneNumber',
  default: {
    data: '',
    status: STATUS.NOT_AVAILABLE,
  },
});

export const verifyCodeState = atom<verificationDataType>({
  key: 'verityCode',
  default: {
    data: '',
    status: STATUS.NOT_AVAILABLE,
  },
});

export const shopInfoState = atom<inputDataType>({
  key: 'shopInfo',
  default: {
    data: '',
    verifyStatus: false,
  },
});

export const addressState = atom<searchAddressType>({
  key: 'addressInfo',
  default: { data: '' },
});

export const detailShopInfoState = atom<inputDataType>({
  key: 'detailShopInfo',
  default: {
    data: '',
    verifyStatus: false,
  },
});

export const dateState = atom<selectDateType>({
  key: 'dateInfo',
  default: {
    data: ['', '', '', '', '', '', ''],
  },
});

export const profileImgState = atom<inputImgType>({
  key: 'profilePictureInfo',
  default: {
    data: '',
    file: new File([], 'empty.txt'),
  },
});

export const instagramLinkState = atom<inputDataType>({
  key: 'instagramLinkInfo',
  default: {
    data: '',
    verifyStatus: false,
  },
});

export const naverPlaceState = atom<inputDataType>({
  key: 'naverPlaceInfo',
  default: {
    data: '',
    verifyStatus: false,
  },
});

export const designerInfoState = atom<inputDataType>({
  key: 'deisgnerInfo',
  default: {
    data: '',
    verifyStatus: false,
  },
});

export const openLinkState = atom<inputDataType>({
  key: 'openLinkInfo',
  default: {
    data: '',
    verifyStatus: false,
  },
});
