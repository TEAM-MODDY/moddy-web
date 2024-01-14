import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { css, styled } from 'styled-components';

import { IcDownGrey, IcUpBlue } from '../../@common/assets/icons';
import { IcDelete } from '../assets/icons';

import { historyState } from '@/recoil/atoms/applicationState';
interface ServiceHistoryListItem {
  idx: number;
}

const ServiceHistoryListItem = ({ idx }: ServiceHistoryListItem) => {
  const [serviceHistory, setServiceHistory] = useRecoilState(historyState);
  const { hairServiceRecords } = serviceHistory;
  const [isServiceClicked, setIsServiceClicked] = useState(false);
  const [isPeriodClicked, setIsPeriodClicked] = useState(false);

  const activateServiceBox = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsServiceClicked((prev) => !prev);
    const tempService = event.currentTarget.innerText;
    const tempServiceHistoryList = hairServiceRecords.map((item, i) => {
      if (i === idx) {
        return {
          ...item,
          service: tempService,
        };
      }
      return item;
    });

    setServiceHistory({ ...serviceHistory, hairServiceRecords: tempServiceHistoryList });
  };

  const activatePeriodBox = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsPeriodClicked((prev) => !prev);
    const tempPeriod = event.currentTarget.innerText;
    const tempServiceHistoryList = hairServiceRecords.map((item, i) => {
      if (i === idx) {
        return {
          ...item,
          period: tempPeriod,
        };
      }
      return item;
    });

    setServiceHistory({ ...serviceHistory, hairServiceRecords: tempServiceHistoryList });
  };

  const deleteHistory = () => {
    const tempServiceHistoryList = hairServiceRecords.filter((_, i) => i !== idx);
    if (tempServiceHistoryList.length >= 0) {
      setServiceHistory({ ...serviceHistory, hairServiceRecords: tempServiceHistoryList });
    }
  };

  return (
    <S.ServiceHistoryListItemLayout>
      <S.SelectBox $height={idx}>
        <S.SelectServiceBox
          $isServiceClicked={isServiceClicked}
          onClick={() => {
            setIsServiceClicked((prev) => !prev);
          }}>
          <input type="button" value={hairServiceRecords[idx] ? hairServiceRecords[idx].service : '시술 선택'} />
          {isServiceClicked ? <IcUpBlue /> : <IcDownGrey />}
        </S.SelectServiceBox>
        <div>
          {isServiceClicked && (
            <S.SelectDetailList>
              <li>
                <button type="button" onClick={activateServiceBox}>
                  펌
                </button>
              </li>
              <li>
                <button type="button" onClick={activateServiceBox}>
                  탈색
                </button>
              </li>
              <li>
                <button type="button" onClick={activateServiceBox}>
                  블랙 염색
                </button>
              </li>
              <li>
                <button type="button" onClick={activateServiceBox}>
                  컬러 염색
                </button>
              </li>
            </S.SelectDetailList>
          )}
        </div>
      </S.SelectBox>
      <S.SelectBox $height={idx}>
        <S.SelectPeriodBox
          $isPeriodClicked={isPeriodClicked}
          onClick={() => {
            setIsPeriodClicked((prev) => !prev);
          }}>
          <input type="button" value={hairServiceRecords[idx] ? hairServiceRecords[idx].period : '기간 선택'} />
          {isPeriodClicked ? <IcUpBlue /> : <IcDownGrey />}
        </S.SelectPeriodBox>
        <div>
          {isPeriodClicked && (
            <S.SelectDetailList>
              <li>
                <button type="button" onClick={activatePeriodBox}>
                  1 개월 미만
                </button>
              </li>
              <li>
                <button type="button" onClick={activatePeriodBox}>
                  1 - 3 개월
                </button>
              </li>
              <li>
                <button type="button" onClick={activatePeriodBox}>
                  4 - 6개월
                </button>
              </li>
              <li>
                <button type="button" onClick={activatePeriodBox}>
                  7 - 12개월
                </button>
              </li>
              <li>
                <button type="button" onClick={activatePeriodBox}>
                  12개월 초과
                </button>
              </li>
            </S.SelectDetailList>
          )}
        </div>
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

const SelectServiceBox = styled.div<{ $isServiceClicked: boolean }>`
  border: 1px solid
    ${({ $isServiceClicked, theme }) => ($isServiceClicked ? theme.colors.moddy_blue : theme.colors.moddy_gray50)};

  ${selectBtn};
`;

const SelectPeriodBox = styled.div<{ $isPeriodClicked: boolean }>`
  border: 1px solid
    ${({ $isPeriodClicked, theme }) => ($isPeriodClicked ? theme.colors.moddy_blue : theme.colors.moddy_gray50)};

  ${selectBtn};
`;
const S = {
  ServiceHistoryListItemLayout,
  SelectBox,
  SelectDetailList,
  SelectServiceBox,
  SelectPeriodBox,
};

export default ServiceHistoryListItem;
