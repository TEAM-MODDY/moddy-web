import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import { IcInformation } from '../../../@common/assets/icons';
import Button from '../../../@common/components/Button';
import ProgressBar from '../../../@common/components/ProgressBar';
import ToastMessage from '../../../@common/components/ToastMessage';
import { USER_TYPE } from '../../../@common/constants/userType';
import { BIRTH_YEAR_LENGTH, NAME_MAX_LENGTH } from '../../constants/constants';
import { HELPER_MESSAGE, PLACE_HOLDER_MESSAGE, TOAST_MESSAGE } from '../../constants/message';
import { STEP, TOTAL_STEP } from '../../constants/step';
import { EnterProfileProp } from '../../utils/enterProfileProp';
import Field from '../@common/Field';

import { birthYearState, genderState, nameState, tempUserTypeState } from '@/recoil/atoms/signUpState';
import Input from '@/views/@common/components/Input';
import { REGEX } from '@/views/@common/utils/regex';

const PersonalInfo = ({ setStep }: EnterProfileProp) => {
  const userType = useRecoilValue(tempUserTypeState);

  const [name, setName] = useRecoilState(nameState);
  const [birthYear, setBirthYear] = useRecoilState(birthYearState);
  const [gender, setGender] = useRecoilState(genderState);
  const [isAllVerified, setIsAllVerified] = useState(false);

  const [isToastOpen, setToastOpen] = useState<boolean>(false);

  const handleBirthYear = (value: string) => {
    if (REGEX.YEAR.test(value)) {
      setBirthYear(value);
      if (value.length === BIRTH_YEAR_LENGTH) {
        !REGEX.BIRTH_YEAR.test(value) && setToastOpen(true);
      }
    }
  };

  const handleName = (value: string) => {
    setName(value);
  };

  const handleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.id);
  };

  const validateAllVerified = () => {
    return userType === USER_TYPE.DESIGNER
      ? setIsAllVerified(REGEX.NAME.test(name) && REGEX.NOT_EMPTY.test(gender))
      : setIsAllVerified(REGEX.NAME.test(name) && REGEX.BIRTH_YEAR.test(birthYear) && REGEX.NOT_EMPTY.test(gender));
  };

  useEffect(() => {
    validateAllVerified();
  }, [name, birthYear, gender]);

  return (
    <>
      <ProgressBar
        whole={userType === USER_TYPE.DESIGNER ? TOTAL_STEP.DESIGNER_VIEW : TOTAL_STEP.MODEL_VIEW}
        current={STEP.PERSONAL_INFO}
      />
      <S.PersonalInfoLayout>
        <S.FormBox>
          <Field name={userType === USER_TYPE.DESIGNER ? '디자이너명' : '이름'} isEssential={true} />
          <Input
            placeholderText={PLACE_HOLDER_MESSAGE.INPUT_NAME}
            onChangeFn={handleName}
            initialValue={name}
            maxLength={NAME_MAX_LENGTH}
          />
          <S.HelperBox>
            <IcInformation />
            <S.HelperSpan>
              {userType === USER_TYPE.DESIGNER ? HELPER_MESSAGE.INPUT_DESIGNER_NAME : HELPER_MESSAGE.INPUT_REAL_NAME}
            </S.HelperSpan>
          </S.HelperBox>
          {userType === USER_TYPE.DESIGNER ? null : (
            <>
              <Field name="출생 연도" isEssential={true} />
              <Input
                placeholderText={PLACE_HOLDER_MESSAGE.INPUT_BIRTH_YEAR}
                initialValue={birthYear}
                onChangeFn={handleBirthYear}
                regex={REGEX.BIRTH_YEAR}
                maxLength={BIRTH_YEAR_LENGTH}
              />
            </>
          )}
          <Field name="성별" isEssential={true} />
          <S.GenderSelectBox>
            <S.RadioInput
              type="radio"
              id="FEMALE"
              name="gender-type"
              checked={gender === 'FEMALE'}
              onChange={handleGender}
            />
            <S.GenderTypeLabel htmlFor="FEMALE">여성</S.GenderTypeLabel>
            <S.RadioInput
              type="radio"
              id="MALE"
              name="gender-type"
              checked={gender === 'MALE'}
              onChange={handleGender}
            />
            <S.GenderTypeLabel htmlFor="MALE">남성</S.GenderTypeLabel>
          </S.GenderSelectBox>
        </S.FormBox>
      </S.PersonalInfoLayout>
      <Button
        id="ga-personal-info-btn"
        text="다음"
        isFixed={true}
        onClickFn={() => setStep((prev) => prev + 1)}
        disabled={!isAllVerified}
      />
      {isToastOpen && <ToastMessage text={TOAST_MESSAGE.INPUT_EXACT_BIRTH_YEAR} setter={setToastOpen} />}
    </>
  );
};

export default PersonalInfo;
const PersonalInfoLayout = styled.div`
  margin-top: 8.6rem;
  padding: 0 1.6rem;
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

const InputBox = styled.div`
  position: relative;

  width: 100%;
  margin-top: 0.8rem;

  & > svg {
    position: absolute;
    top: 0.9rem;
    right: 1.3rem;
  }
`;

const VerifyInput = styled.input`
  width: 100%;
  padding: 1.2rem 1.6rem;
  border: 1.5px solid ${({ theme }) => theme.colors.moddy_gray20};
  border-radius: 8px;

  color: ${({ theme }) => theme.colors.moddy_bk};
  ${({ theme }) => theme.fonts.Body02};

  &::placeholder {
    color: ${({ theme }) => theme.colors.moddy_gray50};
  }

  &:focus {
    outline: 1.5px solid ${({ theme }) => theme.colors.moddy_blue};
  }
`;
const S = {
  PersonalInfoLayout,
  FormBox,
  HelperBox,
  HelperSpan,
  RadioInput,
  GenderTypeLabel,
  GenderSelectBox,
  InputBox,
  VerifyInput,
};
