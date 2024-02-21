export interface DesignerInfoProps {
  designerId: number;
  imgUrl: string;
  shopName: string;
  name: string;
  instagramUrl: string;
  naverPlaceUrl: string;
  introduction: string;
  gender: string;
  dayoffs: string[];
  shopAddress: string;
  shopDetailAddress: string;
}

export interface ApplicationInfoProps {
  applicationId: number;
  preferStyle: string[];
  modelApplicationDetail: string;
}

export interface OfferInfoProps {
  offerId: number;
  isAgree: boolean;
  designerOfferDetail: string;
  preferOfferConditions: boolean[];
}

export interface UseGetOfferModelProps {
  designerInfo: DesignerInfoProps;
  applicationInfo: ApplicationInfoProps;
  offerInfo: OfferInfoProps;
}

export interface UseGetOfferModelRes {
  code: number;
  message: string;
  data: UseGetOfferModelProps;
}

export interface UseGetAgreeProps {
  applicationImgUrl: string;
  kakaoUrl: string;
  imgUrl: string;
  shopName: string;
  name: string;
  introduction: string;
}

export interface UseGetAgreeRes {
  code: number;
  message: string;
  data: UseGetAgreeProps;
}

export interface UserGetDownloadUrlOfferProps {
  applicationDownloadUrl: string;
}
