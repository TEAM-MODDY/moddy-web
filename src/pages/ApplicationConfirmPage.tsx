import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import Button from '../views/@common/components/Button';

import { INFO_MESSAGE } from '@/views/ApplicationPage/constants/message';
import ImgLetter from '@images/img_letter.png';

const ApplicationConfirmPage = () => {
  const navigate = useNavigate();
  const {
    state: { expireDate },
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
        {expireDate} ~ {expireDate}
      </S.ExpiredInfoBox>
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

export default ApplicationConfirmPage;

const S = {
  ConfirmPage: styled.main`
    display: flex;
    flex-direction: column;
    gap: 5.443rem;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100dvh;
    padding: 0 1.55rem;

    & > img {
      overflow: hidden;

      width: 19.5rem;
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

    & > h1 {
      color: ${({ theme }) => theme.colors.moddy_bk};

      ${({ theme }) => theme.fonts.Title01};
    }
  `,

  ExpiredInfoBox: styled.div`
    width: 100%;
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
