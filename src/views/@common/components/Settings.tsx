import { Outlet } from 'react-router-dom';

import useSetInterceptors from '../hooks/useSetInterceptors';
import useSetScreenSize from '../hooks/useSetScreenSize';

const Settings = () => {
  useSetInterceptors();
  useSetScreenSize();

  return <Outlet />;
};

export default Settings;
