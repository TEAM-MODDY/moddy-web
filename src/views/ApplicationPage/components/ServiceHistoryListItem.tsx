import { useState } from 'react';
import { css, styled } from 'styled-components';

import { IcDownGrey, IcUpBlue } from '../../@common/assets/icons';
import { IcDelete } from '../assets/icons';

export interface HistroyDetailProps {
  service: string;
  period: string;
}

interface ServiceHistoryListItem {
  idx: number;
  serviceHistoryList: HistroyDetailProps[];
  setServiceHistoryList: React.Dispatch<React.SetStateAction<HistroyDetailProps[]>>;
}

const ServiceHistoryListItem = ({ idx, serviceHistoryList, setServiceHistoryList }: ServiceHistoryListItem) => {
  const [isServiceClicked, setIsServiceClicked] = useState(false);
  const [isPeriodClicked, setIsPeriodClicked] = useState(false);

  const activateServiceBox = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    isServiceClicked ? setIsServiceClicked(false) : setIsServiceClicked(true);

    const tempService = event.currentTarget.innerText;
    const tempServiceHistoryList = serviceHistoryList.map((item, i) => {
      if (i === idx) {
        return {
          ...item,
          service: tempService,
        };
      }
      return item;
    });

    setServiceHistoryList(tempServiceHistoryList);
  };

  const activatePeriodBox = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    isPeriodClicked ? setIsPeriodClicked(false) : setIsPeriodClicked(true);

    const tempPeriod = event.currentTarget.innerText;
    const tempServiceHistoryList = serviceHistoryList.map((item, i) => {
      if (i === idx) {
        return {
          ...item,
          period: tempPeriod,
        };
      }
      return item;
    });

    setServiceHistoryList(tempServiceHistoryList);
  };

  const deleteHistory = () => {
    const tempServiceHistoryList = serviceHistoryList.filter((_, i) => i !== idx);
    if (tempServiceHistoryList.length >= 0) {
      setServiceHistoryList(tempServiceHistoryList);
    }
  };

  return (
    <S.ServiceHistoryListItemLayout>
      <S.SelectBox $height={idx}>
        <S.SelectServiceBox
          $isServiceClicked={isServiceClicked}
          onClick={() => {
            isServiceClicked ? setIsServiceClicked(false) : setIsServiceClicked(true);
          }}>
          <input type="button" value={serviceHistoryList[idx].service} />
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
            isPeriodClicked ? setIsPeriodClicked(false) : setIsPeriodClicked(true);
          }}>
          <input type="button" value={serviceHistoryList[idx].period} />
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
  z-index: ${(props) => 100 - props.$height};
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
    border: none;
    background-color: ${({ theme }) => theme.colors.moddy_wt};
    color: ${({ theme }) => theme.colors.moddy_gray50};
    text-align: left;
    padding: 0;

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
