import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { IcLogoHome, IcRightWhite, IcModdyuser } from '../assets/icons';
import { APPLY_STATUS } from '../constants/status';

import Modal from '@/views/@common/components/Modal';
import { USER_TYPE } from '@/views/@common/constants/userType';
import useGetCheckApplication from '@/views/@common/hooks/useGetCheckApplication';
import { gaEvent } from '@/views/@common/utils/ga';

interface TopSheetProps {
  userType: string;
  applyType?: string;
  name?: string;
}

const TopSheet = (props: TopSheetProps) => {
  const { userType, applyType, name } = props;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const getCheckApplication = useGetCheckApplication();
  const navigate = useNavigate();

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
          {name}님 안녕하세요!
          <br /> 지원자에게 <S.StrongSpan>모델</S.StrongSpan>을 <S.StrongSpan>제안</S.StrongSpan>해보세요
        </S.OnBoardingParagraph>
      );
    } else if (userType === USER_TYPE.MODEL) {
      if (applyType === APPLY_STATUS.NOTHING) {
        return (
          <S.OnBoardingParagraph>
            헤어 모델 지원하고,
            <br /> <S.StrongSpan>무료/최소금액</S.StrongSpan>으로 예쁜 머리하기
          </S.OnBoardingParagraph>
        );
      } else if (applyType === APPLY_STATUS.WAITING) {
        return (
          <S.OnBoardingParagraph>
            헤어 디자이너의
            <br /> <S.StrongSpan>제안서</S.StrongSpan>를 기다리고 있어요
          </S.OnBoardingParagraph>
        );
      } else if (applyType === APPLY_STATUS.RECEIVED) {
        return (
          <S.OnBoardingParagraph>
            {name}님 안녕하세요!
            <br /> <S.StrongSpan>신규 제안서</S.StrongSpan>가 도착했어요
          </S.OnBoardingParagraph>
        );
      }
    }
  };

  const LoginButton = () => (
    <S.LoginButton type="button" onClick={() => navigate('/login')}>
      <S.LoginSpan>로그인하기</S.LoginSpan>
      <IcRightWhite />
    </S.LoginButton>
  );

  const MyPageButton = () => (
    <button type="button" onClick={() => navigate('/my-page')}>
      <IcModdyuser />
    </button>
  );

  const checkApplicationStatus = async () => {
    try {
      const response = await getCheckApplication();
      return response?.code === 200;
    } catch (error) {
      return false;
    }
  };

  const handleNavigate = async () => {
    gaEvent('메인 뷰 전환', 'apply');
    if (userType === USER_TYPE.MODEL) {
      const isValidApplication = await checkApplicationStatus();
      isValidApplication ? setIsOpenModal(true) : navigate('/application');
    } else if (userType === USER_TYPE.GUEST) {
      navigate('/login');
    }
  };

  const StartButton = () => (
    <S.StartButton type="button" onClick={handleNavigate}>
      <S.StartButtonSpan>헤어 모델 지원하기{userType === USER_TYPE.GUEST && ' / 제안하기'}</S.StartButtonSpan>
      <IcRightWhite />
    </S.StartButton>
  );

  return (
    <>
      <S.TopSheetLayout>
        <S.HeaderBox>
          <IcLogoHome />
          {userType === USER_TYPE.GUEST ? <LoginButton /> : <MyPageButton />}
        </S.HeaderBox>
        <S.OnBoardingBox>
          <OnBoardingText />
        </S.OnBoardingBox>
        {userType !== USER_TYPE.DESIGNER && <StartButton />}
      </S.TopSheetLayout>
      {isOpenModal ? (
        <Modal
          title="새로운 지원서를 등록할까요?"
          description="현재 지원서에<br/>등록된 내용은 사라져요"
          leftBtnText="취소"
          rightBtnText="확인"
          leftBtnFn={() => setIsOpenModal(false)}
          rightBtnFn={() => navigate('/application')}
        />
      ) : null}
    </>
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
  height: 5.6rem;

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
