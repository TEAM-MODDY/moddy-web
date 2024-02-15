import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import { IcInformation } from '../../@common/assets/icons';
import Button from '../../@common/components/Button';
import ProgressBar from '../../@common/components/ProgressBar';
import ToastMessage from '../../@common/components/ToastMessage';
import { USER_TYPE } from '../../@common/constants/userType';
import { HELPER_MESSAGE, PLACE_HOLDER_MESSAGE, TOAST_MESSAGE } from '../constants/message';
import { STEP, TOTAL_STEP } from '../constants/step';
import { EnterProfileProp } from '../utils/enterProfileProp';

import Field from './Field';

import { birthYearState, genderState, nameState, tempUserTypeState } from '@/recoil/atoms/signUpState';
import Input from '@/views/@common/components/Input';
import { REGEX } from '@/views/@common/utils/regex';

const PersonalInfo = ({ setStep }: EnterProfileProp) => {
  const userType = useRecoilValue(tempUserTypeState);

  const [name, setName] = useRecoilState(nameState);
  const [birthYear, setBirthYear] = useRecoilState(birthYearState);
  const [gender, setGender] = useRecoilState(genderState);

  const [verificationStatus, setVerificationStatus] = useState({
    isNameVerified: name.verifyStatus,
    isBirthYearVerified: birthYear.verifyStatus,
    isGenderVerified: gender.verifyStatus,
    isAllVerified: name.verifyStatus && birthYear.verifyStatus && gender.verifyStatus,
  });
  const [isToastOpen, setToastOpen] = useState<boolean>(false);

  const handleBirthYear = (value: string) => {
    const regex = /^[0-9\b]{0,4}$/;
    if (regex.test(value)) {
      setBirthYear({ data: value, verifyStatus: verificationStatus.isBirthYearVerified });
      if (value.length === 4) {
        const regex = REGEX.BIRTH_YEAR;
        regex.test(value)
          ? (setVerificationStatus((prevState) => ({ ...prevState, isBirthYearVerified: true })),
            setBirthYear({ data: value, verifyStatus: true }))
          : (setVerificationStatus((prevState) => ({ ...prevState, isBirthYearVerified: false })),
            setToastOpen(true),
            setBirthYear({ data: value, verifyStatus: false }));
      } else {
        setVerificationStatus((prevState) => ({ ...prevState, isBirthYearVerified: false }));
        setBirthYear({ data: value, verifyStatus: false });
      }
    }
  };

  const handleName = (value: string) => {
    if (value.length > 0 && value.length <= 5) {
      setVerificationStatus((prevState) => ({ ...prevState, isNameVerified: true }));
      setName({ data: value, verifyStatus: true });
    } else {
      setVerificationStatus((prevState) => ({ ...prevState, isNameVerified: false }));
      setName({ data: value, verifyStatus: false });
    }
  };

  const handleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationStatus((prevState) => ({ ...prevState, isGenderVerified: true }));
    setGender({ data: e.target.id, verifyStatus: true });
  };

  useEffect(() => {
    userType === USER_TYPE.DESIGNER
      ? setVerificationStatus((prevState) => ({
          ...prevState,
          isAllVerified: prevState.isNameVerified && prevState.isGenderVerified,
        }))
      : setVerificationStatus((prevState) => ({
          ...prevState,
          isAllVerified: prevState.isNameVerified && prevState.isBirthYearVerified && prevState.isGenderVerified,
        }));
  }, [verificationStatus.isBirthYearVerified, verificationStatus.isGenderVerified, verificationStatus.isNameVerified]);

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
            initialValue={name.data}
            maxLength={5}
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
                initialValue={birthYear.data}
                onChangeFn={handleBirthYear}
                regex={REGEX.BIRTH_YEAR}
                maxLength={4}
              />
            </>
          )}
          <Field name="성별" isEssential={true} />
          <S.GenderSelectBox>
            <S.RadioInput
              type="radio"
              id="FEMALE"
              name="gender-type"
              checked={gender.data === 'FEMALE'}
              onChange={handleGender}
            />
            <S.GenderTypeLabel htmlFor="FEMALE">여성</S.GenderTypeLabel>
            <S.RadioInput
              type="radio"
              id="MALE"
              name="gender-type"
              checked={gender.data === 'MALE'}
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
        disabled={!verificationStatus.isAllVerified}
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
