import { useState } from 'react';
import { styled } from 'styled-components';

import Button from '../../@common/components/Button';
import ProgressBar from '../../@common/components/ProgressBar';
import { STATUS } from '../constants/requestStatus';
import { STEP } from '../constants/step';
import { USER_TYPE } from '../constants/userType';
import useInterval from '../hooks/useInterval';

import Field from './Field';

interface VerifyPhoneNumberProp {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const VerifyPhoneNumber = ({ setStep }: VerifyPhoneNumberProp) => {
  const userType = USER_TYPE.MODEL;

  const [requestStatus, setRequestStatus] = useState(STATUS.NOT_AVAILABLE);
  const [verifyStatus, setVerifyStatus] = useState(STATUS.NOT_AVAILABLE);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verifyNumber, setVerifyNumber] = useState('');
  const [seconds, setSeconds] = useState(180);
  const [isVerifying, setIsVerifying] = useState(false);

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
      setPhoneNumber(e.target.value);
      e.target.value.length === 11 ? setRequestStatus(STATUS.AVAILABLE) : setRequestStatus(STATUS.NOT_AVAILABLE);
    }
  };

  const handleVerifyNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b -]{0,6}$/;
    if (regex.test(e.target.value)) {
      setVerifyNumber(e.target.value);
      e.target.value.length === 6 ? setVerifyStatus(STATUS.AVAILABLE) : setVerifyStatus(STATUS.NOT_AVAILABLE);
    }
  };

  const handleRequestVerify = () => {
    if (requestStatus !== STATUS.DONE) {
      if (requestStatus === STATUS.RE_AVALILABLE) {
        setSeconds(180);
      }
      setIsVerifying(true);
      phoneNumber.replace('-', '');
      setRequestStatus(STATUS.RE_AVALILABLE);
    }
  };

  const handleConfirmVerify = () => {
    if (seconds > 0) {
      setRequestStatus(STATUS.DONE);
      setVerifyStatus(STATUS.VERIFIED);
    }
  };

  return (
    <>
      <ProgressBar whole={userType === USER_TYPE.DESIGNER ? 5 : 3} current={2} />
      <S.VerifyPhoneNumberLayout>
        <S.FormBox>
          <Field name="전화번호 인증" isEssential={true} />
        </S.FormBox>
        <S.HelperBox>
          <S.HelperSpan>헤어 모델과의 신뢰를 위해 휴대폰 인증을 진행해주세요</S.HelperSpan>
        </S.HelperBox>
        <S.InputBox>
          <S.Input
            placeholder="전화번호를 입력해주세요 (‘-’ 제외)"
            value={phoneNumber.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')}
            onChange={handlePhoneNumber}
          />
          <S.RequestButton $status={requestStatus} onClick={handleRequestVerify}>
            {requestStatus !== STATUS.RE_AVALILABLE && requestStatus !== STATUS.DONE ? '인증 요청' : '재요청'}
          </S.RequestButton>
        </S.InputBox>
        <S.InputBox>
          <S.Input placeholder="인증번호 6자리를 입력해주세요" value={verifyNumber} onChange={handleVerifyNumber} />
          <S.CountDownSpan>{!isVerifying || verifyStatus === STATUS.VERIFIED ? null : formatTime()}</S.CountDownSpan>
          <S.RequestButton $status={verifyStatus} onClick={handleConfirmVerify}>
            {verifyStatus !== STATUS.VERIFIED ? '확인' : '인증완료'}
          </S.RequestButton>
        </S.InputBox>
      </S.VerifyPhoneNumberLayout>
      <Button text="다음" isFixed={true} onClickFn={() => setStep(STEP.PREFER_REGION)} />
    </>
  );
};

export default VerifyPhoneNumber;

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
