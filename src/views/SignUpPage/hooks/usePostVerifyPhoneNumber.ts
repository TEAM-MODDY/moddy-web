import { VerifyPhoneNumberRequest } from './type';

import api from '@/views/@common/hooks/api';

const usePostVerifyPhoneNumber = (phoneNumber: string, verifyCode: string) => {
  const postVerifyPhoneNumber = async () => {
    const requestBody: VerifyPhoneNumberRequest = {
      phoneNumber: phoneNumber,
      verifyCode: verifyCode,
    };
    try {
      const data = await api.post('/auth/phoneNumber/verify', requestBody);
      console.log(data);
      return true;
    } catch (err) {
      return false;
    }
  };

  return { postVerifyPhoneNumber };
};

export default usePostVerifyPhoneNumber;
