import styled from 'styled-components';

const Modal = () => {
  return (
    <S.ModalLayout>
      <S.ModalSection>
        <S.ModalH1>작성을 취소하시겠습니까?</S.ModalH1>
        <S.ModalParagraph>{'지금 작성을 취소하면\n작성 중인 내용이 사라져요.'}</S.ModalParagraph>
        <S.ModalBtnsBox>
          <S.ModalButton type="button">취소하기</S.ModalButton>
          <S.ModalButton type="button">계속하기</S.ModalButton>
        </S.ModalBtnsBox>
      </S.ModalSection>
    </S.ModalLayout>
  );
};

export default Modal;

const S = {
  ModalLayout: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100vh;

    background-color: ${({ theme }) => theme.colors.moddy_bk20};
  `,
  ModalSection: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 18.4rem;
    margin: 0 4.8rem;
    padding: 2.7rem 2rem 2rem;
    border-radius: 12px;

    background-color: ${({ theme }) => theme.colors.moddy_wt};
    box-shadow: ${({ theme }) => theme.effects.shadow1};
  `,
  ModalH1: styled.h1`
    color: ${({ theme }) => theme.colors.moddy_bk};
    ${({ theme }) => theme.fonts.Headline01};
  `,
  ModalParagraph: styled.pre`
    margin-top: 1.2rem;

    color: ${({ theme }) => theme.colors.moddy_gray50};
    text-align: center;
    ${({ theme }) => theme.fonts.Body02};
  `,
  ModalBtnsBox: styled.div`
    display: flex;
    gap: 0.8rem;

    width: 100%;
    margin-top: 2.8rem;
  `,
  ModalButton: styled.button`
    width: 100%;
    padding: 1.1rem;
    ${({ theme }) => theme.fonts.Body01};

    border: 1.5px solid ${({ theme }) => theme.colors.moddy_blue};
    border-radius: 8px;

    &:first-child {
      color: ${({ theme }) => theme.colors.moddy_bk};
    }

    &:nth-child(2) {
      background-color: ${({ theme }) => theme.colors.moddy_blue};

      color: ${({ theme }) => theme.colors.moddy_wt};
    }
  `,
};
