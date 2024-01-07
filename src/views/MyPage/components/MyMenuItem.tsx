import { ReactNode, useState } from 'react';
import styled from 'styled-components';

import { IcRightGrey } from '../../@common/assets/icons';
import Modal from '../../@common/components/Modal';
interface MyMenuItemProps {
  icon: ReactNode;
  text: string;
}
const MyMenuItem = ({ icon, text }: MyMenuItemProps) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <S.MyMenuItemLayout
      type="button"
      onClick={() => {
        setModalOpen(true);
      }}>
      {icon}
      <S.MyMenuItemParagraph>{text}</S.MyMenuItemParagraph>
      <IcRightGrey />
      {isModalOpen && (
        <Modal
          title="로그아웃 하시겠습니까?"
          description="로그아웃 시 모디 홈 화면으로<br/>돌아갑니다."
          leftBtnText="취소"
          rightBtnText="확인"
          leftBtnFn={() => setModalOpen(false)}
          rightBtnFn={() => console.log('test')}
        />
      )}
    </S.MyMenuItemLayout>
  );
};

export default MyMenuItem;

const S = {
  MyMenuItemLayout: styled.button`
    display: flex;
    gap: 1rem;
    align-items: center;
    position: relative;

    & > svg:nth-child(3) {
      position: absolute;
      right: 0;
    }
  `,
  MyMenuItemParagraph: styled.p`
    color: ${({ theme }) => theme.colors.moddy_bk};
    ${({ theme }) => theme.fonts.Body01};
  `,
};
