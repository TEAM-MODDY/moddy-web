import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { TOTAL_STEP } from '../constants/step';
import { EnterProfileProp } from '../utils/enterProfileProp';

import Field from './Field';

import { designerInfoState } from '@/recoil/atoms/signUpState';
import Button from '@/views/@common/components/Button';
import ProgressBar from '@/views/@common/components/ProgressBar';
import TextArea200 from '@/views/@common/components/TextArea200';

const DesignerInfo = ({ setStep }: EnterProfileProp) => {
  const [textAreaValue, setTextAreaValue] = useState('');
  const handleTextAreaChange = (value: string) => {
    setTextAreaValue(value);
  };
  const isActive = textAreaValue !== '';

  const [, setDesignerInfo] = useRecoilState(designerInfoState);

  const saveDataToRecoil = () => {
    setDesignerInfo((prevDesignerInfo) => ({
      ...prevDesignerInfo,
      data: textAreaValue,
      verifyStatus: true,
    }));
  };

  return (
    <>
      <ProgressBar whole={TOTAL_STEP.DESIGNER_VIEW} current={5} />
      <DesignerInfoLayout>
        <Field name="디자이너 소개" isEssential={true} />
        <TextArea200
          placeholderText="내용을 입력해주세요&#13;&#10;예시) 상세 가격조건, 구체적인 스타일 제안, 시술 시간 등`"
          onChangeFn={handleTextAreaChange}
        />
      </DesignerInfoLayout>
      <Button
        text="다음"
        isFixed={true}
        onClickFn={() => {
          setStep((prev) => prev + 1);
          saveDataToRecoil();
        }}
        disabled={!isActive}
      />
    </>
  );
};
export default DesignerInfo;

const DesignerInfoLayout = styled.div`
  margin-top: 8.6rem;
  padding: 0 1.6rem;
`;
