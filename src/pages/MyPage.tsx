import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import Header from '../views/@common/components/Header';
import MyFooter from '../views/MyPage/components/MyFooter';
import MyInfo from '../views/MyPage/components/MyInfo';
import MyMenuList from '../views/MyPage/components/MyMenuList';

import { LOGOUT_MODAL } from '@/views/@common/constants/modalText';
import useGetUser from '@/views/MyPage/hooks/useGetUser';
import usePostLogout from '@/views/MyPage/hooks/usePostLogout';

const MyPage = () => {
  const navigate = useNavigate();
  const postLogout = usePostLogout();
  const { data } = useGetUser();
  const isModel = data?.role === 'MODEL';

  return (
    data && (
      <S.MyPageLayout>
        <Header
          title="마이페이지"
          isBackBtnExist
          backFn={() => {
            navigate(-1);
          }}
        />
        <MyInfo data={data} isModel={isModel} />
        <MyMenuList setModalOpen={setModalOpen} isModel={isModel} />
        <MyFooter />
        {isModalOpen && (
          <Modal
            title={LOGOUT_MODAL.title}
            description={LOGOUT_MODAL.description}
            leftBtnText={LOGOUT_MODAL.leftBtn}
            rightBtnText={LOGOUT_MODAL.rightBtn}
            leftBtnFn={() => setModalOpen && setModalOpen(false)}
            rightBtnFn={() => {
              postLogout();
            }}
          />
        )}
      </S.MyPageLayout>
    )
  );
};

export default MyPage;

const S = {
  MyPageLayout: styled.div`
    display: flex;
    flex-direction: column;

    height: 100dvh;

    background: ${({ theme }) => theme.colors.moddy_wt};
  `,
};
