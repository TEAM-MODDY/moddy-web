interface HairShop {
  name: string;
  address: string;
  detailAddress: string;
}

interface Portfolio {
  instagramUrl: string;
  naverPlaceUrl: string;
}

export interface UseGetDesignerProps {
  profileImgUrl: string;
  introduction: string;
  name: string;
  gender: string;
  phoneNumber: string;
  hairShop: HairShop;
  dayOffs: string[];
  portfolio: Portfolio;
  kakaoOpenChatUrl: string;
}
