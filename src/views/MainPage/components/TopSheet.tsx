import { styled } from 'styled-components';

import { IcLogoHome, IcRightWhite, IcModdyuser } from '../assets/icons';
import { APPLY_TYPE, USER_TYPE } from '../constants/constants';

interface TopSheetProps {
  userType: number;
  applyType: number;
}
const TopSheet = (props: TopSheetProps) => {
  const { userType, applyType } = props;

  const OnBoardingText = () => {
    if (userType === USER_TYPE.GUEST) {
      return (
        <S.OnBoardingParagraph>
          헤어 디자이너와 모델,
          <br /> 모두가 <S.StrongSpan>윈윈</S.StrongSpan>하는 <S.StrongSpan>모디</S.StrongSpan>예요
        </S.OnBoardingParagraph>
      );
    } else if (userType === USER_TYPE.DESIGNER) {
      return (
        <S.OnBoardingParagraph>
          00님 안녕하세요!
          <br /> 지원자에게 <S.StrongSpan>모델</S.StrongSpan>을 <S.StrongSpan>제안</S.StrongSpan>해보세요
        </S.OnBoardingParagraph>
      );
    } else if (userType === USER_TYPE.MODEL) {
      if (applyType === APPLY_TYPE.NOT_YET) {
        return (
          <S.OnBoardingParagraph>
            헤어 모델 지원하고,
            <br /> <S.StrongSpan>무료/최소금액</S.StrongSpan>으로 예쁜 머리하기
          </S.OnBoardingParagraph>
        );
      } else if (applyType === APPLY_TYPE.WAITING) {
        return (
          <S.OnBoardingParagraph>
            헤어 디자이너의
            <br /> <S.StrongSpan>제안서</S.StrongSpan>를 기다리고 있어요
          </S.OnBoardingParagraph>
        );
      } else if (applyType === APPLY_TYPE.RECEIVED) {
        return (
          <S.OnBoardingParagraph>
            00님 안녕하세요!
            <br /> <S.StrongSpan>신규 제안서</S.StrongSpan>가 도착했어요
          </S.OnBoardingParagraph>
        );
      }
    }
  };
  return (
    <S.TopSheetLayout>
      <S.HeaderBox>
        <IcLogoHome />
        {userType === USER_TYPE.GUEST ? (
          <S.LoginButton>
            <S.LoginSpan>로그인하기</S.LoginSpan>
            <IcRightWhite />
          </S.LoginButton>
        ) : (
          <IcModdyuser />
        )}
      </S.HeaderBox>
      <S.OnBoardingBox>
        <OnBoardingText />
      </S.OnBoardingBox>
      {userType !== USER_TYPE.DESIGNER ? (
        <S.StartButton>
          <S.StartButtonSpan>
            {userType === USER_TYPE.GUEST ? '헤어 모델 지원하기 / 제안하기' : '헤어모델 지원하기'}
          </S.StartButtonSpan>
          <IcRightWhite />
        </S.StartButton>
      ) : null}
    </S.TopSheetLayout>
  );
};

export default TopSheet;

const TopSheetLayout = styled.div`
  padding: 1.9rem 1.6rem 2rem;
  border-radius: 0 0 12px 12px;

  background: ${({ theme }) => theme.colors.moddy_gradient4};
  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 20%);
`;
const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LoginButton = styled.button`
  display: flex;
  align-items: center;

  padding: 0;
`;

const LoginSpan = styled.span`
  margin-right: 0.3rem;

  color: ${({ theme }) => theme.colors.moddy_wt};
  ${({ theme }) => theme.fonts.Body02};
`;

const OnBoardingParagraph = styled.p`
  color: ${({ theme }) => theme.colors.moddy_wt};
  ${({ theme }) => theme.fonts.Title02};
`;

const OnBoardingBox = styled.div`
  padding: 2.3rem 0;
`;

const StrongSpan = styled.span`
  ${({ theme }) => theme.fonts.Title01};
`;

const StartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 5.2rem;
  border: 1px solid ${({ theme }) => theme.colors.moddy_wt};
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 24%);
  backdrop-filter: blur(5px);
`;

const StartButtonSpan = styled.span`
  color: ${({ theme }) => theme.colors.moddy_wt};
  ${({ theme }) => theme.fonts.Headline03};
`;

const S = {
  TopSheetLayout,
  HeaderBox,
  LoginButton,
  LoginSpan,
  OnBoardingParagraph,
  OnBoardingBox,
  StrongSpan,
  StartButton,
  StartButtonSpan,
};
