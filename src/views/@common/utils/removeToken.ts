const removeToken = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('사용자 타입');
};

export default removeToken;
