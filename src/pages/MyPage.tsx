import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import Header from '../views/@common/components/Header';
import MyFooter from '../views/MyPage/components/MyFooter';
import MyInfo from '../views/MyPage/components/MyInfo';
import MyMenuList from '../views/MyPage/components/MyMenuList';

import Modal from '@/views/@common/components/Modal';
import { APPLY_MODAL } from '@/views/@common/constants/modalText';
import useGetUser from '@/views/MyPage/hooks/useGetUser';

const MyPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const { data } = useGetUser();
  const isModel = data?.role === 'MODEL';

  return (
    data && (
      <S.MyPageLayout>
        <Header title="마이페이지" isBackBtnExist backFn={() => navigate('/')} />
        <MyInfo data={data} isModel={isModel} />
        <MyMenuList setModalOpen={setModalOpen} isModel={isModel} />
        <MyFooter />
        {isModalOpen && (
          <Modal
            title={APPLY_MODAL.title}
            description={APPLY_MODAL.description}
            leftBtnText={APPLY_MODAL.leftBtn}
            rightBtnText={APPLY_MODAL.rightBtn}
            leftBtnFn={() => setModalOpen && setModalOpen(false)}
            rightBtnFn={() => {
              navigate('/application');
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
