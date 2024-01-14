import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import Button from '../../@common/components/Button';
import ProgressBar from '../../@common/components/ProgressBar';
import { USER_TYPE } from '../../@common/constants/userType';
import { HELPER_MESSAGE, PLACE_HOLDER_MESSAGE } from '../constants/message';
import { STATUS } from '../constants/requestStatus';
import { STEP, TOTAL_STEP } from '../constants/step';
import useInterval from '../hooks/useInterval';
import { EnterProfileProp } from '../utils/enterProfileProp';

import Field from './Field';

import { phoneNumberState, tempUserTypeState, verifyCodeState } from '@/recoil/atoms/signUpState';

const PhoneNumber = ({ setStep }: EnterProfileProp) => {
  const userType = useRecoilValue(tempUserTypeState);

  const [phoneNumber, setPhoneNumber] = useRecoilState(phoneNumberState);
  const [verifyCode, setVerifyCode] = useRecoilState(verifyCodeState);
  const [seconds, setSeconds] = useState(180);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isRequested, setIsRequested] = useState(false);

  useInterval(() => {
    isVerifying && seconds > 0 && setSeconds((prev) => prev - 1);
  }, 1000);

  const formatTime = () => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
  };

  const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setPhoneNumber({
        data: e.target.value,
        status: e.target.value.length === 11 ? STATUS.AVAILABLE : STATUS.NOT_AVAILABLE,
      });
    }
  };

  const handleVerifyCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b]{0,6}$/;
    if (regex.test(e.target.value)) {
      setVerifyCode({
        data: e.target.value,
        status: e.target.value.length === 6 ? STATUS.AVAILABLE : STATUS.NOT_AVAILABLE,
      });
    }
  };

  const handleRequestVerify = () => {
    if (phoneNumber.status !== STATUS.DONE) {
      if (phoneNumber.status === STATUS.RE_AVALILABLE) {
        setSeconds(180);
      }
      setIsRequested(true);
      setIsVerifying(true);
      phoneNumber.data.replace('-', '');
      setPhoneNumber({
        data: phoneNumber.data,
        status: STATUS.RE_AVALILABLE,
      });
    }
  };

  const handleConfirmVerify = () => {
    if (seconds > 0) {
      setPhoneNumber({
        data: phoneNumber.data,
        status: STATUS.DONE,
      });
      setVerifyCode({
        data: verifyCode.data,
        status: STATUS.VERIFIED,
      });
    }
  };

  return (
    <>
      <ProgressBar
        whole={userType === USER_TYPE.DESIGNER ? TOTAL_STEP.DESIGNER_VIEW : TOTAL_STEP.MODEL_VIEW}
        current={STEP.PHONE_NUMBER_VERIFICATION}
      />
      <S.VerifyPhoneNumberLayout>
        <S.FormBox>
          <Field name="전화번호 인증" isEssential={true} />
        </S.FormBox>
        <S.HelperBox>
          <S.HelperSpan>{HELPER_MESSAGE.VERIFY_PHONE_NUMBER}</S.HelperSpan>
        </S.HelperBox>
        <S.InputBox>
          <S.Input
            placeholder={PLACE_HOLDER_MESSAGE.INPUT_PHONE_NUMBER}
            value={phoneNumber.data.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')}
            onChange={handlePhoneNumber}
          />
          <S.RequestButton $status={phoneNumber.status} onClick={handleRequestVerify}>
            {phoneNumber.status !== STATUS.RE_AVALILABLE && phoneNumber.status !== STATUS.DONE ? '인증 요청' : '재요청'}
          </S.RequestButton>
        </S.InputBox>
        {isRequested && (
          <S.InputBox>
            <S.Input
              placeholder={PLACE_HOLDER_MESSAGE.INPUT_VERIFY_CODE}
              value={verifyCode.data}
              onChange={handleVerifyCode}
            />
            <S.CountDownSpan>
              {!isVerifying || verifyCode.status === STATUS.VERIFIED ? null : formatTime()}
            </S.CountDownSpan>
            <S.RequestButton $status={verifyCode.status} onClick={handleConfirmVerify}>
              {verifyCode.status !== STATUS.VERIFIED ? '확인' : '인증 완료'}
            </S.RequestButton>
          </S.InputBox>
        )}
      </S.VerifyPhoneNumberLayout>
      <Button
        text="다음"
        isFixed={true}
        onClickFn={() =>
          userType === USER_TYPE.DESIGNER ? setStep(STEP.DESIGNER.SHOP_INFO) : setStep(STEP.MODEL.PREFER_REGION)
        }
        disabled={verifyCode.status !== STATUS.VERIFIED}
      />
    </>
  );
};

export default PhoneNumber;

const VerifyPhoneNumberLayout = styled.div`
  margin-top: 8.6rem;
  padding: 0 1.6rem;
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2.4rem;
`;

const HelperBox = styled.div`
  margin-bottom: 1.2rem;
`;

const HelperSpan = styled.span`
  margin-top: 0.8rem;

  color: ${({ theme }) => theme.colors.moddy_gray50};
  ${({ theme }) => theme.fonts.Body02};
`;

const InputBox = styled.div`
  position: relative;

  width: 100%;
  margin-top: 0.8rem;

  & > button {
    position: absolute;
    top: 1.2rem;
    right: 1.3rem;
  }

  & > span {
    position: absolute;
    top: 1.2rem;
    right: 5.4rem;
  }
`;

const Input = styled.input`
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

const RequestButton = styled.button<{ $status: number }>`
  color: ${({ theme, $status }) =>
    $status === STATUS.NOT_AVAILABLE || $status === STATUS.DONE
      ? theme.colors.moddy_gray20
      : $status === STATUS.AVAILABLE || $status === STATUS.VERIFIED
        ? theme.colors.moddy_blue
        : theme.colors.moddy_bk};
  ${({ theme }) => theme.fonts.Body01};
`;

const CountDownSpan = styled.span`
  color: ${({ theme }) => theme.colors.moddy_blue2};
  ${({ theme }) => theme.fonts.Body01};
`;

const S = {
  VerifyPhoneNumberLayout,
  FormBox,
  HelperBox,
  HelperSpan,
  InputBox,
  Input,
  RequestButton,
  CountDownSpan,
};
