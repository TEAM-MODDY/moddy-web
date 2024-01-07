import { ReactNode } from 'react';
import styled from 'styled-components';
interface MyMenuItemProps {
  icon: ReactNode;
  text: string;
}
const MyMenuItem = ({ icon, text }: MyMenuItemProps) => {
  return (
    <S.MyMenuItemLayout type="button">
      {icon}
      <S.MyMenuItemParagraph>{text}</S.MyMenuItemParagraph>
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
  `,
  MyMenuItemParagraph: styled.p`
    color: ${({ theme }) => theme.colors.moddy_bk};
    ${({ theme }) => theme.fonts.Body01};
  `,
};
