import { createBrowserHistory } from 'history';
import { initialize, set as setGA, pageview } from 'react-ga';

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

export default setGoogleAnalytics;
