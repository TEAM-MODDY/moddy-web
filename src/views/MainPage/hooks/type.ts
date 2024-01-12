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
