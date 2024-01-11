import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import { IcCheckBlue, IcInformation } from '../../@common/assets/icons';
import Button from '../../@common/components/Button';
import Input from '../../@common/components/Input';
import ProgressBar from '../../@common/components/ProgressBar';
import ToastMessage from '../../@common/components/ToastMessage';
import { USER_TYPE } from '../../@common/utils/userType';
import { HELPER_MESSAGE, PLACE_HOLDER_MESSAGE, TOAST_MESSAGE } from '../constants/message';
import { STEP, TOTAL_STEP } from '../constants/step';
import { EnterProfileProp } from '../utils/enterProfileProp';

import Field from './Field';

import { birthYearState, genderState, nameState, userTypeState } from '@/recoil/atoms/signUpState';

const PersonalInfo = ({ setStep }: EnterProfileProp) => {
  const userType = useRecoilValue(userTypeState);

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

  const handleBirthYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b]{0,4}$/;

    if (regex.test(e.target.value)) {
      setBirthYear({ data: e.target.value, verifyStatus: verificationStatus.isBirthYearVerified });
      if (e.target.value.length === 4) {
        const regex = /^(19[0-9]{2}|200[0-9]|201[0-9]|202[0-4])$/;
        regex.test(e.target.value)
          ? (setVerificationStatus((prevState) => ({ ...prevState, isBirthYearVerified: true })),
            setBirthYear({ data: e.target.value, verifyStatus: true }))
          : (setVerificationStatus((prevState) => ({ ...prevState, isBirthYearVerified: false })),
            setToastOpen(true),
            setBirthYear({ data: e.target.value, verifyStatus: false }));
      } else {
        setVerificationStatus((prevState) => ({ ...prevState, isBirthYearVerified: false }));
        setBirthYear({ data: e.target.value, verifyStatus: false });
      }
    }
  };

  const handleName = (value: string) => {
    if (value.length > 0 && value.length <= 10) {
      setVerificationStatus((prevState) => ({ ...prevState, isNameVerified: true }));
      setName({ data: value, verifyStatus: true });
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
          <Input placeholderText={PLACE_HOLDER_MESSAGE.INPUT_NAME} onChangeFn={handleName} initialValue={name.data} />
          <S.HelperBox>
            <IcInformation />
            <S.HelperSpan>
              {userType === USER_TYPE.DESIGNER ? HELPER_MESSAGE.INPUT_DESIGNER_NAME : HELPER_MESSAGE.INPUT_REAL_NAME}
            </S.HelperSpan>
          </S.HelperBox>
          {userType === USER_TYPE.DESIGNER ? null : (
            <>
              <Field name="출생 연도" isEssential={true} />
              <S.InputBox>
                <S.VerifyInput
                  placeholder={PLACE_HOLDER_MESSAGE.INPUT_BIRTH_YEAR}
                  value={birthYear.data}
                  onChange={handleBirthYear}
                />
                {verificationStatus.isBirthYearVerified ? <IcCheckBlue /> : null}
              </S.InputBox>
            </>
          )}
          <Field name="성별" isEssential={true} />
          <S.GenderSelectBox>
            <S.RadioInput
              type="radio"
              id="female"
              name="gender-type"
              checked={gender.data === 'female'}
              onChange={handleGender}
            />
            <S.GenderTypeLabel htmlFor="female">여성</S.GenderTypeLabel>
            <S.RadioInput
              type="radio"
              id="male"
              name="gender-type"
              checked={gender.data === 'male'}
              onChange={handleGender}
            />
            <S.GenderTypeLabel htmlFor="male">남성</S.GenderTypeLabel>
          </S.GenderSelectBox>
        </S.FormBox>
      </S.PersonalInfoLayout>
      <Button
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
