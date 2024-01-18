import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ApplyUserProps } from './type';

import api from '@/views/@common/hooks/api';

const useGetUser = () => {
  const [data, setData] = useState<ApplyUserProps>();
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await api.get('/model/application/user', {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJpYXQiOjE3MDU0MDQzMjIsImV4cCI6MTcwNzk5NjMyMiwiVVNFUl9JRCI6IjQifQ.Dr0QFpx2TtD-zqNclP3H1sIZBUuVRreVZxZmmTfVt3Xpcl6nR_xkDPl4yXlp6QgL`,
        },
      });
      setData(response.data.data);
    } catch (err) {
      console.log(err);
      navigate('/error');
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return data;
};

export default useGetUser;
