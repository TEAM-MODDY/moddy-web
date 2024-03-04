import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import Button from '../views/@common/components/Button';
import Header from '../views/@common/components/Header';

import ModelInfo from '@/views/@common/components/ModelInfo';
import useGetApplication from '@/views/ModelInfoPage/hooks/useGetApplication';

const ModelInfoPage = () => {
  const { state } = useLocation();
  const offerId = state;

  const { data, isLoading, isError } = useGetApplication(offerId);
  const isSend = data?.applicationInfo.isSend;

  //페이지 이동
  const navigate = useNavigate();
  const handleOnClickOffer = () => {
    navigate('/model-info/model-offer', {
      state: {
        applicationId: offerId,
      },
    });
  };

  return (
    !isError &&
    !isLoading &&
    data && (
      <>
        <Header isBackBtnExist={true} title="모델 지원 정보" backFn={() => navigate(-1)} />
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

const S = {
  ModelInfoLayout: styled.section`
    display: grid;

    width: 100%;
    margin: 5rem 0 4.9rem;
    padding: 0 1.6rem;

    place-items: center;
  `,
  ImageBox: styled.img`
    width: 100%;
    height: 34.4rem;
    margin: 1.6rem 0;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.colors.moddy_gray05};

    object-fit: cover;
  `,
};

export default ModelInfoPage;
