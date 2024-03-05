import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Button from '../views/@common/components/Button';
import Header from '../views/@common/components/Header';

import Modal from '@/views/@common/components/Modal';
import ModelInfo from '@/views/@common/components/ModelInfo';
import { IcDeleteApplication } from '@/views/ModelInfoPage/assets/icons';
import ExpirationFooter from '@/views/ModelInfoPage/components/ExpirationFooter';
import useGetApplication from '@/views/ModelInfoPage/hooks/useGetApplication';

const ModelInfoPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const {
    state: { applicationId, from },
  } = useLocation();
  const isFromMyPage = from === '/my-page';
  const headerProps = {
    isBackBtnExist: true,
    title: '모델 지원 정보',
    backFn: () => navigate(-1),
    rightBtn: isFromMyPage ? <IcDeleteApplication /> : undefined,
    rightFn: isFromMyPage ? () => setModalOpen(true) : undefined,
  };

  const { data, isLoading, isError } = useGetApplication(applicationId);
  const isSend = data?.applicationInfo.isSend;
  const dateInfo = { createdDate: data?.applicationInfo.createdDate, expiredDate: data?.applicationInfo.expiredDate };

  //페이지 이동
  const navigate = useNavigate();
  const handleOnClickOffer = () => {
    navigate('/model-info/model-offer', {
      state: {
        applicationId: applicationId,
      },
    });
  };

  const handleDeleteApplication = () => {
    console.log('삭제 명령');
    // 지원서 삭제하기 api 통신 추가
  };
  return (
    !isError &&
    !isLoading &&
    data && (
      <>
        <Header {...headerProps} />
        <ModelInfo data={data} />
        {isFromMyPage ? (
          <ExpirationFooter dateInfo={dateInfo} />
        ) : (
          <Button
            id="ga-offer-btn"
            text={isSend ? '제안완료' : '제안하기'}
            isFixed={false}
            onClickFn={handleOnClickOffer}
            disabled={isSend ? true : false}
          />
        )}
        {isModalOpen && (
          <Modal
            title="지원서를 삭제할까요?"
            description="지원서가 없으면<br/>모델 제안을 받을 수 없어요"
            leftBtnText="취소"
            leftBtnFn={() => setModalOpen(false)}
            rightBtnText="확인"
            rightBtnFn={handleDeleteApplication}
          />
        )}
      </>
    )
  );
};

export default ModelInfoPage;
