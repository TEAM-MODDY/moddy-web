import { historyDetailProps } from '@/recoil/atoms/applicationState';

export interface applyResProps {
  hairLength: string;
  preferHairStyles: string[];
  hairDetail: string;
  hairServiceRecords: historyDetailProps[];
  modelImgUrl: FormData;
  instagramId: string;
  applicationCaptureImgUrl: string;
}

export interface applyErrorProps {
  code: number;
  message: string;
}
