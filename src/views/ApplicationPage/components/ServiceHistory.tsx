import { styled } from 'styled-components';

import { IcDownGrey } from '../../@common/assets/icons';
import Button from '../../@common/components/Button';
import Header from '../../@common/components/Header';
import { IcDelete } from '../assets/icons';

const ServiceHistory = () => {
  return (
    <S.ServiceHistoryLayout>
      <Header isBackBtnExist={true} isCloseBtnExist={true} title="모델 지원하기" />
      <S.Title>
        <h2>시술 이력</h2>
        <h3>최근 진행한 시술을 입력해주세요 &#40;최대 3개&#41;</h3>
        <S.HistoryList>
          <li>
            <S.ServiceListBox>
              <S.SelectBtnBox>
                <button type="button">시술 선택</button>
                <IcDownGrey />
              </S.SelectBtnBox>
              {/* <ul>
                <li value="펌">펌</li>
                <li value="탈색">탈색</li>
                <li value="블랙 염색">블랙 염색</li>
                <li value="컬러 염색">컬러 염색</li>
              </ul> */}
            </S.ServiceListBox>
            <S.ServiceListBox>
              <S.SelectBtnBox>
                <button type="button">기간 선택</button>
                <IcDownGrey />
              </S.SelectBtnBox>
              {/* <ul>
                <li value="1 개월 미만">1개월 미만</li>
                <li value="1 - 3 개월">1 - 3개월</li>
                <li value="4 - 6 개월">4 - 6</li>
                <li value="7 - 12 개월">7 - 12 개월</li>
                <li value="12 개월 초과">12개월 초과</li>
              </ul> */}
            </S.ServiceListBox>
            <IcDelete />
          </li>
          <S.AddHistoryBtn type="button">&#43; 눌러서 추가하기</S.AddHistoryBtn>
        </S.HistoryList>
      </S.Title>
      <Button text="다음" isFixed={true} onClickFn={addHistory} />
    </S.ServiceHistoryLayout>
  );
};

export default ServiceHistory;

const S = {
  ServiceHistoryLayout: styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    margin-top: 5.7rem;
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

  HistoryList: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    width: 100%;

    & > li {
      display: flex;
      gap: 0.8rem;
      justify-content: space-between;

      width: 100%;

      & svg {
        height: 100%;

        object-fit: cover;
      }
    }
  `,

  ServiceListBox: styled.div`
    flex: 1;

    & ul {
      z-index: 1;

      border: 1px solid ${({ theme }) => theme.colors.moddy_gray20};
      border-radius: 8px;

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

    & > button {
      color: ${({ theme }) => theme.colors.moddy_gray50};
      text-align: left;

      ${({ theme }) => theme.fonts.Body02};
    }
  `,

  AddHistoryBtn: styled.button`
    width: 100%;
    height: 5.2rem;
    border: 1.5px dashed ${({ theme }) => theme.colors.moddy_blue3};
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.moddy_wt};

    color: ${({ theme }) => theme.colors.moddy_blue2};

    ${({ theme }) => theme.fonts.Body02};
  `,
};
