import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import useSetInterceptors from '../hooks/useSetInterceptors';
import setGoogleAnalytics from '../utils/setGoogleAnalytics';
import setScreenSize from '../utils/setScreenSize';

const Settings = () => {
  useSetInterceptors();
  useEffect(() => {
    setScreenSize();
    setGoogleAnalytics();
    window.addEventListener('resize', setScreenSize);
    return () => {
      window.removeEventListener('resize', setScreenSize);
    };
  }, []);

  return <Outlet />;
};

export default Settings;
