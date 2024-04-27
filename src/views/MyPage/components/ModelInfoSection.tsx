import styled from 'styled-components';

import Input from '@/views/@common/components/Input';
import TitleField from '@/views/@common/components/TitleField';

interface ModelInfoSectionProps {
  onInfoChange: () => void;
}

const ModelInfoSection = ({ onInfoChange }: ModelInfoSectionProps) => {
  return (
    <S.ModelInfoSectionLayout>
      <S.InputBox>
        <TitleField text="이름" isEssential={true} />
        <Input placeholderText="정보" onChangeFn={onInfoChange} />
      </S.InputBox>
      <S.InputBox>
        <TitleField text="출생 연도" isEssential={true} />
        <Input placeholderText="정보" onChangeFn={onInfoChange} />
      </S.InputBox>
      <S.InputBox>
        <TitleField text="성별" isEssential={true} />
        <S.GenderSelectBox>
          <S.GenderRadio type="radio" />
          <S.GenderLabel>여성</S.GenderLabel>
          <S.GenderRadio type="radio" />
          <S.GenderLabel>남성</S.GenderLabel>
        </S.GenderSelectBox>
      </S.InputBox>
      <S.InputBox>
        <TitleField text="전화번호" isEssential={true} />
        <S.DisabledInputBox>정보</S.DisabledInputBox>
      </S.InputBox>
      <S.InputBox>
        <TitleField text="시술희망 지역" isEssential={true} />
        <Input placeholderText="정보" onChangeFn={onInfoChange} />
      </S.InputBox>
    </S.ModelInfoSectionLayout>
  );
};

const S = {
  ModelInfoSectionLayout: styled.section`
    display: flex;
    flex-direction: column;
    gap: 3.6rem;
  `,
  InputBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  `,
  GenderSelectBox: styled.div`
    display: flex;
    gap: 1.6rem;
  `,
  GenderRadio: styled.input`
    display: none;

    &:checked + label {
      border: 1.5px solid ${({ theme }) => theme.colors.moddy_blue};

      box-shadow: ${({ theme }) => theme.effects.shadow2};

      color: ${({ theme }) => theme.colors.moddy_bk};
    }
  `,
  GenderLabel: styled.label`
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
  DisabledInputBox: styled.div`
    width: 100%;
    height: 4.2rem;
    padding: 1.2rem 1.5rem;
    border: 1.5px solid ${({ theme }) => theme.colors.moddy_gray20};
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.moddy_gray05};

    color: ${({ theme }) => theme.colors.moddy_gray50};
    ${({ theme }) => theme.fonts.Body02};
  `,
};

export default ModelInfoSection;
