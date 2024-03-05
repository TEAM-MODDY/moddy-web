import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';

import api from './api';

const useGetCheckApplication = () => {
  const getCheckApplication = async () => {
    try {
      const response = await api.get('/application/check');
      return response.data;
    } catch (err) {
      if (isAxiosError(err)) {
        return err.response?.data;
      }
    }
  };

  return getCheckApplication;

export default useGetCheckApplication;
