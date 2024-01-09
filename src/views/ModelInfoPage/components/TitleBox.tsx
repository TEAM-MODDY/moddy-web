import { styled } from 'styled-components';

import { IcEssential } from '../../@common/assets/icons';

interface TitleBoxProps {
  title: string;
  subtitle: string;
  isNeccessary: boolean;
}

const TitleBox = ({ title, subtitle, isNeccessary }: TitleBoxProps) => {
  return (
    <S.TitleBoxLayout>
      <S.MainTitleBox $isNeccessary={isNeccessary}>
        <h1>{title}</h1>
        <div>{isNeccessary && <IcEssential />}</div>
      </S.MainTitleBox>
      <S.Subtitle>{subtitle} </S.Subtitle>
    </S.TitleBoxLayout>
  );
};

const S = {
  TitleBoxLayout: styled.div`
    margin-bottom: 1.2rem;
  `,

  MainTitleBox: styled.div<{ $isNeccessary: boolean }>`
    display: flex;

    & > h1 {
      margin-bottom: 0.8rem;

      color: ${({ theme }) => theme.colors.moddy_bk};
      ${({ theme }) => theme.fonts.Headline01};
    }
  `,
  Subtitle: styled.h2`
    color: ${({ theme }) => theme.colors.moddy_gray50};
    ${({ theme }) => theme.fonts.Body02};
  `,
};

export default TitleBox;
