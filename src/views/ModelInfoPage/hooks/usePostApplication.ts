import { useNavigate } from 'react-router-dom';

import { CONDITION_LIST } from '../constants/CONDITION_LIST';

import api from '@/views/@common/hooks/api';

const usePostApplication = (applicationId: number, offerDetail: string, preferOfferConditions: boolean[]) => {
  const navigate = useNavigate();

  const conditionList = preferOfferConditions
    .map((bool, idx) => (bool ? CONDITION_LIST[idx] : ''))
    .filter((val) => val !== '');

  const postApplication = async () => {
    try {
      await api.post(`/designer/${applicationId}/offer`, {
        offerDetail: offerDetail,
        preferOfferConditions: conditionList,
      });
      navigate('/model-info/model-offer/sent-complete');
    } catch (err) {
      navigate('/error');
      console.log(err);
    }
  };

  return postApplication;
};

export default usePostApplication;
