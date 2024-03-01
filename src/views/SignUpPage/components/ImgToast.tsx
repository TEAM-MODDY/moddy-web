import { useEffect } from 'react';
import styled from 'styled-components';

interface ToastProps {
  mainText: string;
  subText?: string;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}
const ImgToast = ({ mainText, subText, setter }: ToastProps) => {
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
        <h1>{mainText}</h1>
        <h2>{subText}</h2>
      </S.ToastSection>
    </S.ToastLayout>
  );
};

export default ImgToast;

const S = {
  ToastLayout: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100dvh;
  `,
  ToastSection: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    margin: 0 6.65rem;
    padding: 1.6rem 0;
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
