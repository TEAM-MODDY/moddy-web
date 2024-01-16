export interface RegionResponse {
  data: {
    data: {
      id: number;
      name: string;
    }[];
  };
}
export interface ModelSignUpRequest {
  name: string;
  year: string;
  gender: string;
  phoneNumber: string;
  isMarketingAgree: boolean;
  preferRegions: number[];
}
export interface PhoneNumberRequest {
  phoneNumber: string;
}

export interface VerifyPhoneNumberRequest {
  phoneNumber: string;
  verifyCode: string;
}

export interface DesignerSignUpRequest {
  profileImg: FormData;
  designerInfo: string;
}
