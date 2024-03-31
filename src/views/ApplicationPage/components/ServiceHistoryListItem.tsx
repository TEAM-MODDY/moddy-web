import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { IcDelete } from '../assets/icons';
import { SELECT_PERIOD, SELECT_SERVICE } from '../constants/select';

import DropDown from './DropDown';

import { historyState } from '@/recoil/atoms/applicationState';

interface ServiceHistoryListItem {
  idx: number;
  // currentDropDown: number | null;
  // setCurrentDropDown: React.Dispatch<React.SetStateAction<number | null>>;
}

const ServiceHistoryListItem = ({ idx }: ServiceHistoryListItem) => {
  const [serviceHistory, setServiceHistory] = useRecoilState(historyState);
  // const [clickedDropdown, setClickedDropdown] = useState<string | null>(null);

  // useEffect(() => {
  //   if (currentDropDown !== idx) setClickedDropdown(null);
  // }, [currentDropDown]);

  const deleteHistory = () => {
    const newServiceHistoryRecords = serviceHistory.hairServiceRecords.filter((_, i) => i !== idx);
    setServiceHistory({ ...serviceHistory, hairServiceRecords: newServiceHistoryRecords });
  };

  return (
    <S.ServiceHistoryListItemLayout>
      <DropDown
        idx={idx}
        boxType="service"
        // onClick={() => {
        //   setCurrentDropDown(idx);
        //   clickedDropdown === 'service' ? setClickedDropdown(null) : setClickedDropdown('service');
        // }}
      />
      <DropDown
        idx={idx}
        boxType="period"
        // onClick={() => {
        //   setCurrentDropDown(idx);
        //   clickedDropdown === 'period' ? setClickedDropdown(null) : setClickedDropdown('period');
        // }}
      />
      {/* <S.DropDownBox $isClicked={clickedDropdown === 'period'}>
          <input type="button" value={serviceHistory.hairServiceRecords[idx].hairServiceTerm || '기간  선택'} />
          {clickedDropdown === 'period' ? <IcUpBlue /> : <IcDownGrey />}
          {clickedDropdown === 'period' && (
            <S.SelectDetailList>
              {Object.keys(SELECT_PERIOD).map((value, key) => (
                <li key={key}>
                  <button type="button" onClick={(e) => handleDropdownClick(e, 'hairServiceTerm')}>
                    {value}
                  </button>
                </li>
              ))}
            </S.SelectDetailList>
          )}
        </S.DropDownBox> */}
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
