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
      await api.post(`/offer/${applicationId}`, {
        offerDetail: offerDetail,
        preferOfferConditions: conditionList,
      });
      navigate('/model-info/model-offer/sent-complete', { replace: true });
    } catch (err) {
      navigate('/error');
    }
  };

  return postApplication;
};

export default usePostApplication;
