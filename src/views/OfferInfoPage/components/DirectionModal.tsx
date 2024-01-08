import { styled } from 'styled-components';

import { IcCloseBlack } from '../../@common/assets/icons';
import { IcFlowiconImage, IcFlowiconLink, IcFlowiconPeople, IcFlowdot } from '../assets/icons';

interface DirectionModalProps {
  isModal?: boolean;
}

const DirectionModal = ({ isModal }: DirectionModalProps) => {
  return (
    <>
      <S.ModalDimBox $isModal={isModal}>
        <S.ModalBox>
          <IcCloseBlack />
          <h1>오픈채팅을 통해 연결돼요!</h1>
          <h2>
            지원 내역을 복사/저장 후 오픈 채팅에 보내주세요
            <br />
            동의한 제안서를 바탕으로 연결이 시작돼요
          </h2>
          <S.ImageBox>
            <div>
              <S.IcBox>
                <IcFlowiconImage />
                <S.ImgCaption>
                  지원 내역 <br />
                  복사/저장
                </S.ImgCaption>
              </S.IcBox>
              <IcFlowdot />
              <S.IcBox>
                <IcFlowiconLink />
                <S.ImgCaption>
                  오픈 채팅 <br />
                  입장
                </S.ImgCaption>
              </S.IcBox>
              <IcFlowdot />
              <S.IcBox>
                <IcFlowiconPeople />
                <S.ImgCaption>일정 조율</S.ImgCaption>
              </S.IcBox>
            </div>
          </S.ImageBox>
          <S.CtaButton>계속하기</S.CtaButton>
        </S.ModalBox>
      </S.ModalDimBox>
    </>
  );
};

const S = {
  ModalDimBox: styled.div<{ $isModal?: boolean }>`
    display: ${({ $isModal }) => ($isModal ? 'block' : 'none')};
    position: fixed;
    top: 0;
    z-index: 2;

    width: 100vw;
    height: 100vh;
    padding: 0 3.8rem;

    background-color: ${({ theme }) => theme.colors.moddy_bk20};
  `,

  ModalBox: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;

    width: calc(100vw - 7.6rem);
    height: 36rem;
    padding: 0 2rem;
    border-radius: 12px;

    background-color: ${({ theme }) => theme.colors.moddy_wt};

    text-align: center;
    transform: translate(-50%, -50%);

    & > svg {
      float: right;

      margin-top: 1.6rem;
    }

    & > h1 {
      margin-top: 4.8rem;

      color: ${({ theme }) => theme.colors.moddy_bk};
      ${({ theme }) => theme.fonts.Headline01};
    }

    & > h2 {
      margin-top: 1.2rem;

      color: ${({ theme }) => theme.colors.moddy_gray50};
      ${({ theme }) => theme.fonts.Body04};
    }
  `,

  ImageBox: styled.div`
    margin-top: 3rem;
    padding: 0 2rem;

    & > div {
      display: grid;
      align-items: center;
      /* stylelint-disable-next-line unit-allowed-list */
      grid-template-columns: repeat(5, 1fr);
      grid-gap: -1rem;
    }

    & > div > svg {
      display: flex;
      position: relative;
      place-self: center center;
    }

    & > div > p {
      margin-top: 0.8rem;
      ${({ theme }) => theme.fonts.Caption01};
    }
  `,
  CtaButton: styled.button`
    position: absolute;
    transform: translate(-50%, -50%);

    bottom: 3.2rem;

    width: calc(100% - 4rem);
    height: 4.4rem;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.moddy_blue};
    ${({ theme }) => theme.fonts.Headline02};

    color: ${({ theme }) => theme.colors.moddy_wt};
  `,

  ImgCaption: styled.div`
    position: absolute;
    top: 6rem;
    left: 50%;

    width: 100%;
    height: 1rem;
    transform: translate(-50%, -50%);

    ${({ theme }) => theme.fonts.Caption01};

    line-height: 1.4rem;
  `,
  IcBox: styled.div`
    position: relative;
  `,
};
export default DirectionModal;
