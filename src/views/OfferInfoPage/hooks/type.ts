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

export interface OfferInfoProps {
  code: number;
  messsage: string;
}
