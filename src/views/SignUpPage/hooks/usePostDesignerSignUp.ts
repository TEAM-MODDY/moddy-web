import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { DesignerSignUpRequest } from './type';

import {
  marketingState,
  genderState,
  nameState,
  phoneNumberState,
  tempUserTypeState,
  userTypeState,
  shopInfoState,
  addressState,
  detailShopInfoState,
  instagramLinkState,
  naverPlaceState,
  designerInfoState,
  openLinkState,
  dateState,
  profileImgState,
} from '@/recoil/atoms/signUpState';
import api from '@/views/@common/hooks/api';

const usePostDesignerSignUp = () => {
  const navigate = useNavigate();

  const tempUserType = useRecoilValue(tempUserTypeState);
  const setSessionUserType = useSetRecoilState(userTypeState);

  const profileImg = useRecoilValue(profileImgState);
  const name = useRecoilValue(nameState);
  const gender = useRecoilValue(genderState);
  const phoneNumber = useRecoilValue(phoneNumberState);
  const isMarketingAgree = useRecoilValue(marketingState);

  const hairShopName = useRecoilValue(shopInfoState);
  const hairShopAddress = useRecoilValue(addressState);
  const hairShopDetailAddress = useRecoilValue(detailShopInfoState);

  const instagramUrl = useRecoilValue(instagramLinkState);
  const naverPlaceUrl = useRecoilValue(naverPlaceState);

  const introduction = useRecoilValue(designerInfoState);
  const kakaoOpenChatUrl = useRecoilValue(openLinkState);

  const dayOffs = useRecoilValue(dateState);

  const postDesignerSignUp = async () => {
    const requestBody: DesignerSignUpRequest = {
      profileImg: profileImg.data,
      name: name.data,
      gender: gender.data,
      phoneNumber: phoneNumber.data,
      isMarketingAgree: isMarketingAgree,
      hairShop: {
        name: hairShopName.data,
        address: hairShopAddress.data,
        detailAddress: hairShopDetailAddress.data,
      },
      portfolio: {
        instagramUrl: instagramUrl.data,
        naverPlaceUrl: naverPlaceUrl.data,
      },
      introduction: introduction.data,
      kakaoOpenChatUrl: kakaoOpenChatUrl.data,
      dayOffs: dayOffs.data.filter((item) => item),
    };
    console.log(requestBody);
    // try {
    //   const data = await api.post('/auth/signup/designer', requestBody, {
    //     headers: {
    //       Authorization: `Bearer ~`,
    //     },
    //   });
    //   console.log(data);
    //   setSessionUserType(tempUserType);
    //   navigate('/');
    // } catch (err) {
    //   navigate('/error');
    // }
  };

  return postDesignerSignUp;
};

export default usePostDesignerSignUp;
