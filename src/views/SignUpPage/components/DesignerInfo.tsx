import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { TOTAL_STEP } from '../constants/step';
import { EnterProfileProp } from '../utils/enterProfileProp';

import Field from './Field';
import IntroductionTextArea from './IntroductionTextArea';

import { designerInfoState } from '@/recoil/atoms/signUpState';
import Button from '@/views/@common/components/Button';
import ProgressBar from '@/views/@common/components/ProgressBar';

const DesignerInfo = ({ setStep }: EnterProfileProp) => {
  const [textAreaValue, setTextAreaValue] = useState('');
  const handleTextAreaChange = (value: string) => {
    setTextAreaValue(value);
  };
  const isActive = textAreaValue !== '';

  const [designerInfo, setDesignerInfo] = useRecoilState(designerInfoState);

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
        <IntroductionTextArea
          placeholderText="자신에 대한 소개를 입력해주세요&#13;&#10;예시) 경력, 자격증, 강점 등"
          initValue={designerInfo.data}
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
