import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

const useSetGoogleAnalytics = () => {
  useEffect(() => {
    ReactGA.initialize(import.meta.env.VITE_GA_TRACKING_ID);
  }, []);

  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location.pathname]);
};

export default useSetGoogleAnalytics;
