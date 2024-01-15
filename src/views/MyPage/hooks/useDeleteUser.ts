import { useNavigate } from 'react-router-dom';

import api, { removeToken } from '@/views/@common/hooks/api';

const useDeleteUser = () => {
  const navigate = useNavigate();

  const deleteUser = async () => {
    try {
      await api.delete('/user', {
        headers: {
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJpYXQiOjE3MDQ5OTgyOTYsImV4cCI6MTcwNzU5MDI5NiwiVVNFUl9JRCI6IjYifQ.WPDNRjbbAnKbOwSr2T3XkdmvzWSpIJrh3Plluh2c-ak3LTYSLnpOUxCgk2a3xmQg',
        },
      });
      //removeToken();
      navigate('/');
    } catch (err) {
      navigate('/error');
    }
  };

  return deleteUser;
};

export default useDeleteUser;
