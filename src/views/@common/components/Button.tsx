import { styled } from 'styled-components';

interface ButtonProps {
  text: string;
  isFixed: boolean;
  onClickFn: () => void;
}
const Button = ({ text, isFixed, onClickFn }: ButtonProps) => {
  return (
    <S.ButtonLayout $isFixed={isFixed}>
      <button type="button" onClick={onClickFn}>
        {text}
      </button>
  );
};

export default Button;

const S = {
  ButtonLayout: styled.section<{ $isFixed: boolean }>`
    display: flex;
    justify-content: center;
    position: ${({ $isFixed }) => ($isFixed ? 'fixed' : 'static')};
    bottom: 0;

    width: 100%;
    padding: 0 1.5rem 4rem 1.6rem;

    & > button {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      padding: 1.5rem 0;
      border-radius: 8px;

      background-color: ${({ theme }) => theme.colors.moddy_blue};

      color: ${({ theme }) => theme.colors.moddy_wt};
      ${({ theme }) => theme.fonts.Headline01};
    }
  `,
};
