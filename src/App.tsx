import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import AgreementPage from './pages/AgreementPage';
import ApplicationConfirmPage from './pages/ApplicationConfirmPage';
import ApplicationPage from './pages/ApplicationPage';
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
import Settings from './views/@common/components/Settings';
import LoginCallback from './views/LoginPage/components/LoginCallback';
import OfferSentCompletePage from './views/ModelInfoPage/components/OfferSentCompletePage';
import MyAccountPage from './views/MyPage/components/MyAccountPage';
import CheckOfferPage from './views/OfferInfoPage/components/CheckOfferPage';
import EditInfoPage from './views/MyPage/components/EditInfoPage';

const router = createBrowserRouter([
  {
    element: <Settings />,
    children: [
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
      { path: '/application/confirm', element: <ApplicationConfirmPage /> },
      { path: '/agreement', element: <AgreementPage /> },
      { path: '/model-info/model-offer/sent-complete', element: <OfferSentCompletePage /> },
      { path: '/error', element: <ErrorPage /> },
      { path: '/agreement', element: <AgreementPage /> },
      { path: '/my-account', element: <MyAccountPage /> },
      { path: '/edit-profile', element: <EditInfoPage /> },
    ],
  },
]);

const App = () => {
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
