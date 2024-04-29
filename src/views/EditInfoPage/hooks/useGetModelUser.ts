import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserInfo } from './type';

import api from '@/views/@common/hooks/api';

const useGetModelUser = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<UserInfo>();

  const fetchData = async () => {
    try {
      const response = await api.get('/model');
      setUserInfo(response.data.data);
    } catch (err) {
      navigate('/error');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return userInfo;
};

export default useGetModelUser;
