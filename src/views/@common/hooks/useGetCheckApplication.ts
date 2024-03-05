import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';

import api from './api';

const useGetCheckApplication = () => {
  const [status, setStatus] = useState(0);
  const getCheckApplication = async () => {
    try {
      const response = await api.get('/application/check');
      setStatus(response.status);
    } catch (err) {
      isAxiosError(err) && setStatus(err.response?.status || 0);
    }
  };

  useEffect(() => {
    getCheckApplication();
  }, []);

  return status;
};

export default useGetCheckApplication;
