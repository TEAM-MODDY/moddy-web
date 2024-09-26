import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import Button from '../../../@common/components/Button';
import ProgressBar from '../../../@common/components/ProgressBar';
import { USER_TYPE } from '../../../@common/constants/userType';
import {
  EMPTY_STRING,
  HYPHEN,
  LIMIT_TIME,
  PHONE_NUMBER_FORMAT_TEMPLATE,
  PHONE_NUMBER_MAX_LENGTH,
  SECONDS_PER_MINUTE,
  VERIFY_CODE_MAX_LENGTH,
} from '../../constants/constants';
import { HELPER_MESSAGE, PLACE_HOLDER_MESSAGE, TOAST_MESSAGE } from '../../constants/message';
import { STATUS } from '../../constants/requestStatus';
import { STEP, TOTAL_STEP } from '../../constants/step';
import { EnterProfileProp } from '../../enterProfileProp';
import useInterval from '../../hooks/useInterval';
import usePostPhoneNumber from '../../hooks/usePostPhoneNumber';
import usePostVerifyPhoneNumber from '../../hooks/usePostVerifyPhoneNumber';
import Field from '../@common/Field';

import { phoneNumberState, tempUserTypeState, verifyCodeState } from '@/recoil/atoms/signUpState';
import ToastMessage from '@/views/@common/components/ToastMessage';
import { REGEX } from '@/views/@common/utils/regex';

const PhoneNumber = ({ setStep }: EnterProfileProp) => {
  const userType = useRecoilValue(tempUserTypeState);

  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useRecoilState(phoneNumberState);
  const [verifyCode, setVerifyCode] = useRecoilState(verifyCodeState);
  const [seconds, setSeconds] = useState(LIMIT_TIME);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isRequested, setIsRequested] = useState(false);
  const { postPhoneNumber } = usePostPhoneNumber(phoneNumber.data);
  const { postVerifyPhoneNumber } = usePostVerifyPhoneNumber(phoneNumber.data, verifyCode.data);

  useInterval(() => {
    isVerifying && seconds > 0 && setSeconds((prev) => prev - 1);
  }, 1000);

  const formatTime = () => {
    const minutes = Math.floor(seconds / SECONDS_PER_MINUTE);
    const secondsLeft = seconds % SECONDS_PER_MINUTE;
    return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`; // 남은 시간을 M:SS 형태로 나타냄
  };

  const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = e.target.value;
    if (REGEX.PHONE_NUMBER.test(phoneNumber)) {
      setPhoneNumber({
        data: phoneNumber,
        status: phoneNumber.length === PHONE_NUMBER_MAX_LENGTH ? STATUS.AVAILABLE : STATUS.NOT_AVAILABLE,
      });
    }
  };

  const handleVerifyCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const verifyCode = e.target.value;
    if (REGEX.VERIFY_CODE.test(verifyCode)) {
      setVerifyCode({
        data: verifyCode,
        status: verifyCode.length === VERIFY_CODE_MAX_LENGTH ? STATUS.AVAILABLE : STATUS.NOT_AVAILABLE,
      });
    }
  };

  const handleRequestVerify = () => {
    phoneNumber.data.replace(HYPHEN, EMPTY_STRING);
    if (phoneNumber.status === STATUS.AVAILABLE) {
      setPhoneNumber({
        data: phoneNumber.data,
        status: STATUS.RE_AVALILABLE,
      });
      postPhoneNumber();
      setIsVerifying(true);
      setIsRequested(true);
    } else if (phoneNumber.status === STATUS.RE_AVALILABLE) {
      postPhoneNumber();
      setSeconds(LIMIT_TIME);
    }
  };

  const handleConfirmVerify = async () => {
    if (seconds > 0) {
      if (verifyCode.status === STATUS.AVAILABLE) {
        const success = await postVerifyPhoneNumber();
        if (success) {
          setPhoneNumber({
            data: phoneNumber.data,
            status: STATUS.DONE,
          });
          setVerifyCode({
            data: verifyCode.data,
            status: STATUS.VERIFIED,
          });
        } else {
          setToastOpen(true);
        }
      }
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
            value={phoneNumber.data
              .replace(REGEX.ALL_HYPHEN, EMPTY_STRING)
              .replace(REGEX.PHONE_NUMBER_PATTERN, PHONE_NUMBER_FORMAT_TEMPLATE)}
            onChange={handlePhoneNumber}
            disabled={verifyCode.status === STATUS.VERIFIED}
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
              disabled={verifyCode.status === STATUS.VERIFIED}
            />
            <S.CountDownSpan>
              {!isVerifying || verifyCode.status === STATUS.VERIFIED ? null : formatTime()}
            </S.CountDownSpan>
            <S.RequestButton
              $status={verifyCode.status}
              onClick={handleConfirmVerify}
              disabled={verifyCode.status === STATUS.VERIFIED}>
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
      {isToastOpen && <ToastMessage text={TOAST_MESSAGE.INPUT_EXACT_VERIFY_NUMBER} setter={setToastOpen} />}
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

  &:disabled {
    color: ${({ theme }) => theme.colors.moddy_gray50};
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
