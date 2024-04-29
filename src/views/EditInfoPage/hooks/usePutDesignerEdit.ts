import { useNavigate } from 'react-router-dom';

import api from '@/views/@common/hooks/api';
interface infoProps {
  profileImg: string;
  introduction: string;
  name: string;
  gender: string;
  shopName: string;
  address: string;
  dayOff: string[];
  detailAddress: string;
  instagramUrl: string;
  naverPlaceUrl: string;
  OpenChatUrl: string;
}

const usePutDesignerEdit = (imgFile: File | null, info: infoProps) => {
  const navigate = useNavigate();

  const filteredArray = info.dayOff.filter((value) => value !== '');

  const editInfoData = {
    introduction: info.introduction,
    name: info.name,
    gender: info.gender,
    hairShop: {
      name: info.shopName,
      address: info.address,
      detailAddress: info.detailAddress,
    },
    dayOffs: filteredArray,
    portfolio: {
      instagramUrl: info.instagramUrl,
      naverPlaceUrl: info.naverPlaceUrl,
    },
    kakaoOpenChatUrl: info.OpenChatUrl,
  };

  const requestBody = new FormData();
  const jsonEditData = JSON.stringify(editInfoData);
  const designerEditInfo = new Blob([jsonEditData], { type: 'application/json' });
  requestBody.append('designerUpdateInfo', designerEditInfo);
  if (imgFile) {
    requestBody.append('profileImg', imgFile);
  }

  const putInfo = async () => {
    try {
      await api.put(`/designer`, requestBody, {
        headers: {
          'Content-Type': `multipart/form-data`,
        },
      });
      navigate('/my-page');
    } catch (err) {
      console.log(err);
      navigate('/error');
    }
  };

  return {
    putInfo,
  };
};

export default usePutDesignerEdit;
