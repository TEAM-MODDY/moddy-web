import { useState } from 'react';
import styled from 'styled-components';

import { IcRightBlueThin } from '../../assets/icons';
import { HELPER_MESSAGE, PLACE_HOLDER_MESSAGE } from '../../constants/message';
import { EnterProfileProp } from '../../enterProfileProp';
import Field from '../@common/Field';

import { IcInformation, IcRightBlue } from '@/views/@common/assets/icons';
import Button from '@/views/@common/components/Button';
import Input from '@/views/@common/components/Input';

const Code = ({ setStep }: EnterProfileProp) => {
  const [code, setCode] = useState('');
  const [isValid, setIsValid] = useState(false);
  const handleCodeChange = (value: string) => {
    setCode(value);
  };

  return (
    <>
      <S.OpenChatLinkLayout>
        <Field name="헤어디자이너 인증" isEssential={true} />
        <S.HelperTextBox>{HELPER_MESSAGE.INPUT_DESIGNER_CODE}</S.HelperTextBox>

        <Input
          placeholderText={PLACE_HOLDER_MESSAGE.INPUT_DESIGNER_CODE}
          onChangeFn={handleCodeChange}
          initialValue={code}
        />
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
};
