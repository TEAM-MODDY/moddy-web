import styled from 'styled-components';

import { IcEssential, IcInformation } from '../../@common/assets/icons';
import Button from '../../@common/components/Button';
import Input from '../../@common/components/Input';
import ProgressBar from '../../@common/components/ProgressBar';
interface PersonalInfoProp {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const PersonalInfo = ({ setStep }: PersonalInfoProp) => {
  return (
    <>
      <PersonalInfoLayout>
        <ProgressBar whole={5} current={1} />
        <FormBox>
          <FieldBox>
            <FieldSpan>디자이너명</FieldSpan>
            <IcEssential />
          </FieldBox>
          <Input placeholderText="이름을 입력해주세요" />
          <HelperBox>
            <IcInformation />
            <HelperSpan>실명을 입력해주세요</HelperSpan>
          </HelperBox>
          <FieldBox>
            <FieldSpan>출생 연도</FieldSpan>
            <IcEssential />
          </FieldBox>
          <Input placeholderText="출생 연도(YYYY)를 입력해주세요" />
          <FieldBox>
            <FieldSpan>성별</FieldSpan>
            <IcEssential />
          </FieldBox>
          <GenderSelectBox>
            <RadioInput type="radio" id="female" name="gender-type" />
            <GenderTypeLabel htmlFor="female">여성</GenderTypeLabel>
            <RadioInput type="radio" id="male" name="gender-type" />
            <GenderTypeLabel htmlFor="male">남성</GenderTypeLabel>
          </GenderSelectBox>
        </FormBox>
      </PersonalInfoLayout>
      <Button text="다음" isFixed={true} onClickFn={() => setStep((prev) => prev + 1)} />
    </>
  );
};

export default PersonalInfo;

const PersonalInfoLayout = styled.div`
  padding: 5.4rem 1.6rem;
`;

const FieldBox = styled.div`
  display: flex;

  margin-top: 3.6rem;
  margin-bottom: 1.1rem;

  &:first-child {
    margin-top: 0;
  }
`;

const FieldSpan = styled.span`
  color: ${({ theme }) => theme.colors.moddy_bk};
  ${({ theme }) => theme.fonts.Headline01};
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2.4rem;
`;

const HelperBox = styled.div`
  display: flex;
  gap: 0.4rem;

  margin-top: 0.8rem;
`;

const HelperSpan = styled.span`
  color: ${({ theme }) => theme.colors.moddy_blue2};
  ${({ theme }) => theme.fonts.Body04};
`;

const RadioInput = styled.input`
  display: none;

  &:checked + label {
    border: 1.5px solid ${({ theme }) => theme.colors.moddy_blue};

    box-shadow: ${({ theme }) => theme.effects.shadow2};

    color: ${({ theme }) => theme.colors.moddy_bk};
  }
`;

const GenderTypeLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  width: 16.4rem;
  padding: 1.2rem 0;
  border: 1.5px solid ${({ theme }) => theme.colors.moddy_gray20};
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.moddy_wt};

  color: ${({ theme }) => theme.colors.moddy_gray50};
  ${({ theme }) => theme.fonts.Body01};
`;

const GenderSelectBox = styled.div`
  display: flex;
  gap: 1.6rem;
`;
