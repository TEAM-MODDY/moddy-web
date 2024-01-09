import { styled } from 'styled-components';

interface ModalProps {
  title: string;
  description: string;
  leftBtnText: string;
  rightBtnText: string;
  leftBtnFn: () => void;
  rightBtnFn: () => void;
}
const Modal = ({ title, description, leftBtnText, rightBtnText, leftBtnFn, rightBtnFn }: ModalProps) => {
  return (
    <S.ModalLayout>
      <S.ModalSection>
        <S.ModalH1>{title}</S.ModalH1>
        <S.ModalTextBox>
          {description.split('<br/>').map((line) => (
            <S.ModalParagraph key={line}>{line}</S.ModalParagraph>
          ))}
        </S.ModalTextBox>
        <S.ModalBtnsBox>
          <S.ModalButton type="button" onClick={leftBtnFn}>
            {leftBtnText}
          </S.ModalButton>
          <S.ModalButton type="button" onClick={rightBtnFn}>
            {rightBtnText}
          </S.ModalButton>
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
    z-index: 1;

    width: 100%;
    max-width: 43rem;
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
  ModalTextBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 1.2rem;
  `,
  ModalParagraph: styled.p`
    color: ${({ theme }) => theme.colors.moddy_gray50};
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
