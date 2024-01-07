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
    </S.MyPageLayout>
  );
};

export default MyPage;

const S = {
  MyPageLayout: styled.div`
    display: flex;
    flex-direction: column;
  `,
};
