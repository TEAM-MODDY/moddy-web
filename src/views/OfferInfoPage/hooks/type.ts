export interface DesignerInfoProps {
  imgUrl: string;
  shopName: string;
  name: string;
  instagramUrl: string;
  naverPlaceUrl: string;
  introduction: string;
  gender: string;
  dayoffs: Array<string>;
  shopAddress: string;
  shopDetailAddress: string;
}

export interface StyleDetailProps {
  isAgree: boolean;
  preferStyle: Array<string>;
  designerOfferDetail: string;
  modelApplicationDetail: string;
  preferOfferConditions: Array<boolean>;
}
