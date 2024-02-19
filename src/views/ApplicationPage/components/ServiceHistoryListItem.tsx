import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { css, styled } from 'styled-components';

import { IcDownGrey, IcUpBlue } from '../../@common/assets/icons';
import { IcDelete } from '../assets/icons';
import { SELECT_PERIOD, SELECT_SERVICE } from '../constants/select';

import { historyState } from '@/recoil/atoms/applicationState';

interface ServiceHistoryListItem {
  idx: number;
  currentDropDown: number | null;
  setCurrentDropDown: React.Dispatch<React.SetStateAction<number | null>>;
}

const ServiceHistoryListItem = ({ idx, currentDropDown, setCurrentDropDown }: ServiceHistoryListItem) => {
  const [serviceHistory, setServiceHistory] = useRecoilState(historyState);
  const [clickedDropdown, setClickedDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (currentDropDown !== idx) setClickedDropdown(null);
  }, [currentDropDown]);

  const handleDropdownClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    field: 'hairService' | 'hairServiceTerm',
  ) => {
    const newValue = event.currentTarget.innerText;
    const newServiceHistoryRecords = serviceHistory.hairServiceRecords.map((item, i) => {
      if (i === idx) {
        return {
          ...item,
          [field]: newValue,
        };
      }
      return item;
    });

    setServiceHistory({ ...serviceHistory, hairServiceRecords: newServiceHistoryRecords });
    setClickedDropdown(null);
  };

  const deleteHistory = () => {
    const newServiceHistoryRecords = serviceHistory.hairServiceRecords.filter((_, i) => i !== idx);
    setServiceHistory({ ...serviceHistory, hairServiceRecords: newServiceHistoryRecords });
  };

  return (
    <S.ServiceHistoryListItemLayout>
      <S.SelectBox $height={idx}>
        <S.DropDownBox
          $isClicked={clickedDropdown === 'service'}
          onClick={() => {
            setCurrentDropDown(idx);
            clickedDropdown === 'service' ? setClickedDropdown(null) : setClickedDropdown('service');
          }}>
          <input type="button" value={serviceHistory.hairServiceRecords[idx].hairService || '시술  선택'} />
          {clickedDropdown === 'service' ? <IcUpBlue /> : <IcDownGrey />}
          {clickedDropdown === 'service' && (
            <S.SelectDetailList>
              {Object.keys(SELECT_SERVICE).map((value, key) => (
                <li key={key}>
                  <button type="button" onClick={(e) => handleDropdownClick(e, 'hairService')}>
                    {value}
                  </button>
                </li>
              ))}
            </S.SelectDetailList>
          )}
        </S.DropDownBox>
      </S.SelectBox>
      <S.SelectBox $height={idx}>
        <S.DropDownBox
          $isClicked={clickedDropdown === 'period'}
          onClick={() => {
            setCurrentDropDown(idx);
            clickedDropdown === 'period' ? setClickedDropdown(null) : setClickedDropdown('period');
          }}>
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
        </S.DropDownBox>
      </S.SelectBox>
      <button type="button" onClick={deleteHistory}>
        <IcDelete />
      </button>
    </S.ServiceHistoryListItemLayout>
  );
};

const ServiceHistoryListItemLayout = styled.li`
  display: flex;
  gap: 0.8rem;

  width: 100%;

  & > svg {
    height: 100%;

    object-fit: cover;

    cursor: pointer;
  }
`;

const SelectBox = styled.div<{ $height: number }>`
  display: flex;
  flex: 1;
  position: relative;
  z-index: ${(props) => 3 - props.$height};
`;

const SelectDetailList = styled.ul`
  position: absolute;
  top: 5rem;
  left: 0;

  width: 100%;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.moddy_wt};
  box-shadow: ${({ theme }) => theme.effects.shadow4};

  & button {
    padding: 1.1rem 1.2rem;
    border-radius: 8px;

    color: ${({ theme }) => theme.colors.moddy_bk};

    ${({ theme }) => theme.fonts.Body02};
  }
`;

const selectBtn = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-bottom: 0.4rem;
  padding: 1.1rem 1.2rem;
  border-radius: 8px;

  cursor: pointer;

  & > input {
    padding: 0;
    border: none;

    background-color: ${({ theme }) => theme.colors.moddy_wt};

    color: ${({ theme }) => theme.colors.moddy_gray50};
    text-align: left;

    ${({ theme }) => theme.fonts.Body02};
  }
`;

const DropDownBox = styled.div<{ $isClicked: boolean }>`
  border: 1px solid ${({ $isClicked, theme }) => ($isClicked ? theme.colors.moddy_blue : theme.colors.moddy_gray50)};

  ${selectBtn};
`;

const S = {
  ServiceHistoryListItemLayout,
  SelectBox,
  SelectDetailList,
  DropDownBox,
};

export default ServiceHistoryListItem;
