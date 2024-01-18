import { useNavigate } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import { styled } from 'styled-components';

import Button from '../views/@common/components/Button';

import {
  applicationCaptureImgUrlState,
  applyStepState,
  deatiledStyleState,
  hairStyleState,
  historyState,
  profileState,
} from '@/recoil/atoms/applicationState';
import { INFO_MESSAGE } from '@/views/ApplicationPage/constants/message';
import ImgLetter from '@images/img_letter.png';

const ConfirmPage = () => {
  const navigate = useNavigate();
  //state 초기화
  const stepReset = useResetRecoilState(applyStepState);
  const styleReset = useResetRecoilState(hairStyleState);
  const detailedStyleReset = useResetRecoilState(deatiledStyleState);
  const historyReset = useResetRecoilState(historyState);
  const profileReset = useResetRecoilState(profileState);
  const imgUrlReset = useResetRecoilState(applicationCaptureImgUrlState);

  const resetAtom = () => {
    stepReset();
    styleReset();
    detailedStyleReset();
    historyReset();
    profileReset();
    imgUrlReset();
  };

  return (
    <S.ConfirmPage>
      <img src={ImgLetter} alt="letterImg" />
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
          resetAtom();
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
