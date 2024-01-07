import styled from 'styled-components';

const ToastMessage = () => {
  return (
    <S.ToastLayout>
      <S.ToastSection>회원 탈퇴 완료</S.ToastSection>
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
