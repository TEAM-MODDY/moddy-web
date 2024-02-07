import { Outlet } from 'react-router-dom';

import useSetInterceptors from '../hooks/useSetInterceptors';

const Interceptors = () => {
  useSetInterceptors();

  return <Outlet />;
};

export default Interceptors;
