import { styled } from 'styled-components';

import designerImg from '../../@common/assets/images/img_scissor.png';
import Button from '../../@common/components/Button';
import Header from '../../@common/components/Header';

interface SelectUserTypeProp {
  setStep: React.Dispatch<React.SetStateAction<boolean>>;
}
const SelectUserType = ({ setStep }: SelectUserTypeProp) => {
  return (
    <>
      <SelectUserTypeLayout>
        <Header isBackBtnExist={true} isCloseBtnExist={false} title="" />
        <OnBoardingSpan>어디에 해당하시나요?</OnBoardingSpan>
        <HelperTextSpan>한 번 선택하면 변경할 수 없어요</HelperTextSpan>
        <RadioBox>
          <RadioInput type="radio" id="designer" name="user-type" />
          <UserTypeBoxLabel htmlFor="designer">
            <ImageBox>
              <img src={designerImg} width="100%" alt="디자이너" />
            </ImageBox>
            <UserTypeSpan>헤어 전문가에요</UserTypeSpan>
            <UserTypeInfoSpan>
              포트폴리오 / 홍보를 위한
              <br />
              모델을 찾고 있어요
            </UserTypeInfoSpan>
          </UserTypeBoxLabel>
          <RadioInput type="radio" id="model" name="user-type" />
          <UserTypeBoxLabel htmlFor="model">
            <ImageBox>
              <img src={designerImg} width="100%" alt="디자이너" />
            </ImageBox>
            <UserTypeSpan>일반인/모델이에요</UserTypeSpan>
            <UserTypeInfoSpan>
              예쁜 헤어 스타일을
              <br />
              무료(최소금액)로 받고 싶어요
            </UserTypeInfoSpan>
          </UserTypeBoxLabel>
        </RadioBox>
      </SelectUserTypeLayout>
      <Button text="다음" isFixed={true} onClickFn={() => setStep(false)} />
    </>
  );
};
export default SelectUserType;

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

  padding: 9.2rem 1.6rem;
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
`;

const UserTypeSpan = styled.span`
  color: ${({ theme }) => theme.colors.moddy_bk};
  ${({ theme }) => theme.fonts.Body01};
`;

const UserTypeInfoSpan = styled.span`
  margin-top: 0.2rem;

  color: ${({ theme }) => theme.colors.moddy_gray50};
  ${({ theme }) => theme.fonts.Caption02};

  text-align: center;
`;

const RadioInput = styled.input`
  display: none;

  &:checked + label {
    border: 1.5px solid ${({ theme }) => theme.colors.moddy_blue};

    box-shadow: ${({ theme }) => theme.effects.shadow2};
  }
`;
