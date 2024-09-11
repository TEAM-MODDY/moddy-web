import { useLocation } from 'react-router-dom';

const useTrackPageView = (step: number) => {
  const location = useLocation();
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: `${location.pathname}/step${step}`,
    });
  }
};

export default useTrackPageView;
