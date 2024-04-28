import { AxiosError } from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { UseGetDesignerProps } from '../utils/type';

import { DAYS } from '@/views/@common/constants/days';
import api from '@/views/@common/hooks/api';

const useGetDesignerEdit = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState<UseGetDesignerProps>();
  const [gender, setGender] = useState('');
  const [dayOff, setDayOff] = useState(Array(7).fill(''));
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState<AxiosError>();

  const getEditResponse = async () => {
    try {
      const response = await api.get(`/designer`);
      setInputData(response.data.data);
      setGender(response.data.data.gender === '여성' ? 'FEMALE' : 'MALE');
      setDayOff(
        Array(7)
          .fill('')
          .map((_, index) =>
            response.data.data.dayOffs.includes(Object.keys(DAYS)[index]) ? DAYS[Object.keys(DAYS)[index]] : '',
          ),
      );
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
  return { inputData, gender, dayOff, isLoading, isError };
};

export default useGetDesignerEdit;
