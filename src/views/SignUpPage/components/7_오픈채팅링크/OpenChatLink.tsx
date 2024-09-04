import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { HELPER_MESSAGE } from '../../constants/message';
import { TOTAL_STEP } from '../../constants/step';
import usePostDesignerSignUp from '../../hooks/usePostDesignerSignUp';
import Field from '../@common/Field';

import { openLinkState } from '@/recoil/atoms/signUpState';
import { IcInformation, IcRightGrey30 } from '@/views/@common/assets/icons';
import Button from '@/views/@common/components/Button';
import Input from '@/views/@common/components/Input';
import Modal from '@/views/@common/components/Modal';
import ProgressBar from '@/views/@common/components/ProgressBar';
import { gaEvent } from '@/views/@common/utils/ga';

const OpenChatLink = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  const [LinkInfo, setLinkInfo] = useRecoilState(openLinkState);
  const postModelSignUp = usePostDesignerSignUp();

  const handleTextAreaChange = (value: string) => {
    setLinkInfo(value);
  };

  const isActive = LinkInfo !== '';
  const handleSignUp = async () => {
    gaEvent('가입 전환', 'join_complete');
    await postModelSignUp();
  };

  return (
    <>
      <ProgressBar whole={TOTAL_STEP.DESIGNER_VIEW} current={6} />
      <S.OpenChatLinkLayout>
        <Field name="1:1 오픈채팅방 링크" isEssential={true} />
        <S.HelperTextBox>{HELPER_MESSAGE.INPUT_OPEN_CHAT_LINK}</S.HelperTextBox>

        <Input
          placeholderText={HELPER_MESSAGE.INPUT_OPENCHAT_LINK}
          onChangeFn={handleTextAreaChange}
          initialValue={LinkInfo}
        />
        <S.HelperBox>
          <IcInformation />
          <S.HelperSpan>{HELPER_MESSAGE.ENTER_WITH_VALID_NAME}</S.HelperSpan>
        </S.HelperBox>
        <S.MoreAboutBox>
          <S.MoreAboutOpenChatButton
            onClick={() => {
              window.open('https://moddy.notion.site/4171266fa09042ccaf80bcf7991f9f88?pvs=4');
            }}>
            1:1 오픈채팅방에 대해 알고싶다면? 더 알아보기 <IcRightGrey30 />
            <S.UnderLineBox />
          </S.MoreAboutOpenChatButton>
        </S.MoreAboutBox>
      </S.OpenChatLinkLayout>
      <Button
        text="완료"
        isFixed={true}
        disabled={!isActive}
        onClickFn={() => {
          setOpenModal(true);
        }}
      />
      {isOpenModal && (
        <Modal
          title="프로필 작성을 완료할까요?"
          description="저장 후에는 수정이 어려워요"
          leftBtnText="취소"
          rightBtnText="확인"
          leftBtnFn={() => setOpenModal(false)}
          rightBtnFn={handleSignUp}
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

  MoreAboutOpenChatButton: styled.button`
    display: flex;
    align-items: center;
    position: relative;

    color: ${({ theme }) => theme.colors.moddy_gray30};
    ${({ theme }) => theme.fonts.Body04};

    & > svg {
      position: absolute;
      right: -2rem;
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
