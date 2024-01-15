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
  profileImg: string;
  name: string;
  gender: string;
  phoneNumber: string;
  isMarketingAgree: boolean;
  hairShop: {
    name: string;
    address: string;
    detailAddress: string;
  };
  portfolio: {
    instagramUrl: string;
    naverPlaceUrl: string;
  };
  introduction: string;
  kakaoOpenChatUrl: string;
  dayOffs: string[];
}
