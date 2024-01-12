import axios from 'axios';

const apiClient = axios.create({
  headers: {
    Authorization:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJpYXQiOjE3MDQ5OTg0NzksImV4cCI6MTcwNzU5MDQ3OSwiVVNFUl9JRCI6IjcifQ.wUuXuo-7AmfPwpn838vYHUeTan1IVv_B78rg3cGQ-1cvwiB3MNFbYGzWkUS_P6Lj',
  },
  baseURL: import.meta.env.VITE_APP_REDIRECT_URL,
});

export default apiClient;
