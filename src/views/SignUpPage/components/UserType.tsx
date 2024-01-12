import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import Button from '../../@common/components/Button';
import Header from '../../@common/components/Header';
import { HELPER_MESSAGE } from '../constants/message';
import { ON_BOARDING_TEXT } from '../constants/text';

import { userTypeState } from '@/recoil/atoms/signUpState';
import designerImg from '@images/img_designer.png';
import modelImg from '@images/img_model.png';

interface SelectUserTypeProp {
  setStep: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserType = ({ setStep }: SelectUserTypeProp) => {
  const navigate = useNavigate();
  const [userType, setUserType] = useRecoilState(userTypeState);

  const handleUserType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserType(e.target.id);
  };

  return (
    <>
      <Header
        isBackBtnExist={true}
        isCloseBtnExist={false}
        title=""
        backFn={() => {
          navigate(-1);
        }}
      />
      <S.SelectUserTypeLayout>
        <S.OnBoardingSpan>{ON_BOARDING_TEXT.SELECT_USER_TYPE}</S.OnBoardingSpan>
        <S.HelperTextSpan>{HELPER_MESSAGE.USER_TYPE_CHANGE_UNAVAILABLE}</S.HelperTextSpan>
        <S.RadioBox>
          <S.RadioInput
            type="radio"
            id="designer"
            name="user-type"
            value={userType}
            onChange={handleUserType}
            checked={userType === 'designer'}
          />
          <S.UserTypeBoxLabel htmlFor="designer">
            <S.ImageBox>
              <img src={designerImg} width="100%" alt="디자이너" />
            </S.ImageBox>
            <S.UserTypeSpan>헤어 디자이너</S.UserTypeSpan>
            <S.UserTypeInfoSpan>
              포트폴리오 / 홍보를 위한
              <br />
              모델을 찾고 있어요
            </S.UserTypeInfoSpan>
          </S.UserTypeBoxLabel>
          <S.RadioInput
            type="radio"
            id="model"
            name="user-type"
            value={userType}
            onChange={handleUserType}
            checked={userType === 'model'}
          />
          <S.UserTypeBoxLabel htmlFor="model">
            <S.ImageBox>
              <img src={modelImg} width="100%" alt="모델" />
            </S.ImageBox>
            <S.UserTypeSpan>일반인/모델</S.UserTypeSpan>
            <S.UserTypeInfoSpan>
              예쁜 헤어 스타일을
              <br />
              무료(최소금액)로 받고 싶어요
            </S.UserTypeInfoSpan>
          </S.UserTypeBoxLabel>
        </S.RadioBox>
      </S.SelectUserTypeLayout>
      <Button text="다음" isFixed={true} onClickFn={() => setStep(false)} disabled={!userType} />
    </>
  );
};
export default UserType;

const OnBoardingSpan = styled.span`
  color: ${({ theme }) => theme.colors.moddy_bk};
  ${({ theme }) => theme.fonts.Title01};
`;

const HelperTextSpan = styled.span`
  margin-top: 0.8rem;

  color: ${({ theme }) => theme.colors.moddy_gray50};
  ${({ theme }) => theme.fonts.Body02};
`;

const SelectUserTypeLayout = styled.div`
  display: flex;
  flex-direction: column;

  height: 100dvh;
  padding: 9.2rem 1.6rem;

  background: ${({ theme }) => theme.colors.moddy_wt};
`;

const RadioBox = styled.div`
  display: flex;
  gap: 1.5rem;

  margin-top: 6.4rem;
`;

const UserTypeBoxLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  width: 16.4rem;
  padding: 1.4rem 0;
  border: 1.5px solid ${({ theme }) => theme.colors.moddy_gray20};
  border-radius: 12px;

  background: ${({ theme }) => theme.colors.moddy_wt};
`;

const ImageBox = styled.div`
  width: 10rem;

  background-color: transparent;
  filter: drop-shadow(0 0 3rem rgb(82 0 255 / 25%));
`;

const UserTypeSpan = styled.span`
  margin-top: 1rem;

  color: ${({ theme }) => theme.colors.moddy_bk};
  ${({ theme }) => theme.fonts.Body01};
`;

const UserTypeInfoSpan = styled.span`
  margin-top: 0.8rem;

  color: ${({ theme }) => theme.colors.moddy_gray50};
  text-align: center;
  line-height: 1.2rem;
  ${({ theme }) => theme.fonts.Caption02};
`;

const RadioInput = styled.input`
  display: none;

  &:checked + label {
    border: 1.5px solid ${({ theme }) => theme.colors.moddy_blue};

    box-shadow: ${({ theme }) => theme.effects.shadow2};
  }
`;

const S = {
  OnBoardingSpan,
  HelperTextSpan,
  SelectUserTypeLayout,
  RadioBox,
  UserTypeBoxLabel,
  UserTypeInfoSpan,
  UserTypeSpan,
  ImageBox,
  RadioInput,
};
