import { styled } from 'styled-components';

import Button from '../../@common/components/Button';
import Header from '../../@common/components/Header';

import HistoryList from './HistoryList';

const ServiceHistory = () => {
  const addHistory = () => {};
  return (
    <S.ServiceHistoryLayout>
      <Header isBackBtnExist={true} isCloseBtnExist={true} title="모델 지원하기" />
      <S.Title>
        <h2>시술 이력</h2>
        <h3>최근 진행한 시술을 입력해주세요 &#40;최대 3개&#41;</h3>
      </S.Title>
      <HistoryList />
      <S.AddHistoryBtn type="button">&#43; 눌러서 추가하기</S.AddHistoryBtn>
      <Button text="다음" isFixed={true} onClickFn={addHistory} />
    </S.ServiceHistoryLayout>
  );
};
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
export default ServiceHistory;
