import { useNavigate } from 'react-router-dom';

import api from '@/views/@common/hooks/api';

const useDeleteApplication = (setToastOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
  const navigate = useNavigate();

  const deleteApplication = async () => {
    try {
      await api.delete('/application');
      setToastOpen(true);
      setTimeout(() => {
        navigate(-1);
      }, 2000);
    } catch (err) {
      navigate('/error');
    }
  };

  return deleteApplication;
};

export default useDeleteApplication;
