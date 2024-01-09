import { styled } from 'styled-components';

import Button from '../../@common/components/Button';
import { IcDownload, IcLink } from '../assets/icons';
import { CHECK_OFFER_DATA } from '../constants/CHECK_OFFER_DATA';

const ButtonBox = () => {
  //오픈채팅방 연결
  const OpenChatLink = CHECK_OFFER_DATA.data.kakaoUrl;
  const handleClickChat = () => {
    window.open(OpenChatLink, '_blank');
  };

  return (
    <div>
      <S.ButtonWrapper>
        <Button
          text="지원 내역 복사 / 저장하기"
          onClickFn={function (): void {
            console.log('아직 공부중ㅎㅎㅎ... ^^');
          }}
          icon={<IcDownload />}
        />
        <S.Caption>지원 내역을 복사 / 저장 후 오픈 채팅방에 전달해주세요</S.Caption>
      </S.ButtonWrapper>
      <S.ButtonWrapper>
        <Button text="오픈 채팅방 입장하기" onClickFn={handleClickChat} icon={<IcLink />} />
        <S.Caption>정확하고 편한 소통을 위해 ‘실명 입장’을 부탁드려요</S.Caption>
      </S.ButtonWrapper>
    </div>
  );
};

const S = {
  ButtonWrapper: styled.div`
    width: 100%;
    margin-bottom: 2rem;

    text-align: center;

    & > section {
      padding: 0;
    }
  `,
  Caption: styled.p`
    margin-top: 1rem;

    color: ${({ theme }) => theme.colors.moddy_gray50};
    ${({ theme }) => theme.fonts.Body04};
  `,
};

export default ButtonBox;
