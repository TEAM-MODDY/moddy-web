import { AxiosError } from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '@/views/@common/hooks/api';
import { UseGetDesignerProps } from '@/views/SignUpPage/type';

const useGetUserEdit = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState<UseGetDesignerProps>();
  const [gender, setGender] = useState('');
  const [dayOff, setDayOff] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState<AxiosError>();

  const getEditResponse = async () => {
    try {
      const response = await api.get(`/designer`);
      setInput(response.data.data);
      setGender(response.data.data.gender === '여성' ? 'FEMALE' : 'MALE');
      setDayOff(response.data.data.dayOffs);
    } catch (err) {
      if (err instanceof AxiosError) setError(err);
      else {
        console.log(err);
      }
      navigate('/error');
    }
    setLoading(false);
  };

  useEffect(() => {
    getEditResponse();
  }, []);
  return { input, gender, dayOff, isLoading, isError };
};

export default useGetUserEdit;
