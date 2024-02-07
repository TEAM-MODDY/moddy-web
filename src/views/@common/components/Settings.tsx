import { Outlet } from 'react-router-dom';

import useSetGoogleAnalytics from '../hooks/useSetGoogleAnalytics';
import useSetInterceptors from '../hooks/useSetInterceptors';
import useSetScreenSize from '../hooks/useSetScreenSize';

const Settings = () => {
  useSetInterceptors();
  useSetScreenSize();
  useSetGoogleAnalytics();

  return <Outlet />;
};

export default Settings;
