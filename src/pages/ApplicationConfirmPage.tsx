import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import Button from '../views/@common/components/Button';

import { INFO_MESSAGE } from '@/views/ApplicationPage/constants/message';
import ImgLetter from '@images/img_letter.png';

const ApplicationConfirmPage = () => {
  const navigate = useNavigate();
  const {
    state: { expirationDate },
  } = useLocation();

  return (
    <S.ConfirmPage>
      <img src={ImgLetter} alt="letterImg" />
      <S.ConfirmInfoSection>
        <h1>{INFO_MESSAGE.CONFIRM_TITLE}</h1>
        <S.Description>
          {INFO_MESSAGE.CONFIRM_SUBTITLE.split('<br />').map((line: string) => (
            <p key={line}>{line}</p>
          ))}
        </S.Description>
      </S.ConfirmInfoSection>
      <S.ExpiredInfoBox>
        {INFO_MESSAGE.CONFIRM_EXPIRED} <br />
        {expirationDate}
      </S.ExpiredInfoBox>
      <Button
        text={INFO_MESSAGE.CONFIRM}
        isFixed={false}
        onClickFn={() => {
          navigate(`/`);
        }}
      />
    </S.ConfirmPage>
  );
};

export default ApplicationConfirmPage;

const S = {
  ConfirmPage: styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    width: 100%;
    height: 100dvh;

    & > img {
      overflow: hidden;

      width: 19.5rem;
      margin-bottom: 5.443rem;
      border-radius: 8px;

      box-shadow: ${({ theme }) => theme.effects.graphic};

      object-fit: cover;
    }
  `,

  ConfirmInfoSection: styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;

    margin-bottom: 6.35rem;

    & > h1 {
      color: ${({ theme }) => theme.colors.moddy_bk};

      ${({ theme }) => theme.fonts.Title01};
    }
  `,

  ExpiredInfoBox: styled.div`
    width: calc(100% - 3.1rem);
    margin-bottom: 1.6rem;
    padding: 1.3rem 0;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.colors.moddy_gray05};

    color: ${({ theme }) => theme.colors.moddy_gray50};
    text-align: center;

    ${({ theme }) => theme.fonts.Body04};
  `,

  Description: styled.div`
    & > p {
      color: ${({ theme }) => theme.colors.moddy_gray50};
      text-align: center;

      ${({ theme }) => theme.fonts.Body04};
    }
  `,
};
