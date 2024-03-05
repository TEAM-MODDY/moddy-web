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

  //������ �̵�
  const navigate = useNavigate();
  const handleOnClickOffer = () => {
    navigate('/model-info/model-offer', {
      state: {
        applicationId: applicationId,
      },
    });
  };

  const handleDeleteApplication = () => {
    console.log('���� ���');
  };
  return (
    !isError &&
    !isLoading &&
    data && (
      <>
        <Header
          isBackBtnExist={true}
          title="�� ���� ����"
          backFn={() => navigate(-1)}
          rightBtn={<IcDeleteApplication />}
          rightFn={handleDeleteApplication}
        />
        <ModelInfo data={data} />
        <Button
          id="ga-offer-btn"
          text={isSend ? '���ȿϷ�' : '�����ϱ�'}
          isFixed={false}
          onClickFn={handleOnClickOffer}
          disabled={isSend ? true : false}
        />
      </>
    )
  );
};

export default ModelInfoPage;
