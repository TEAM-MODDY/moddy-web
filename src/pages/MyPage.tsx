import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../views/@common/components/Header';
import MyInfo from '../views/MyPage/components/MyInfo';
import MyMenuList from '../views/MyPage/components/MyMenuList';

const MyPage = () => {
  const navigate = useNavigate();

  return (
    <S.MyPageLayout>
      <Header
        title="마이페이지"
        isBackBtnExist
        backFn={() => {
          navigate(-1);
        }}
      />
      <MyInfo />
      <MyMenuList />
      <S.MyPageFooter>
        <a href="https://www.google.co.kr">개발자 정보</a>
      </S.MyPageFooter>
    </S.MyPageLayout>
  );
};

export default MyPage;

const S = {
  MyPageLayout: styled.div`
    display: flex;
    flex-direction: column;
  `,
  MyPageFooter: styled.footer`
    position: fixed;
    bottom: 0;

    width: 100%;
    margin-bottom: 3.8rem;

    text-align: center;

    & > a {
      border-bottom: 1px solid ${({ theme }) => theme.colors.moddy_gray50};

      color: ${({ theme }) => theme.colors.moddy_gray50};
      text-decoration: none;
      ${({ theme }) => theme.fonts.Body04};
    }
  `,
};
