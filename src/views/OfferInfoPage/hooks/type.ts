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
  code: number;
  message: string;
  data: {
    designerInfo: DesignerInfoProps;
    styleDetail: StyleDetailProps;
  };
}
