export interface RegionData {
  id: number;
  name: string;
}

export interface RegionListResponse {
  data: {
    data: RegionData[];
  };
}

export interface UserInfo {
  name: string;
  year: string;
  gender: string;
  phoneNumber: string;
  preferRegions: string[];
}
