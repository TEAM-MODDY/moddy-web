import { useState } from 'react';
import { css, styled } from 'styled-components';

import { IcDownGrey, IcUpBlue } from '../../@common/assets/icons';
import { IcDelete } from '../assets/icons';

interface HistroyDetailProps {
  service: string;
  period: string;
}

const ServiceHistoryListItem = () => {
  const [isServiceClicked, setIsServiceClicked] = useState(false);
  const [isPeriodClicked, setIsPeriodClicked] = useState(false);
  const [historyDetail, setHistoryDetail] = useState<HistroyDetailProps>({ service: '시술 선택', period: '기간 선택' });

  const activateServiceBox = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    isServiceClicked ? setIsServiceClicked(false) : setIsServiceClicked(true);

    const tempService = event.currentTarget.innerText;
    setHistoryDetail((historyDetail) => ({
      ...historyDetail,
      service: tempService,
    }));
  };

  const activatePeriodBox = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    isPeriodClicked ? setIsPeriodClicked(false) : setIsPeriodClicked(true);

    const tempPeriod = event.currentTarget.innerText;
    setHistoryDetail((historyDetail) => ({
      ...historyDetail,
      period: tempPeriod,
    }));
  };

  return (
    <S.ServiceHistoryListItemLayout>
      <S.SelectBox>
        <S.SelectServiceBox
          $isServiceClicked={isServiceClicked}
          onClick={() => {
            isServiceClicked ? setIsServiceClicked(false) : setIsServiceClicked(true);
          }}>
          <button type="button">{historyDetail.service}</button>
          {isServiceClicked ? <IcUpBlue /> : <IcDownGrey />}
        </S.SelectServiceBox>
        <S.SelectDetailBox>
          {isServiceClicked && (
            <ul>
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
            </ul>
          )}
        </S.SelectDetailBox>
      </S.SelectBox>
      <S.SelectBox>
        <S.SelectPeriodBox
          $isPeriodClicked={isPeriodClicked}
          onClick={() => {
            isPeriodClicked ? setIsPeriodClicked(false) : setIsPeriodClicked(true);
          }}>
          <button type="button">{historyDetail.period}</button>
          {isPeriodClicked ? <IcUpBlue /> : <IcDownGrey />}
        </S.SelectPeriodBox>
        <S.SelectDetailBox>
          {isPeriodClicked && (
            <ul>
              <li>
                <button
                  type="button"
                  onClick={(e) => {
                    activatePeriodBox(e);
                  }}>
                  1 개월 미만
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={(e) => {
                    activatePeriodBox(e);
                  }}>
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
            </ul>
          )}
        </S.SelectDetailBox>
      </S.SelectBox>
      <IcDelete />
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
  }
`;

const SelectBox = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`;

const SelectDetailBox = styled.div`
  & ul {
    position: absolute;
    top: 5rem;
    left: 0;

    width: 100%;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.moddy_wt};
    box-shadow: ${({ theme }) => theme.effects.shadow4};
  }

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

  & > button {
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
  SelectDetailBox,
  SelectServiceBox,
  SelectPeriodBox,
};

export default ServiceHistoryListItem;
