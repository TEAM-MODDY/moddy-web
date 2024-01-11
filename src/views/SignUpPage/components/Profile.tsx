import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { HELPER_MESSAGE } from '../constants/message';
import { TOTAL_STEP } from '../constants/step';
import { EnterProfileProp } from '../utils/enterProfileProp';

import Field from './Field';

import Button from '@/views/@common/components/Button';
import Input from '@/views/@common/components/Input';
import Modal from '@/views/@common/components/Modal';
import ProgressBar from '@/views/@common/components/ProgressBar';

const Profile = () => {
  const navigate = useNavigate();

  const [isOpenModal, setOpenModal] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState('');
  const isActive = textAreaValue !== '';

  const handleInstaGramText = (value: string) => {
    setTextAreaValue(value);
  };
  const handleNaverPlaceText = (value: string) => {
    setTextAreaValue(value);
  };
  return (
    <>
      <ProgressBar whole={TOTAL_STEP.DESIGNER_VIEW} current={4} />
      <S.ProfileLayout>
        <Field name="프로필 사진" isEssential={true} />
        <S.HelperTextBox>{HELPER_MESSAGE.VIEW_IMAGE_TO_USER}</S.HelperTextBox>

        <Field name="소속" isEssential={true} />
        <S.HelperTextBox>{HELPER_MESSAGE.PREFER_INPUT_PORTFOLIO}</S.HelperTextBox>
        <section>
          <Input placeholderText={HELPER_MESSAGE.INPUT_INSTAGRAM_LINK} onChangeFn={handleInstaGramText} />
          <Input placeholderText={HELPER_MESSAGE.INPUT_NAVERPLACE_LINK} onChangeFn={handleNaverPlaceText} />
        </section>
      </S.ProfileLayout>
      <Button
        text="다음"
        isFixed={true}
        disabled={!isActive}
        onClickFn={() => {
          setOpenModal(true);
        }}
      />
      {isOpenModal && (
        <Modal
          title="이대로 가입하시겠어요?"
          description="가입 후에는 수정이 어려워요"
          leftBtnText="돌아가기"
          rightBtnText="확인"
          leftBtnFn={() => setOpenModal(false)}
          rightBtnFn={() => navigate('/')}
        />
      )}
    </>
  );
};
export default Profile;

const S = {
  ProfileLayout: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-top: 8.6rem;
    padding: 0 1.6rem;

    & > section > div {
      margin-top: 0.4rem;
    }
  `,

  HelperTextBox: styled.p`
    margin-bottom: 0.8rem;

    color: ${({ theme }) => theme.colors.moddy_gray50};
    ${({ theme }) => theme.fonts.Body02};
  `,
};
