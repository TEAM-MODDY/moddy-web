import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { IcDelete } from '../assets/icons';

import DropDown from './DropDown';

import { historyState } from '@/recoil/atoms/applicationState';

interface ServiceHistoryListItem {
  idx: number;
}

const ServiceHistoryListItem = ({ idx }: ServiceHistoryListItem) => {
  const [serviceHistory, setServiceHistory] = useRecoilState(historyState);

  const deleteHistory = () => {
    const newServiceHistoryRecords = serviceHistory.hairServiceRecords.filter((_, i) => i !== idx);
    setServiceHistory({ ...serviceHistory, hairServiceRecords: newServiceHistoryRecords });
  };

  return (
    <S.ServiceHistoryListItemLayout>
      <DropDown idx={idx} boxType="hairService" />
      <DropDown idx={idx} boxType="hairServiceTerm" />
      <button type="button" onClick={deleteHistory}>
        <IcDelete />
      </button>
    </S.ServiceHistoryListItemLayout>
  );
};

const S = {
  ServiceHistoryListItemLayout: styled.li`
    display: flex;
    gap: 0.8rem;

    width: 100%;

    & > svg {
      height: 100%;

      object-fit: cover;

      cursor: pointer;
    }
  `,
};

export default ServiceHistoryListItem;
