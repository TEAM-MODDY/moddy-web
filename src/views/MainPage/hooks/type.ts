export interface ModelResponse {
  page: number;
  size: number;
  status: string;
  name: string;
  total: number;
  offers: {
    offerId: number;
    imgUrl: string;
    name: string;
    shopName: string;
    conditions: string[];
    isClicked: boolean;
  }[];
}

export interface DesignerResponse {
  page: number;
  size: number;
  name: string;
  total: number;
  hairModelApplications: {
    applicationId: number;
    name: string;
    age: number;
    imgUrl: string;
    gender: string;
    preferHairStyles: string[];
  }[];
}
