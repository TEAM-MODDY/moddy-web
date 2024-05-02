import { atom } from 'recoil';

export interface applyStepType {
  current: number;
  total: number;
}

export const applyStepState = atom<applyStepType>({
  key: 'applyStep',
  default: {
    current: 1,
    total: 4,
  },
});

export interface hairStyleType {
  length: string;
  preference: Array<string>;
}

export const hairStyleState = atom<hairStyleType>({
  key: 'hairStyle',
  default: {
    length: '',
    preference: [],
  },
});

export interface stringInputType {
  data: string;
}

export const deatiledStyleState = atom<stringInputType>({
  key: 'detailedStyle',
  default: {
    data: '',
  },
});

export interface historyDetailProps {
  hairService: string;
  hairServiceTerm: string;
}

export interface historyType {
  hairServiceRecords: historyDetailProps[];
}

export const historyState = atom<historyType>({
  key: 'history',
  default: {
    hairServiceRecords: [],
  },
});

export interface profileType {
  modelImgUrl: string;
  modelImgData: File;
  instagramId: string;
}

export const profileState = atom<profileType>({
  key: 'profile',
  default: {
    modelImgUrl: '',
    modelImgData: new File([], 'empty.text'),
    instagramId: '',
  },
});

export const applicationCaptureImgUrlState = atom<File>({
  key: 'applicationCaptureImgUrl',
  default: new File([], 'empty.text'),
});
