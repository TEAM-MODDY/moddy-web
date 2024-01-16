import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { IcCloseBlack } from '../../@common/assets/icons';
import { IcFlowiconImage, IcFlowiconLink, IcFlowiconPeople, IcFlowdot } from '../assets/icons';
import usePutOfferModel from '../hooks/usePutOfferModel';

interface DirectionModalProps {
  isModal?: boolean;
  onClose: () => void;
  offerId: number;
}

const DirectionModal = ({ isModal, onClose, offerId }: DirectionModalProps) => {
  const navigate = useNavigate();
  const { postOffer } = usePutOfferModel(offerId);

  const handleOnClickContinue = () => {
    postOffer();
    navigate('/offer-info/check-offer', {
      state: {
        offerId: offerId,
      },
    });
  };

  const handleModalClose = () => {
    onClose();
  };

  return (
    <>
      {isModal && (
        <S.ModalDimBox $isModal={isModal}>
          <S.ModalBox>
            <S.CloseBtnBox onClick={handleModalClose}>
              <IcCloseBlack />
            </S.CloseBtnBox>
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
            <S.CtaButton onClick={handleOnClickContinue} type="button">
              계속하기
            </S.CtaButton>
          </S.ModalBox>
        </S.ModalDimBox>
      )}
    </>
  );
};

const S = {
  ModalDimBox: styled.div<{ $isModal?: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 2;

    width: 100%;
    max-width: 43rem;
    height: 100dvh;
    padding: 0 3.8rem;

    background-color: ${({ theme }) => theme.colors.moddy_bk20};
  `,

  CloseBtnBox: styled.div`
    position: absolute;
    right: 2rem;

    margin-top: 1.6rem;

    cursor: pointer;
  `,
  ModalBox: styled.div`
    position: relative;

    width: 100%;
    height: 36rem;
    padding: 0 2rem;
    border-radius: 12px;

    background-color: ${({ theme }) => theme.colors.moddy_wt};

    text-align: center;

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
    margin-top: 4rem;
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

    bottom: 2rem;

    width: calc(100% - 4rem);
    height: 4.4rem;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.moddy_blue};

    color: ${({ theme }) => theme.colors.moddy_wt};
    ${({ theme }) => theme.fonts.Headline02};

    cursor: pointer;
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
