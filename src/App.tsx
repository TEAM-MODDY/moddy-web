import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AgreementPage from './pages/AgreementPage';
import ApplicationPage from './pages/ApplicationPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import ModelInfo from './pages/ModelInfoPage';
import MyPage from './pages/MyPage';
import MyQuitPage from './pages/MyQuitPage';
import OfferInfoPage from './pages/OfferInfoPage';
import SignUpPage from './pages/SignUpPage';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/Theme';
import ConfirmPage from './views/ApplicationPage/pages/ConfirmPage';
import LoginCallback from './views/LoginPage/components/LoginCallback';
import ModelOfferPage from './views/ModelInfoPage/components/ModelOfferPage';
import OfferSentCompletePage from './views/ModelInfoPage/components/OfferSentCompletePage';
import CheckOffer from './views/OfferInfoPage/components/CheckOffer';

const router = createBrowserRouter([
  { path: '/', element: <MainPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/login/oauth2/code/kakao', element: <LoginCallback /> },
  { path: '/sign-up', element: <SignUpPage /> },
  { path: '/model-info', element: <ModelInfo /> },
  { path: '/sign-up', element: <SignUpPage /> },
  { path: '/application', element: <ApplicationPage /> },
  { path: '/offer-info', element: <OfferInfoPage /> },
  { path: '/my-page', element: <MyPage /> },
  { path: '/offer-info/check-offer', element: <CheckOffer /> },
  { path: '/my-quit', element: <MyQuitPage /> },
  { path: '/model-info/model-offer', element: <ModelOfferPage /> },
  { path: '/application/confirm', element: <ConfirmPage /> },
  { path: '/agreement', element: <AgreementPage /> },
  { path: '/model-info/model-offer/sent-complete', element: <OfferSentCompletePage /> },
  { path: '/error', element: <ErrorPage /> },
]);

const App = () => {
  const setScreenSize = () => {
    // window width 관련
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const maxWidth = Math.min(375, windowWidth);
    document.documentElement.style.setProperty('--app-max-width', `${maxWidth}px`);
  };

  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', setScreenSize);

    return () => {
      window.removeEventListener('resize', setScreenSize);
    };
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default App;
