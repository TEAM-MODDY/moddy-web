interface HairServiceRecord {
  hairServiceTerm: string;
  hairService: string;
}

export interface ApplicationInfo {
  applicationId: number;
  modelImgUrl: string;
  hairLength: string;
  preferHairstyles: string[];
  hairServiceRecords: HairServiceRecord[];
  hairDetail: string;
  isSend: boolean;
  instagramId: string;
}

interface ModelInfo {
  modelId: number;
  name: string;
  age: string;
  gender: string;
  preferRegions: string[];
}

export interface ModelInfoPageProps {
  applicationInfo: ApplicationInfo;
  modelInfo: ModelInfo;
}
