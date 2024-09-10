import { useLocation } from 'react-router-dom';

const useTrackPageView = (step: number) => {
  const location = useLocation();
  if (typeof window.gtag === 'function') {
    window.gtag('config', import.meta.env.VITE_GA_TRACKING_ID, {
      page_path: `${location.pathname}/step${step}`,
    });
  }
};

export default useTrackPageView;
