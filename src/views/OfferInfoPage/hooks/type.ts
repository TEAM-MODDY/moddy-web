interface DesignerInfoProps {
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

interface StyleDetailProps {
  isAgree: boolean;
  preferStyle: string[];
  designerOfferDetail: string;
  modelApplicationDetail: string;
  preferOfferConditions: boolean[];
}

export interface UseGetOfferModelProps {
  designerInfo: DesignerInfoProps;
  styleDetail: StyleDetailProps;
}

export interface UseGetOfferModelRes {
  code: number;
  message: string;
  data: UseGetOfferModelProps;
}

export interface AgreeDesignerInfoProps {
  imgUrl: string;
  shopName: string;
  name: string;
  introduction: string;
}

export interface UseGetAgreeProps {
  applicationImgUrl: string;
  kakaoUrl: string;
  designerInfo: AgreeDesignerInfoProps;
}

export interface UseGetAgreeRes {
  code: number;
  message: string;
  data: UseGetAgreeProps;
}
