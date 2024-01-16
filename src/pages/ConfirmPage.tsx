import { styled } from 'styled-components';

import Button from '../views/@common/components/Button';

import { INFO_MESSAGE } from '@/views/ApplicationPage/constants/message';
import usePostApplication from '@/views/ApplicationPage/hooks/usePostApplication';

const ConfirmPage = () => {
  const navigate = useNavigate();

  return (
    <S.ConfirmPage>
      <img src="/src/views/@common/assets/images/img_letter.png" alt="letterImg" />
      <S.Info>
        <h1>{INFO_MESSAGE.CONFIRM_TITLE}</h1>
        <S.Description>
          {INFO_MESSAGE.CONFIRM_SUBTITLE.split('<br />').map((line: string) => (
            <p key={line}>{line}</p>
          ))}
        </S.Description>
      </S.Info>
      <Button
        text={INFO_MESSAGE.CLOSE}
        isFixed={true}
        onClickFn={() => {
          navigate(`/`);
        }}
      />
    </S.ConfirmPage>
  );
};

export default ConfirmPage;

const S = {
  ConfirmPage: styled.main`
    display: flex;
    flex-direction: column;
    gap: 5.443rem;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100dvh;
    padding: 9rem;

    & > img {
      overflow: hidden;

      width: 100%;
      border-radius: 8px;

      box-shadow: ${({ theme }) => theme.effects.graphic};

      object-fit: cover;
    }
  `,

  Info: styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;

    & > h1 {
      color: ${({ theme }) => theme.colors.moddy_bk};

      ${({ theme }) => theme.fonts.Title01};
    }
  `,
  Description: styled.div`
    & > p {
      color: ${({ theme }) => theme.colors.moddy_gray50};
      text-align: center;

      ${({ theme }) => theme.fonts.Body04};
    }
  `,
};
