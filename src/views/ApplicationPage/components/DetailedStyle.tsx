import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import Button from '../../@common/components/Button';
import Header from '../../@common/components/Header';
import ProgressBar from '../../@common/components/ProgressBar';
import TextArea200 from '../../@common/components/TextArea200';
import { INFO_MESSAGE } from '../constants/message';

import { applyStepState, deatiledStyleState } from '@/recoil/atoms/applicationState';

const DetailedStyle = () => {
  const [step, setStep] = useRecoilState(applyStepState);
  const [hairDetail, setHairDetail] = useRecoilState(deatiledStyleState);
  const navigate = useNavigate();

  return (
    <S.ServiceHistoryLayout>
      <Header
        isBackBtnExist={true}
        isCloseBtnExist={true}
        title={INFO_MESSAGE.TITLE}
        backFn={() => {
          setStep({ ...step, current: step.current - 1 });
        }}
        closeFn={() => {
          navigate(`/`);
        }}
      />
      <ProgressBar whole={step.total} current={step.current} />
      <S.Title>
        <h2>{INFO_MESSAGE.DETAIL_TITLE}</h2>
        <h3>{INFO_MESSAGE.DETAIL_SUBTITLE}</h3>
      </S.Title>
      <TextArea200
        placeholderText={INFO_MESSAGE.DETAIL_INPUT}
        initialValue={hairDetail.data}
        onChangeFn={(value) => {
          setHairDetail({ data: value });
        }}
      />
      <Button
        text={INFO_MESSAGE.NEXT}
        isFixed={true}
        onClickFn={() => {
          setStep({ ...step, current: step.current + 1 });
        }}
      />
    </S.ServiceHistoryLayout>
  );
};

const S = {
  ServiceHistoryLayout: styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    margin-top: 7.54rem;
    padding: 0 1.5rem;
  `,

  Title: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    width: 100%;
    margin: 2.2rem 0 1.2rem;

    & > h2 {
      color: ${({ theme }) => theme.colors.moddy_bk};

      ${({ theme }) => theme.fonts.Headline01};
    }

    & > h3 {
      color: ${({ theme }) => theme.colors.moddy_gray50};

      ${({ theme }) => theme.fonts.Body02};
    }
  `,
};

export default DetailedStyle;
