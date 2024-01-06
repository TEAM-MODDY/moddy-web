import styled from 'styled-components';

const Button = () => {
  return (
    <S.ButtonLayout className="footer">
      <button type="button">다음</button>
    </S.ButtonLayout>
  );
};

export default Button;

const S = {
  ButtonLayout: styled.section`
    display: flex;
    justify-content: center;

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
