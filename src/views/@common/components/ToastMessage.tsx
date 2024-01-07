import styled from 'styled-components';

interface ToastMessageProps {
  text: string;
}
const ToastMessage = ({ text }: ToastMessageProps) => {
  return (
    <S.ToastLayout>
      <S.ToastSection>{text}</S.ToastSection>
    </S.ToastLayout>
  );
};

export default ToastMessage;

const S = {
  ToastLayout: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100vh;
  `,
  ToastSection: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    margin: 0 4.8rem;
    padding: 2.7rem 0;
    border-radius: 12px;

    background-color: ${({ theme }) => theme.colors.moddy_wt};
    box-shadow: ${({ theme }) => theme.effects.shadow1};

    color: ${({ theme }) => theme.colors.moddy_bk};
    ${({ theme }) => theme.fonts.Body01};
  `,
};
