import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import { IcRightBlueThin } from '../../assets/icons';
import { HELPER_MESSAGE, PLACE_HOLDER_MESSAGE, TOAST_MESSAGE } from '../../constants/message';
import { EnterProfileProp } from '../../enterProfileProp';
import Field from '../@common/Field';

import { IcInformation } from '@/views/@common/assets/icons';
import Button from '@/views/@common/components/Button';
import ToastMessage from '@/views/@common/components/ToastMessage';

const Code = ({ setStep }: EnterProfileProp) => {
  const [code, setCode] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isToastOpen, setToastOpen] = useState(false);

  const handleCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.currentTarget.value);
    setIsValid(false);
  };
  const handleClickCodeVerify = () => {
    if (code === 'ADMODY') {
      setIsValid(true);
    } else {
      setToastOpen(true);
    }
  };

  return (
    <>
      <S.OpenChatLinkLayout>
        <Field name="헤어디자이너 인증" isEssential={true} />
        <S.HelperTextBox>{HELPER_MESSAGE.INPUT_DESIGNER_CODE}</S.HelperTextBox>
        <S.InputBox>
          <S.Input
            placeholder={PLACE_HOLDER_MESSAGE.INPUT_DESIGNER_CODE}
            value={code}
            onChange={handleCodeChange}
            maxLength={6}
          />
          <S.RequestButton $isValid={code.length === 6} onClick={handleClickCodeVerify} disabled={code.length < 6}>
            {!isValid ? '확인' : '인증 완료'}
          </S.RequestButton>
        </S.InputBox>
        <S.HelperBox>
          <IcInformation />
          <S.HelperSpan>
            아직 코드를 받지 못했다면? &nbsp;
            <S.MoreAboutOpenChatButton
              onClick={() => {
                window.open('https://open.kakao.com/o/s82rmvQg');
              }}>
              여기로 문의해주세요
              <IcRightBlueThin />
            </S.MoreAboutOpenChatButton>
          </S.HelperSpan>
        </S.HelperBox>
      </S.OpenChatLinkLayout>
      <Button
        text="다음"
        isFixed={true}
        disabled={!isValid}
        onClickFn={() => {
          setStep((prev) => prev + 0.5);
        }}
      />
      {isToastOpen && <ToastMessage text={TOAST_MESSAGE.INPUT_EXACT_DESIGNER_CODE} setter={setToastOpen} />}
    </>
  );
};

export default Code;

const S = {
  HelperBox: styled.div`
    display: flex;
    align-items: center;

    padding-top: 0.8rem;

    & > svg {
      margin-right: 0.4rem;
    }
  `,

  HelperSpan: styled.span`
    color: ${({ theme }) => theme.colors.moddy_blue2};
    ${({ theme }) => theme.fonts.Body04};
  `,

  MoreAboutOpenChatButton: styled.a`
    border-bottom: 1px solid ${({ theme }) => theme.colors.moddy_blue2};

    color: ${({ theme }) => theme.colors.moddy_blue2};
    ${({ theme }) => theme.fonts.Body04};

    & > svg {
      height: 0.9rem;
      margin-left: 0.3rem;
    }
  `,

  UnderLineBox: styled.div`
    position: absolute;
    bottom: 0;

    width: 23.1rem;
    height: 0.1rem;

    background-color: ${({ theme }) => theme.colors.moddy_gray30};
  `,

  MoreAboutBox: styled.div`
    display: flex;
    justify-content: center;

    margin-top: 1.8rem;
  `,
  HelperTextBox: styled.p`
    margin-bottom: 0.8rem;

    color: ${({ theme }) => theme.colors.moddy_gray50};
    ${({ theme }) => theme.fonts.Body02};
  `,

  OpenChatLinkLayout: styled.div`
    margin-top: 8.6rem;
    padding: 0 1.6rem;
  `,

  InputBox: styled.div`
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
  `,
  Input: styled.input`
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
  `,

  RequestButton: styled.button<{ $isValid: boolean }>`
    color: ${({ theme, $isValid }) => ($isValid ? theme.colors.moddy_blue : theme.colors.moddy_gray20)};
    ${({ theme }) => theme.fonts.Body01};

    &:disabled {
      cursor: not-allowed;
    }
  `,
};
