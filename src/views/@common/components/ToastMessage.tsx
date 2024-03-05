import { useEffect } from 'react';
import { styled } from 'styled-components';

interface ToastMessageProps {
  text: string;
  subtext?: string;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}
const ToastMessage = ({ text, setter, subtext }: ToastMessageProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setter(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [setter]);

  return (
    <S.ToastLayout>
      <S.ToastSection>
        <h1>{text}</h1>
        {subtext && <h2>{subtext}</h2>}
      </S.ToastSection>
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
    z-index: 10;

    width: 100%;
    max-width: 43rem;
    height: 100dvh;

    background-color: ${({ theme }) => theme.colors.moddy_bk20};
  `,
  ToastSection: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    margin: 0 4.8rem;
    padding: 2.7rem 0;
    border-radius: 12px;

    background-color: ${({ theme }) => theme.colors.moddy_wt};
    box-shadow: ${({ theme }) => theme.effects.shadow1};

    & > h1 {
      color: ${({ theme }) => theme.colors.moddy_bk};
      ${({ theme }) => theme.fonts.Body01};
    }

    & > h2 {
      color: ${({ theme }) => theme.colors.moddy_gray50};
      ${({ theme }) => theme.fonts.Body04};
    }
  `,
};
