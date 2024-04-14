import styled from 'styled-components';
import { useState } from 'react';

import ProfileUpload from '@/views/@common/components/ProfileUpload';
import TitleField from '@/views/@common/components/TitleField';
import TextArea200 from '@/views/@common/components/TextArea200';
import Input from '@/views/@common/components/Input';
import { IcInformation } from '@/views/@common/assets/icons';
import { IcSearch } from '@/views/SignUpPage/assets/icons';
import { MESSAGE } from '../constants/message';
import { DAYS } from '../constants/days';

interface ProfileImgInfoProps {
  imgUrl: string;
  imgObj: File;
}

interface DesignerInfoSectionProps {
  onInfoChange: () => void;
}

const DesignerInfoSection = ({ onInfoChange }: DesignerInfoSectionProps) => {
  const [isClicked] = useState<string[]>(['', '', '', '', '', '']);

  const [, setToastOpen] = useState(false);
  const [, setProfileImgInfo] = useState<ProfileImgInfoProps | null>(null);

  const handleImageUpload = (imgUrl: string, imgObj: File) => {
    setProfileImgInfo({
      imgUrl,
      imgObj,
    });
  };

  const handleInfoChange = () => {
    onInfoChange();
  };
  return (
    <>
      <ProfileUpload onImageUpload={handleImageUpload} setToastOpen={setToastOpen} />
      <TitleField text="디자이너 소개" isEssential={true} />
      <TextArea200
        placeholderText="자신에 대한 소개를 입력해주세요 예시) 경력, 자격증, 강점 등"
        initialValue="이런걸 원해요"
        onChangeFn={handleInfoChange}
      />
      <TitleField text="디자이너명" isEssential={true} />
      <Input placeholderText="디자이너명" initialValue="원하연" onChangeFn={handleInfoChange} />
      <S.SubTextBox>
        <IcInformation />
        <p>{MESSAGE.DESIGNER_NAME}</p>
      </S.SubTextBox>
      <TitleField text="성별" isEssential={true} />
      <S.GenderSelectBox>
        <S.RadioInput type="radio" />
        <S.GenderTypeLabel>여성</S.GenderTypeLabel>
        <S.RadioInput type="radio" />
        <S.GenderTypeLabel>남성</S.GenderTypeLabel>
      </S.GenderSelectBox>
      <TitleField text="전화번호" isEssential={true} />
      <Input
        placeholderText="전화번호를 입력해주세요 (‘-’ 제외)"
        initialValue="010-4747-3094"
        onChangeFn={handleInfoChange}
      />
      <TitleField text="소속" isEssential={true} />
      <Input
        placeholderText="소속되어 있는 헤어샵(지점명)을 입력해주세요"
        initialValue="010-4747-3094"
        onChangeFn={handleInfoChange}
      />

      <TitleField text="주소" isEssential={true} />

      <S.InputBox>
        <p>강서구 내발산동</p>
        <IcSearch />
      </S.InputBox>

      <Input placeholderText="상세 주소를 입력해주세요" initialValue="333동" onChangeFn={handleInfoChange} />
      <TitleField text="휴무" isEssential={false} />
      <S.DayOffWrapperBox>
        {Object.keys(DAYS).map((day, index) => (
          <S.DayOffButton key={day} value={day} $isClicked={isClicked[index]}>
            {day}
          </S.DayOffButton>
        ))}
      </S.DayOffWrapperBox>
      <TitleField text="포트폴리오" isEssential={true} />
      <S.InputWrapper>
        <Input
          placeholderText="인스타그램 링크를 입력해주세요"
          initialValue="강서구 내발산동"
          onChangeFn={handleInfoChange}
        />
      </S.InputWrapper>
      <Input placeholderText="네이버 플레이스 링크를 입력해주세요" initialValue="333동" onChangeFn={handleInfoChange} />
      <TitleField text="오픈채팅방 링크" isEssential={true} />

      <Input placeholderText="오픈채팅방 링크를 입력해주세요" initialValue="333동" onChangeFn={handleInfoChange} />
      <S.SubTextBox>
        <IcInformation />
        <p>{MESSAGE.OPENCHAT_ENTER}</p>
      </S.SubTextBox>
    </>
  );
};

const S = {
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

  InputBox: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    margin-bottom: 0.8rem;
    padding: 1.2rem 1.6rem;
    border: 1.5px solid ${({ theme }) => theme.colors.moddy_gray20};
    border-radius: 8px;

    & > svg {
      top: 0.9rem;
      right: 1.3rem;
    }

    & > p {
      color: ${({ theme }) => theme.colors.moddy_bk};
      ${({ theme }) => theme.fonts.Body02};
    }
  `,
};

export default DesignerInfoSection;
