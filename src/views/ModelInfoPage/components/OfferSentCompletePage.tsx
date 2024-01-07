import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import ImgLetterLine from '../../@common/assets/images/img_letter_line.png';
import Button from '../../@common/components/Button';

const OfferSentCompletePage = () => {
  const navigate = useNavigate();
  const handleClickClose = () => {
    navigate('/');
  };

  return (
    <>
      <S.OfferSentCompleteSection>
        <S.LetterImg src={ImgLetterLine} alt="지원 완료 이미지" />
        <h1>헤어모델 지원 완료!</h1>
        <h2>선택한 헤어 모델에게 제안서를 전달했어요.</h2>
        <p>
          내게 딱 맞는 헤어디자이너의 제안서가
          <br />곧 도착할 예정이에요.
        </p>
      </S.OfferSentCompleteSection>
      <Button text="닫기" isFixed={true} onClickFn={handleClickClose} />
    </>
  );
};

const S = {
  OfferSentCompleteSection: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    height: calc(100vh - 9.4rem);

    text-align: center;

    & > h1 {
      margin-top: 5.598rem;

      color: ${({ theme }) => theme.colors.moddy_bk};
      ${({ theme }) => theme.fonts.Title01};
    }

    & > h2 {
      margin-top: 1.2rem;

      color: ${({ theme }) => theme.colors.moddy_bk};
      ${({ theme }) => theme.fonts.Body02};
    }

    & > p {
      margin-top: 0.8rem;

      color: ${({ theme }) => theme.colors.moddy_gray50};
      ${({ theme }) => theme.fonts.Body04};
    }
  `,
  LetterImg: styled.img`
    width: 19.5rem;
    filter: drop-shadow(0 0 30px rgb(35 111 255 / 70%));
  `,
};

export default OfferSentCompletePage;
