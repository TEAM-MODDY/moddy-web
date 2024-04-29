export interface RegionData {
  id: number;
  name: string;
}

export interface RegionListResponse {
  data: {
    data: RegionData[];
  };
}

export interface ModelUserInfo {
  name: string;
  year: string;
  gender: string;
  phoneNumber: string;
  preferRegions: string[];
}

export interface ModelUserInfoResponse {
  data: {
    data: ModelUserInfo;
  };
}
