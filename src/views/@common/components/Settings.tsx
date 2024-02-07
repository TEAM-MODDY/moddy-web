import { Outlet } from 'react-router-dom';

import useSetInterceptors from '../hooks/useSetInterceptors';

const Settings = () => {
  useSetInterceptors();

  return <Outlet />;
};

export default Settings;
