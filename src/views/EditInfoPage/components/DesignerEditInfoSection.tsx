import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { MESSAGE, TOAST_MESSAGE } from '../constants/message';
import useGetDesignerEdit from '../hooks/useGetDesignerEdit';

import { IcInformation } from '@/views/@common/assets/icons';
import Header from '@/views/@common/components/Header';
import Input from '@/views/@common/components/Input';
import Modal from '@/views/@common/components/Modal';
import PostCode from '@/views/@common/components/PostCode';
import ProfileUpload from '@/views/@common/components/ProfileUpload';
import TextArea200 from '@/views/@common/components/TextArea200';
import TitleField from '@/views/@common/components/TitleField';
import ToastMessage from '@/views/@common/components/ToastMessage';
import { DAYS } from '@/views/@common/constants/days';
import { REGEX } from '@/views/@common/utils/regex';
import { IcSearch } from '@/views/SignUpPage/assets/icons';

const DesignerEditInfoSection = () => {
  const navigate = useNavigate();
  const { inputData, gender, dayOff } = useGetDesignerEdit();
  const [AddressModal, setAddressModal] = useState(false);
  const [isSaveModalOpen, setSaveModalOpen] = useState(false);
  const [isBackModalOpen, setBackModalOpen] = useState(false);
  const [ToastMessageText, setToastMessageText] = useState('');
  const [isToastOpen, setToastOpen] = useState(false);
  const [isChanged, setChanged] = useState(false);
  const [isClicked, setIsClicked] = useState(dayOff);

  const handleCloseSaveModal = () => {
    setSaveModalOpen(false);
  };

  //왼쪽 이전으로 버튼 클릭시 동작
  const handleBackBtn = () => {
    if (isChanged) {
      setBackModalOpen(true);
    } else {
      navigate(-1);
    }
  };

  const handleCloseBackModal = () => {
    setBackModalOpen(false);
  };

  const [info, setInfo] = useState({
    profileImg: '',
    introduction: '',
    name: '',
    gender: '',
    shopName: '',
    Address: '',
    dayOff: [],
    DetailAddress: '',
    instagramUrl: '',
    naverPlaceUrl: '',
    OpenChatUrl: '',
  });

  const handleDayOffClick = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
    const dayValue = event.currentTarget.value;

    const tempClicked = [...isClicked];
    if (tempClicked[index] === '') {
      tempClicked[index] = DAYS[dayValue as keyof typeof DAYS];
    } else {
      tempClicked[index] = '';
    }

    setIsClicked(tempClicked);
  };

  const handleAddressModal = () => {
    setAddressModal((prev) => !prev);
  };

  const handleImageUpload = (imgUrl: string, imgObj: File) => {
    handleInputChange('profileFile', imgObj);
    handleInputChange('profileImg', imgUrl);
  };

  const handleInputChange = (key: string, value: string | File | string[]) => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      [key]: value,
    }));
    setChanged(true);
    console.log(inputData);
    console.log(dayOff);
  };

  const checkInputValues = () => {
    // 각 input값을 검증하고, 비어 있다면 토스트를 띄움
    if (!info.introduction) {
      setToastMessageText(TOAST_MESSAGE.intro);
      setToastOpen(true);
      return;
    }
    if (!info.name) {
      setToastMessageText(TOAST_MESSAGE.name);
      setToastOpen(true);
      return;
    }
    if (!info.shopName) {
      setToastMessageText(TOAST_MESSAGE.shopName);
      setToastOpen(true);
      return;
    }
    if (!info.Address) {
      setToastMessageText(TOAST_MESSAGE.address);
      setToastOpen(true);
      return;
    }
    if (!info.DetailAddress) {
      setToastMessageText(TOAST_MESSAGE.detailAddress);
      setToastOpen(true);
      return;
    }

    if (!info.instagramUrl || !info.naverPlaceUrl) {
      setToastMessageText(TOAST_MESSAGE.portfolio);
      setToastOpen(true);
      return;
    }

    if (!info.OpenChatUrl) {
      setToastMessageText(TOAST_MESSAGE.OpenChat);
      setToastOpen(true);
      return;
    } else if (isChanged) {
      setSaveModalOpen(true);
    } else {
      navigate('/my-page');
    }
  };

  const handleSaveInfo = () => {
    console.log('put 들어갈 자리');
  };

  return (
    inputData &&
    dayOff &&
    gender && (
      <>
        {isToastOpen && <ToastMessage text={ToastMessageText} setter={setToastOpen} />}
        <Header
          title="프로필 수정"
          isBackBtnExist={true}
          rightBtn={<S.SaveBtn>저장</S.SaveBtn>}
          rightFn={checkInputValues}
          backFn={handleBackBtn}
        />
        {isSaveModalOpen && (
          <Modal
            title="프로필을 수정할까요?"
            description="이전에 작성했던 내용은 사라져요"
            leftBtnText="취소"
            leftBtnFn={handleCloseSaveModal}
            rightBtnText="확인"
            rightBtnFn={handleSaveInfo}
          />
        )}
        {isBackModalOpen && (
          <Modal
            title="수정을 취소할까요?"
            description="저장을 누르지 않으면 <br/>수정 중인 내용이 사라져요."
            leftBtnText="계속하기"
            leftBtnFn={handleCloseBackModal}
            rightBtnText="취소하기"
            rightBtnFn={() => {
              navigate(-1);
            }}
          />
        )}

        {AddressModal && (
          <S.PostCodeBox>
            <Header title="주소 검색" isBackBtnExist={true} backFn={handleAddressModal} />
            <PostCode
              setIsAddressModal={handleAddressModal}
              setAddress={(value) => handleInputChange('Address', value)}
            />
          </S.PostCodeBox>
        )}
        <S.DesignerInfoSectionBox>
          <ProfileUpload
            onImageUpload={handleImageUpload}
            setToastOpen={() => {}}
            profileImg={inputData.profileImgUrl}
          />
          <S.TitleFieldBox>
            <TitleField text="디자이너 소개" isEssential={true} />
          </S.TitleFieldBox>
          <TextArea200
            placeholderText="자신에 대한 소개를 입력해주세요 예시) 경력, 자격증, 강점 등"
            initialValue={inputData?.introduction}
            onChangeFn={(value) => handleInputChange('introduction', value)}
          />

          <S.TitleFieldBox>
            <TitleField text="디자이너명" isEssential={true} />
          </S.TitleFieldBox>
          <Input
            placeholderText="디자이너명"
            initialValue={inputData?.name}
            onChangeFn={(value) => handleInputChange('name', value)}
            regex={REGEX.NAME}
          />
          <S.SubTextBox>
            <IcInformation />
            <p>{MESSAGE.DESIGNER_NAME}</p>
          </S.SubTextBox>
          <S.TitleFieldBox>
            <TitleField text="성별" isEssential={true} />
          </S.TitleFieldBox>

          <S.GenderSelectBox>
            <S.RadioInput
              id="FEMALE"
              type="radio"
              checked={gender === 'FEMALE'}
              onChange={() => handleInputChange('gender', 'FEMALE')}
            />
            <S.GenderTypeLabel htmlFor="FEMALE">여성</S.GenderTypeLabel>
            <S.RadioInput
              id="MALE"
              type="radio"
              checked={gender === 'MALE'}
              onChange={() => handleInputChange('gender', 'MALE')}
            />
            <S.GenderTypeLabel htmlFor="MALE">남성</S.GenderTypeLabel>
          </S.GenderSelectBox>
          <S.TitleFieldBox>
            <TitleField text="전화번호" isEssential={true} />
          </S.TitleFieldBox>
          <S.InputBox $isDisabled={true}>
            <p>{inputData?.phoneNumber}</p>
          </S.InputBox>
          <S.TitleFieldBox>
            <TitleField text="소속" isEssential={true} />
          </S.TitleFieldBox>
          <Input
            placeholderText="소속되어 있는 헤어샵(지점명)을 입력해주세요"
            initialValue={inputData.hairShop.name}
            onChangeFn={(value) => handleInputChange('shopName', value)}
            maxLength={25}
          />

          <S.TitleFieldBox>
            <TitleField text="주소" isEssential={true} />
          </S.TitleFieldBox>

          <S.InputBox $isDisabled={false} onClick={handleAddressModal}>
            <p>{inputData?.hairShop.address}</p>
            <IcSearch />
          </S.InputBox>

          <Input
            placeholderText="상세 주소를 입력해주세요"
            initialValue={inputData?.hairShop.detailAddress}
            onChangeFn={(value) => handleInputChange('DetailAddress', value)}
            maxLength={30}
          />
          <S.TitleFieldBox>
            <TitleField text="휴무" isEssential={false} />
          </S.TitleFieldBox>

          <S.DayOffWrapperBox>
            {Object.keys(DAYS).map((day, index) => (
              <S.DayOffButton
                key={day}
                value={day}
                onClick={(e) => handleDayOffClick(e, index)}
                $isClicked={isClicked[index]}>
                {day}
              </S.DayOffButton>
            ))}
          </S.DayOffWrapperBox>
          <S.TitleFieldBox>
            <TitleField text="포트폴리오" isEssential={true} />
          </S.TitleFieldBox>
          <S.InputWrapper>
            <Input
              placeholderText="인스타그램 링크를 입력해주세요"
              initialValue={inputData.portfolio.instagramUrl}
              onChangeFn={(value) => handleInputChange('instagramUrl', value)}
              maxLength={255}
              regex={REGEX.INSTAGRAM_ID}
            />
          </S.InputWrapper>
          <Input
            placeholderText="네이버 플레이스 링크를 입력해주세요"
            initialValue={inputData.portfolio.naverPlaceUrl}
            onChangeFn={(value) => handleInputChange('naverPlaceUrl', value)}
            maxLength={255}
            regex={REGEX.ONLY_ENG_CHARACTER_NUM}
          />
          <S.TitleFieldBox>
            <TitleField text="오픈채팅방 링크" isEssential={true} />
          </S.TitleFieldBox>

          <Input
            placeholderText="오픈채팅방 링크를 입력해주세요"
            initialValue={inputData?.kakaoOpenChatUrl}
            onChangeFn={(value) => handleInputChange('OpenChatUrl', value)}
            maxLength={255}
            regex={REGEX.ONLY_ENG_CHARACTER_NUM}
          />
          <S.SubTextBox>
            <IcInformation />
            <p>{MESSAGE.OPENCHAT_ENTER}</p>
          </S.SubTextBox>
        </S.DesignerInfoSectionBox>
      </>
    )
  );
};

