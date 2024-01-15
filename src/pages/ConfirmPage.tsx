import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import Button from '../views/@common/components/Button';

const ConfirmPage = () => {
  const navigate = useNavigate();
  return (
    <S.ConfirmPage>
      <img src="/src/views/@common/assets/images/img_letter.png" alt="letter" />
      <S.Info>
        <h1>헤어모델 지원 완료!</h1>
        <p>
          내게 딱 맞는 헤어디자이너의 제안서가
          <br />곧 도착할 예정이에요.
        </p>
      </S.Info>
      <Button
        text="닫기"
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

    & > h1 {
      color: ${({ theme }) => theme.colors.moddy_bk};

      ${({ theme }) => theme.fonts.Title01};
    }

    & > p {
      color: ${({ theme }) => theme.colors.moddy_gray50};
      text-align: center;

      ${({ theme }) => theme.fonts.Body04};
    }
  `,
};
