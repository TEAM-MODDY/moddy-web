import styled from 'styled-components';

const Button = () => {
  return <S.ButtonLayout>다음</S.ButtonLayout>;
};

export default Button;

const S = {
  ButtonLayout: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 5.2rem;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.moddy_blue};

    color: ${({ theme }) => theme.colors.moddy_wt};
    ${({ theme }) => theme.fonts.Headline01};
  `,
};
