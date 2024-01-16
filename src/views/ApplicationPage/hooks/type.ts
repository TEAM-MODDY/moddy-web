import { historyDetailProps } from '@/recoil/atoms/applicationState';

export interface applyResProps {
  hairLength: string;
  preferHairStyles: string[];
  hairDetail: string;
  hairServiceRecords: historyDetailProps[];
  modelImgUrl: File | undefined;
  instagramId: string;
  applicationCaptureImgUrl: File | undefined;
}

export interface applyErrorProps {
  code: number;
  message: string;
}