const S = {
  DesignerInfoSectionBox: styled.div`
    margin: 6.7rem 0 10rem;
    padding: 0 1.6rem;
  `,
  PostCodeBox: styled.div`
    position: fixed;
    top: 5rem;
    z-index: 5;

    width: 100%;
  `,

  GenderSelectBox: styled.div`
    display: flex;
    gap: 1.6rem;
  `,

  RadioInput: styled.input`
    display: none;

    &:checked + label {
      border: 1.5px solid ${({ theme }) => theme.colors.moddy_blue};

      box-shadow: ${({ theme }) => theme.effects.shadow2};

      color: ${({ theme }) => theme.colors.moddy_bk};
    }
  `,

  SaveBtn: styled.p`
    cursor: pointer;
    ${({ theme }) => theme.fonts.Body02};
  `,

  GenderTypeLabel: styled.label`
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
  `,

  DayOffButton: styled.button<{ $isClicked: string }>`
    display: flex;
    flex: 1;
    justify-content: center;

    padding: 1.2rem 0;
    border: 1.5px solid
      ${({ $isClicked, theme }) => ($isClicked !== '' ? theme.colors.moddy_blue : theme.colors.moddy_gray20)};
    border-radius: 8px;

    box-shadow: ${({ $isClicked, theme }) => ($isClicked !== '' ? theme.effects.shadow3 : '0 0 0 transparent')};

    color: ${({ $isClicked, theme }) => ($isClicked !== '' ? theme.colors.moddy_blue : theme.colors.moddy_gray50)};
    ${({ theme }) => theme.fonts.Body02};
  `,

  DayOffWrapperBox: styled.div`
    display: flex;
    gap: 0.8rem;
    justify-content: space-between;

    width: 100%;
  `,

  SubTextBox: styled.div`
    display: flex;
    align-items: center;

    margin-top: 0.8rem;

    & > p {
      margin-left: 0.4rem;

      color: ${({ theme }) => theme.colors.moddy_blue2};
      ${({ theme }) => theme.fonts.Body04};
    }
  `,

  InputWrapper: styled.div`
    margin-bottom: 0.8rem;
  `,

  InputBox: styled.div<{ $isDisabled: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    margin-bottom: 0.8rem;
    padding: 1.2rem 1.6rem;
    border: 1.5px solid ${({ theme }) => theme.colors.moddy_gray20};
    border-radius: 8px;

    background-color: ${({ theme, $isDisabled }) => ($isDisabled ? theme.colors.moddy_gray05 : theme.colors.moddy_wt)};

    & > svg {
      top: 0.9rem;
      right: 1.3rem;
    }

    & > p {
      color: ${({ theme, $isDisabled }) => ($isDisabled ? theme.colors.moddy_gray50 : theme.colors.moddy_bk)};
      ${({ theme }) => theme.fonts.Body02};
    }
  `,

  TitleFieldBox: styled.div`
    margin: 3.6rem 0 1rem;
  `,
};

export default DesignerEditInfoSection;
