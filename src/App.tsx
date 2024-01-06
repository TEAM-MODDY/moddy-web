import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import ApplicationPage from './pages/ApplicationPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import ModelInfoPage from './pages/ModelInfoPage';
import MyPage from './pages/MyPage';
import OfferInfoPage from './pages/OfferInfoPage';
import SignUpPage from './pages/SignUpPage';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/Theme';

const router = createBrowserRouter([
  { path: '/', element: <MainPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignUpPage /> },
  { path: '/modelinfo', element: <ModelInfoPage /> },
  { path: '/application', element: <ApplicationPage /> },
  { path: '/offerinfo', element: <OfferInfoPage /> },
  { path: '/mypage', element: <MyPage /> },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default App;
