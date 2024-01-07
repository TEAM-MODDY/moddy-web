import styled from 'styled-components';

const MyInfo = () => {
  return (
    <S.MyInfoLayout>
      <S.MyInfoBox>
        <img src="src/views/@common/assets/images/img_hdprofile.png" alt="마이페이지 프로필" />
        <S.MyInfoTextBox>
          <h1>강재훈님, 안녕하세요!</h1>
          <p>헤어 디자이너</p>
        </S.MyInfoTextBox>
      </S.MyInfoBox>
      <img src="src/views/@common/assets/images/img_mylogo.png" alt="마이페이지 로고" className="mylogo" />
    </S.MyInfoLayout>
  );
};

export default MyInfo;

const S = {
  MyInfoLayout: styled.section`
    position: relative;

    width: 100%;
    margin-top: 4.9rem;
    padding: 2.6rem 1.6rem;

    background-color: ${({ theme }) => theme.colors.moddy_blue6};

    .mylogo {
      position: absolute;
      right: 0;
      bottom: 0;

      width: 8rem;
      height: 4rem;
      margin: 1.2rem 1.5rem;
    }
  `,
  MyInfoBox: styled.div`
    display: flex;
    gap: 1.6rem;

    & > img {
      width: 8rem;
      height: 8rem;
    }
  `,
  MyInfoTextBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    & > h1 {
      color: ${({ theme }) => theme.colors.moddy_blue};
      ${({ theme }) => theme.fonts.Title03};
    }

    & > p {
      color: ${({ theme }) => theme.colors.moddy_gray50};
      ${({ theme }) => theme.fonts.Body01};
    }
  `,
};
