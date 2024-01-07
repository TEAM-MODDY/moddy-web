import styled from 'styled-components';

import { IcContactus, IcContactus1, IcDocument, IcModdypin, IcModdyusers2 } from '../assets/icons';

import MyMenuItem from './MyMenuItem';

interface MyMenuListProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const MyMenuList = ({ setModalOpen }: MyMenuListProps) => {
  return (
    <S.MyMenuListLayout>
      <S.MyMenuListBox>
        <S.MyMenuListParagraph>고객센터</S.MyMenuListParagraph>
        <MyMenuItem icon={<IcContactus1 />} text="문의하기" />
      </S.MyMenuListBox>
      <S.MyMenuListLine />
      <S.MyMenuListBox>
        <S.MyMenuListParagraph>서비스 정보</S.MyMenuListParagraph>
        <MyMenuItem icon={<IcDocument />} text="약관 및 정책" />
        <MyMenuItem icon={<IcContactus />} text="버전 정보" />
      </S.MyMenuListBox>
      <S.MyMenuListLine />
      <S.MyMenuListBox>
        <S.MyMenuListParagraph>계정 관리</S.MyMenuListParagraph>
        <MyMenuItem icon={<IcModdypin />} text="로그아웃" setModalOpen={setModalOpen} />
        <MyMenuItem icon={<IcModdyusers2 />} text="회원탈퇴" />
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
