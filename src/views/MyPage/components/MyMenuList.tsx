import styled from 'styled-components';

import MyMenuItem from './MyMenuItem';

const MyMenuList = () => {
  return (
    <S.MyMenuListLayout>
      <S.MyMenuListBox>
        <S.MyMenuListParagraph>고객센터</S.MyMenuListParagraph>
        <MyMenuItem />
      </S.MyMenuListBox>
      <S.MyMenuListLine />
      <S.MyMenuListBox>
        <S.MyMenuListParagraph>서비스 정보</S.MyMenuListParagraph>
        <MyMenuItem />
        <MyMenuItem />
      </S.MyMenuListBox>
      <S.MyMenuListBox>
        <S.MyMenuListParagraph>계정 관리</S.MyMenuListParagraph>
        <MyMenuItem />
        <MyMenuItem />
      </S.MyMenuListBox>
    </S.MyMenuListLayout>
  );
};

export default MyMenuList;

const S = {
  MyMenuListLayout: styled.section`
    display: flex;
    flex-direction: column;

    padding: 1.6rem;
  `,
  MyMenuListBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    margin: 1.6rem 0;
  `,
  MyMenuListParagraph: styled.p`
    margin-bottom: 0.4rem;

    color: ${({ theme }) => theme.colors.moddy_gray50};
    ${({ theme }) => theme.fonts.Body03};
  `,
  MyMenuListLine: styled.div`
    width: 100%;
    height: 0.1rem;

    background-color: ${({ theme }) => theme.colors.moddy_gray10};
  `,
};
