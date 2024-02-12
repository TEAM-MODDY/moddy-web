import { createBrowserHistory } from 'history';
import { useEffect } from 'react';
import { initialize, set as setGA, pageview } from 'react-ga';

const useSetGoogleAnalytics = () => {
  const setGoogleAnalytics = () => {
    // google analytics 관련
    const gaTrackingID = import.meta.env.VITE_GA_TRACKING_ID;
    initialize(gaTrackingID, { debug: true });
    const history = createBrowserHistory();
    history.listen((response) => {
      setGA({ page: response.location.pathname });
      pageview(response.location.pathname);
    });
  };

  useEffect(() => {
    setGoogleAnalytics();
  }, []);
};

export default useSetGoogleAnalytics;
