const removeToken = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('recoil-persist');
};

export default removeToken;
