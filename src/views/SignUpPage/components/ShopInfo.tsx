import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { IcSearch } from '../assets/icons';
import { days } from '../constants/days';
import { HELPER_MESSAGE } from '../constants/message';
import { TOTAL_STEP } from '../constants/step';
import { EnterProfileProp } from '../utils/enterProfileProp';

import Field from './Field';
import PostCode from './PostCode';

import Button from '@/views/@common/components/Button';
import Input from '@/views/@common/components/Input';
import Modal from '@/views/@common/components/Modal';
import ProgressBar from '@/views/@common/components/ProgressBar';

const ShopInfo = ({ setStep }: EnterProfileProp) => {
  //이동
  const navigate = useNavigate();
  const [isOpenModal, setOpenModal] = useState(false);

  const [isClicked, setIsClicked] = useState<boolean[]>([false, false, false, false, false, false, false]);
  const handleDayOffClick = (index: number) => {
    setIsClicked((prevState) => {
      const newClickedState = [...prevState];
      newClickedState[index] = !prevState[index];
      return newClickedState;
    });
  };

  //입력값 넣기
  const [Address, setAddress] = useState<string>('');

  const handleInputAddress = (value: string) => {
    setAddress(value);
  };

  const [isAddressModal, setIsAddressModal] = useState(false);
  const handleOpenAddressModal = () => {
    setIsAddressModal(true);
  };

  //입력 시 CTA 상태변화
  const [placeTextValue, setPlaceTextValue] = useState('');
  const handlePlaceText = (value: string) => {
    setPlaceTextValue(value);
  };

  const [addressDetailValue, setAddressDetailValue] = useState('');
  const handleAddressText = (value: string) => {
    setAddressDetailValue(value);
  };
  const isActive = Address && addressDetailValue !== '' && placeTextValue !== '';

  return (
    <>
      <S.PostCodeBox>
        {isAddressModal && <PostCode setIsAddressModal={setIsAddressModal} setAddress={handleInputAddress} />}
      </S.PostCodeBox>
      <>
        <ProgressBar whole={TOTAL_STEP.DESIGNER_VIEW} current={3} />
        <S.ShopInfoLayout>
          <Field name="소속" isEssential={true} />

          <Input placeholderText={HELPER_MESSAGE.INPUT_SHOP_NAME} onChangeFn={handlePlaceText} />
          <Field name="주소" isEssential={true} />
          <S.AddressBox onClick={handleOpenAddressModal}>
            {Address ? (
              <S.InputAddress>{Address}</S.InputAddress>
            ) : (
              <S.DefaultText>{HELPER_MESSAGE.INPUT_ADDRESS}</S.DefaultText>
            )}

            <IcSearch />
          </S.AddressBox>
          <Input placeholderText={HELPER_MESSAGE.INPUT_DETAIL_ADRESS} onChangeFn={handleAddressText} />

          <Field name="휴무" isEssential={false} />

          <S.DayOffWrapperBox>
            {days.map((day, index) => (
              <S.DayOffBox key={day} onClick={() => handleDayOffClick(index)} $isClicked={isClicked[index]}>
                {day}
              </S.DayOffBox>
            ))}
          </S.DayOffWrapperBox>

          <Button
            text="완료"
            isFixed={true}
            disabled={!isActive}
            onClickFn={() => {
              setOpenModal(true);
            }}
          />
        </S.ShopInfoLayout>
        <Button text="다음" isFixed={true} disabled={!isActive} onClickFn={() => setStep((prev) => prev + 1)} />
      </>

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
export default ShopInfo;

const S = {
  PostCodeBox: styled.div`
    position: fixed;
    top: 0;
    z-index: 5;

    width: 100%;
    margin-top: 5rem;
  `,
  ShopInfoLayout: styled.div`
    margin-top: 8.6rem;
    padding: 0 1.6rem;
  `,

  DayOffWrapperBox: styled.div`
    display: flex;
    gap: 0.8rem;
    justify-content: space-between;

    width: 100%;
  `,

  DayOffBox: styled.div<{ $isClicked: boolean }>`
    display: flex;
    flex: 1;
    justify-content: center;

    padding: 1.2rem 0;
    border: 1.5px solid ${({ $isClicked, theme }) => ($isClicked ? theme.colors.moddy_blue : theme.colors.moddy_gray20)};
    border-radius: 8px;

    box-shadow: ${({ $isClicked, theme }) => ($isClicked ? theme.effects.shadow3 : '0 0 0 transparent')};

    color: ${({ $isClicked, theme }) => ($isClicked ? theme.colors.moddy_blue : theme.colors.moddy_gray50)};
    ${({ theme }) => theme.fonts.Body02};

    ${({ theme }) => theme.fonts.Body02};
  `,

  AddressBox: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    margin-bottom: 0.8rem;
    padding: 1.2rem 1.6rem;
    border: 1.5px solid;
    border-color: ${({ theme }) => theme.colors.moddy_gray20};
    border-radius: 8px;
  `,
  InputAddress: styled.p`
    color: ${({ theme }) => theme.colors.moddy_bk};
    ${({ theme }) => theme.fonts.Body02};
  `,
  DefaultText: styled.p`
    color: ${({ theme }) => theme.colors.moddy_gray50};
    ${({ theme }) => theme.fonts.Body02};
  `,
};
