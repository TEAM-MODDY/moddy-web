import styled from 'styled-components';

import { IcCheckBlue } from '../../@common/assets/icons';

const MyQuitText = () => {
  return (
    <S.MyQuitTextLayout>
      <S.MyQuitTextH1>회원탈퇴 시 유의사항</S.MyQuitTextH1>
      <S.MyQuitLine />
      <S.MyQuitList>
        <S.MyQuitItem>
          <IcCheckBlue />
          <p>회원탈퇴 시 개인정보 및 모든 데이터는 삭제됩니다.</p>
        </S.MyQuitItem>
        <S.MyQuitItem>
          <IcCheckBlue />
          <p>한 번 삭제된 계정 정보는 복구가 불가능합니다.</p>
        </S.MyQuitItem>
      </S.MyQuitList>
    </S.MyQuitTextLayout>
  );
};

export default MyQuitText;

const S = {
  MyQuitTextLayout: styled.div`
    display: flex;
    flex-direction: column;

    margin: 8rem 1.6rem;
  `,
  MyQuitTextH1: styled.h1`
    color: ${({ theme }) => theme.colors.moddy_blue};
    ${({ theme }) => theme.fonts.Headline01};
  `,
  MyQuitLine: styled.div`
    width: 100%;
    height: 0.1rem;
    margin: 1rem 0 1.6rem;

    background-color: ${({ theme }) => theme.colors.moddy_blue};
  `,
  MyQuitList: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  `,
  MyQuitItem: styled.li`
    display: flex;
    gap: 0.8rem;
    align-items: center;

    & > p {
      color: ${({ theme }) => theme.colors.moddy_bk};
      ${({ theme }) => theme.fonts.Body02};
    }
  `,
};
