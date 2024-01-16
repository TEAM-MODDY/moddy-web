import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import Button from '../../@common/components/Button';
import Header from '../../@common/components/Header';
import { INFO_MESSAGE } from '../constants/message';

import ServiceHistoryListItem from './ServiceHistoryListItem';

import { applyStepState, historyDetailProps, historyState } from '@/recoil/atoms/applicationState';
import ProgressBar from '@/views/@common/components/ProgressBar';

const ServiceHistory = () => {
  const MAX_LENGTH = 3;

  const [step, setStep] = useRecoilState(applyStepState);
  const [serviceHistory, setServiceHistory] = useRecoilState(historyState);
  const { hairServiceRecords } = serviceHistory;
  const navigate = useNavigate();

  const addHistory = () => {
    if (hairServiceRecords.length < MAX_LENGTH) {
      const tempServiceHistoryList: historyDetailProps[] = [
        ...hairServiceRecords,
        { hairService: '', hairServiceTerm: '' },
      ];
      setServiceHistory({ ...serviceHistory, hairServiceRecords: tempServiceHistoryList });
    }
  };

  return (
    <S.ServiceHistoryLayout>
      <Header
        title={INFO_MESSAGE.TITLE}
        isBackBtnExist={true}
        isCloseBtnExist={true}
        backFn={() => {
          setStep({ ...step, current: step.current - 1 });
        }}
        closeFn={() => {
          navigate(`/`);
        }}
      />
      <ProgressBar whole={step.total} current={step.current} />
      <S.Title>
        <h2>{INFO_MESSAGE.SERVICE_TITLE}</h2>
        <h3>{INFO_MESSAGE.SERVICE_SUBTITLE}</h3>
      </S.Title>
      <S.ServiceHistoryList>
        {hairServiceRecords.map((item, idx: number) =>
          idx < hairServiceRecords.length ? (
            <ServiceHistoryListItem key={'history' + item.hairService + item.hairServiceTerm + idx} idx={idx} />
          ) : null,
        )}
      </S.ServiceHistoryList>
      <S.AddHistoryBtn type="button" onClick={addHistory}>
        {INFO_MESSAGE.ADD_HISTORY}
      </S.AddHistoryBtn>
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
    margin-top: 8.5rem;
    padding: 0 1.5rem;
  `,

  Title: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    width: 100%;

    & > h2 {
      color: ${({ theme }) => theme.colors.moddy_bk};

      ${({ theme }) => theme.fonts.Headline01};
    }

    & > h3 {
      color: ${({ theme }) => theme.colors.moddy_gray50};

      ${({ theme }) => theme.fonts.Body02};
    }
  `,

  ServiceHistoryList: styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    justify-content: space-between;
    position: relative;

    width: 100%;
    margin-top: 2rem;
  `,

  AddHistoryBtn: styled.button`
    width: 100%;
    height: 5.2rem;
    margin-top: 1.2rem;
    border: 1.5px dashed ${({ theme }) => theme.colors.moddy_blue3};
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.moddy_wt};

    color: ${({ theme }) => theme.colors.moddy_blue2};

    ${({ theme }) => theme.fonts.Body02};
  `,
};
export default ServiceHistory;
