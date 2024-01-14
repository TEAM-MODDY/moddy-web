import { useNavigate } from 'react-router-dom';

import api from '@/views/@common/hooks/api';

const usePostApplication = (applicationId: number, offerDetail: string, preferOfferConditions: boolean[]) => {
  const navigate = useNavigate();

  const CONDITION_LIST = ['CAMERA', 'SNS', 'FREE', 'MASK', 'PHOTOSHOP', 'SMALLPAY'];
  const conditionList = preferOfferConditions
    .map((bool, idx) => (bool ? CONDITION_LIST[idx] : ''))
    .filter((val) => val !== '');
  const postApplication = async () => {
    try {
      await api.post(
        `/designer/${applicationId}/offer`,
        {
          offerDetail: offerDetail,
          preferOfferConditions: conditionList,
        },
        {
          headers: {
            Authorization: 'Bearer ~',
          },
        },
      );
      navigate('/model-info/model-offer/sent-complete');
    } catch (err) {
      navigate('/error');
      console.log(err);
    }
  };

  return postApplication;
};

export default usePostApplication;
