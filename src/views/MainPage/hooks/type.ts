export interface ModelResponse {
  page: number;
  size: number;
  status: string;
  userName: string;
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
  hairModelApplications: {
    applicationId: number;
    name: string;
    age: number;
    imgUrl: string;
    gender: string;
    preferHairStyles: string[];
  }[];
}
