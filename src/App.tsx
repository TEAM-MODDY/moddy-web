import { createBrowserHistory } from 'history';
import { useEffect } from 'react';
import { initialize, set as setGA, pageview } from 'react-ga';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import AgreementPage from './pages/AgreementPage';
import ApplicationPage from './pages/ApplicationPage';
import ConfirmPage from './pages/ConfirmPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import ModelInfoPage from './pages/ModelInfoPage';
import ModelOfferPage from './pages/ModelOfferPage';
import MyPage from './pages/MyPage';
import MyQuitPage from './pages/MyQuitPage';
import OfferInfoPage from './pages/OfferInfoPage';
import SignUpPage from './pages/SignUpPage';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/Theme';
import useInterceptor from './views/@common/hooks/useInterceptor';
import LoginCallback from './views/LoginPage/components/LoginCallback';
import OfferSentCompletePage from './views/ModelInfoPage/components/OfferSentCompletePage';
import CheckOfferPage from './views/OfferInfoPage/components/CheckOfferPage';

const router = createBrowserRouter([
  { path: '/', element: <MainPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/login/oauth2/code/kakao', element: <LoginCallback /> },
  { path: '/sign-up', element: <SignUpPage /> },
  { path: '/model-info', element: <ModelInfoPage /> },
  { path: '/sign-up', element: <SignUpPage /> },
  { path: '/application', element: <ApplicationPage /> },
  { path: '/offer-info', element: <OfferInfoPage /> },
  { path: '/my-page', element: <MyPage /> },
  { path: '/offer-info/check-offer', element: <CheckOfferPage /> },
  { path: '/my-quit', element: <MyQuitPage /> },
  { path: '/model-info/model-offer', element: <ModelOfferPage /> },
  { path: '/application/confirm', element: <ConfirmPage /> },
  { path: '/agreement', element: <AgreementPage /> },
  { path: '/model-info/model-offer/sent-complete', element: <OfferSentCompletePage /> },
  { path: '/error', element: <ErrorPage /> },
  { path: '/agreement', element: <AgreementPage /> },
]);

const App = () => {
  useInterceptor();

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

  const setScreenSize = () => {
    // window width 관련
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const maxWidth = Math.min(375, windowWidth);
    document.documentElement.style.setProperty('--app-max-width', `${maxWidth}px`);
  };

  useEffect(() => {
    setScreenSize();
    setGoogleAnalytics();
    window.addEventListener('resize', setScreenSize);

    return () => {
      window.removeEventListener('resize', setScreenSize);
    };
  }, []);
  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
          <GlobalStyle />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
};

export default App;
