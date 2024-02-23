import { useNavigate } from 'react-router-dom';

import { PhoneNumberRequest } from './type';

import api from '@/views/@common/hooks/api';

const usePostPhoneNumber = (phoneNumber: string) => {
  const navigate = useNavigate();

  const postPhoneNumber = async () => {
    const requestBody: PhoneNumberRequest = {
      phoneNumber: phoneNumber,
    };
    try {
      await api.post('/auth/phoneNumber', requestBody);
    } catch (err) {
      navigate('/error');
    }
  };

  return { postPhoneNumber };
};

export default usePostPhoneNumber;
