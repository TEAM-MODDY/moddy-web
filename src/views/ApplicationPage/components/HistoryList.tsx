import { useState } from 'react';
import { styled } from 'styled-components';

import { IcDownGrey } from '../../@common/assets/icons';
import { IcDelete } from '../assets/icons';

const HistoryList = () => {
  const [serviceSelected, isServiceSelectd] = useState(false);
  const [periodSelected, isPeriodSelectd] = useState(false);

  return (
    <S.HistoryList>
      <S.HistoryListItem>
        <S.SelectBox>
          <S.SelectBtnBox
            onClick={() => {
              serviceSelected ? isServiceSelectd(false) : isServiceSelectd(true);
            }}>
            <button type="button">시술 선택</button>
            <IcDownGrey />
          </S.SelectBtnBox>
          <S.SelectDetailBox>
            {serviceSelected && (
              <ul>
                <li value="펌">펌</li>
                <li value="탈색">탈색</li>
                <li value="블랙 염색">블랙 염색</li>
                <li value="컬러 염색">컬러 염색</li>
              </ul>
            )}
          </S.SelectDetailBox>
        </S.SelectBox>
        <S.SelectBox>
          <S.SelectBtnBox
            onClick={() => {
              periodSelected ? isPeriodSelectd(false) : isPeriodSelectd(true);
            }}>
            <button type="button">기간 선택</button>
            <IcDownGrey />
          </S.SelectBtnBox>
          <S.SelectDetailBox>
            {periodSelected && (
              <ul>
                <li value="1 개월 미만">1개월 미만</li>
                <li value="1 - 3 개월">1 - 3개월</li>
                <li value="4 - 6 개월">4 - 6</li>
                <li value="7 - 12 개월">7 - 12 개월</li>
                <li value="12 개월 초과">12개월 초과</li>
              </ul>
            )}
          </S.SelectDetailBox>
        </S.SelectBox>
        <IcDelete />
      </S.HistoryListItem>
    </S.HistoryList>
  );
};

const S = {
  HistoryList: styled.ul`
    display: flex;
    gap: 0.8rem;
    justify-content: space-between;
    position: relative;

    width: 100%;
    margin-top: 2rem;
  `,

  HistoryListItem: styled.li`
    display: flex;
    gap: 0.8rem;

    width: 100%;

    & > svg {
      height: 100%;

      object-fit: cover;
    }
  `,

  SelectBox: styled.div`
    display: flex;
    flex: 1;
    position: relative;
  `,

  SelectDetailBox: styled.div`
    & ul {
      position: absolute;
      top: 5rem;
      left: 0;

      width: 100%;
      border: 1px solid ${({ theme }) => theme.colors.moddy_gray20};
      border-radius: 8px;

      background-color: ${({ theme }) => theme.colors.moddy_wt};
      box-shadow: ${({ theme }) => theme.effects.shadow4};
    }

    & li {
      padding: 1.1rem 1.2rem;
      border-radius: 8px;

      color: ${({ theme }) => theme.colors.moddy_bk};

      ${({ theme }) => theme.fonts.Body02};
    }
  `,

  SelectBtnBox: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    margin-bottom: 0.4rem;
    padding: 1.1rem 1.2rem;
    border: 1px solid ${({ theme }) => theme.colors.moddy_gray20};
    border-radius: 8px;

    cursor: pointer;

    & > button {
      color: ${({ theme }) => theme.colors.moddy_gray50};
      text-align: left;

      ${({ theme }) => theme.fonts.Body02};
    }
  `,
};

export default HistoryList;
