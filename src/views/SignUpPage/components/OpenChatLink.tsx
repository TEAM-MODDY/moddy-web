import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { HELPER_MESSAGE } from '../constants/message';
import { TOTAL_STEP } from '../constants/step';
import usePostDesignerSignUp from '../hooks/usePostDesignerSignUp';

import Field from './Field';

import { openLinkState } from '@/recoil/atoms/signUpState';
import { IcInformation } from '@/views/@common/assets/icons';
import Button from '@/views/@common/components/Button';
import Input from '@/views/@common/components/Input';
import Modal from '@/views/@common/components/Modal';
import ProgressBar from '@/views/@common/components/ProgressBar';

const OpenChatLink = () => {
  const [LinkInfo, setLinkInfo] = useRecoilState(openLinkState);
  const [isOpenModal, setOpenModal] = useState(false);
  const postModelSignUp = usePostDesignerSignUp();

  const handleTextAreaChange = (value: string) => {
    setLinkInfo((prevOpenLink) => ({
      ...prevOpenLink,
      data: value,
      verifyStatus: true,
    }));
  };

  const isActive = LinkInfo.data !== '';
  const handleSignUp = async () => {
    await postModelSignUp();
  };

  return (
    <>
      <ProgressBar whole={TOTAL_STEP.DESIGNER_VIEW} current={6} />
      <S.OpenChatLinkLayout>
        <Field name="1:1 오픈채팅방 링크" isEssential={true} />

        <Input
          placeholderText={HELPER_MESSAGE.INPUT_OPENCHAT_LINK}
          onChangeFn={handleTextAreaChange}
          initialValue={LinkInfo.data}
        />
        <S.HelperBox>
          <IcInformation />
          <S.HelperSpan>{HELPER_MESSAGE.INPUT_DETAIL_ADRESS}</S.HelperSpan>
        </S.HelperBox>
      </S.OpenChatLinkLayout>
      <Button
        id="ga-open-chat-btn"
        text="완료"
        isFixed={true}
        disabled={!isActive}
        onClickFn={() => {
          setOpenModal(true);
        }}
      />
      {isOpenModal && (
        <Modal
          id="ga-designer-sign-up-btn"
          title="이대로 가입하시겠어요?"
          description="가입 후에는 수정이 어려워요"
          leftBtnText="돌아가기"
          rightBtnText="확인"
          leftBtnFn={() => setOpenModal(false)}
          rightBtnFn={() => handleSignUp()}
        />
      )}
    </>
  );
};
export default OpenChatLink;

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
  OpenChatLinkLayout: styled.div`
    margin-top: 8.6rem;
    padding: 0 1.6rem;
  `,
};
