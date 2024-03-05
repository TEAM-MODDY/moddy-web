import { useLocation, useNavigate } from 'react-router-dom';

import Button from '../views/@common/components/Button';
import Header from '../views/@common/components/Header';

import ModelInfo from '@/views/@common/components/ModelInfo';
import { IcDeleteApplication } from '@/views/ModelInfoPage/assets/icons';
import useGetApplication from '@/views/ModelInfoPage/hooks/useGetApplication';

const ModelInfoPage = () => {
  const { state } = useLocation();
  const applicationId = state;

  const { data, isLoading, isError } = useGetApplication(applicationId);
  const isSend = data?.applicationInfo.isSend;

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
  };
  return (
    !isError &&
    !isLoading &&
    data && (
      <>
        <Header
          isBackBtnExist={true}
          title="모델 지원 정보"
          backFn={() => navigate(-1)}
          rightBtn={<IcDeleteApplication />}
          rightFn={handleDeleteApplication}
        />
        <ModelInfo data={data} />
        <Button
          id="ga-offer-btn"
          text={isSend ? '제안완료' : '제안하기'}
          isFixed={false}
          onClickFn={handleOnClickOffer}
          disabled={isSend ? true : false}
        />
      </>
    )
  );
};

export default ModelInfoPage;
