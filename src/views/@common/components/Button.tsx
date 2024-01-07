import styled from 'styled-components';

interface ButtonProps {
  text: string;
  isFixed?: boolean;
  onClickFn: () => void;
  disabled?: boolean;
}
const Button = ({ text, isFixed, onClickFn, disabled }: ButtonProps) => {
  return (
    <S.ButtonLayout $isFixed={isFixed} $disabled={disabled}>
      <button type="button" onClick={onClickFn} disabled={disabled}>
        {text}
      </button>
    </S.ButtonLayout>
  );
};

export default Button;

const S = {
  ButtonLayout: styled.section<{ $isFixed: boolean | undefined; $disabled: boolean | undefined }>`
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

      background-color: ${({ theme, $disabled }) => ($disabled ? theme.colors.moddy_gray50 : theme.colors.moddy_blue)};

      color: ${({ theme }) => theme.colors.moddy_wt};
      ${({ theme }) => theme.fonts.Headline01};
    }
  `,
};
