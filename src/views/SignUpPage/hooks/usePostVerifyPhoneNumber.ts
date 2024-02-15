import { VerifyPhoneNumberRequest } from './type';

import api from '@/views/@common/hooks/api';

const usePostVerifyPhoneNumber = (phoneNumber: string, verifyCode: string) => {
  const postVerifyPhoneNumber = async () => {
    const requestBody: VerifyPhoneNumberRequest = {
      phoneNumber: phoneNumber,
      verifyCode: verifyCode,
    };
    try {
      await api.post('/auth/phoneNumber/verify', requestBody);
      return true;
    } catch (err) {
      return false;
    }
  };

  return { postVerifyPhoneNumber };
};

export default usePostVerifyPhoneNumber;
