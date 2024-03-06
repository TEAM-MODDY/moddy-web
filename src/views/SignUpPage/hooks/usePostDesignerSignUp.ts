import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { DesignerInfo } from './type';

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
  const setSessionUserType = useSetRecoilState(userTypeState);

  const tempUserType = useRecoilValue(tempUserTypeState);
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
    const signUpData: DesignerInfo = {
      name: name,
      gender: gender,
      phoneNumber: phoneNumber.data,
      isMarketingAgree: isMarketingAgree,
      hairShop: {
        name: hairShopName,
        address: hairShopAddress,
        detailAddress: hairShopDetailAddress,
      },
      portfolio: {
        instagramUrl: instagramUrl,
        naverPlaceUrl: naverPlaceUrl,
      },
      introduction: introduction,
      kakaoOpenChatUrl: kakaoOpenChatUrl,
      dayOffs: dayOffs.data.filter((item) => item),
    };

    const requestBody = new FormData();
    const jsonSignUpData = JSON.stringify(signUpData);
    const deisgnerInfo = new Blob([jsonSignUpData], { type: 'application/json' });
    requestBody.append('designerInfo', deisgnerInfo);
    requestBody.append('profileImg', profileImg.file);

    try {
      await api.post('/designer', requestBody, {
        headers: {
          'Content-Type': `multipart/form-data`,
        },
      });
      setSessionUserType(tempUserType);
      navigate('/');
    } catch (err) {
      console.log(err);
      navigate('/error');
    }
  };

  return postDesignerSignUp;
};

export default usePostDesignerSignUp;
