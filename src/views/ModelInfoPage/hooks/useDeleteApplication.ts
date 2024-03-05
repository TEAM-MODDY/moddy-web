import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '@/views/@common/hooks/api';

const useDeleteApplication = () => {
  const [isSuccess, setSuccess] = useState(false);
  const navigate = useNavigate();

  const deleteApplication = async () => {
    try {
      await api.delete('/application');
      setSuccess(true);
    } catch (err) {
      navigate('/error');
      setSuccess(false);
    }
  };

  return { isSuccess, deleteApplication };
};

export default useDeleteApplication;
