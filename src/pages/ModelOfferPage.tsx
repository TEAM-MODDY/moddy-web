import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import Button from '../views/@common/components/Button';
import Header from '../views/@common/components/Header';
import TextArea200 from '../views/@common/components/TextArea200';
import ConditionBox from '../views/ModelInfoPage/components/ConditionBox';
import TitleBox from '../views/ModelInfoPage/components/TitleBox';
import { CONDITION_DATA } from '../views/ModelInfoPage/constants/CONDITION_DATA';
import usePostApplication from '../views/ModelInfoPage/hooks/usePostApplication';

import Modal from '@/views/@common/components/Modal';

const ModelOfferPage = () => {
  const location = useLocation();
  const applicationId = location.state.applicationId;

  //희망 제안 조건 클릭시 활성화 기능
  const [isClicked, setIsClicked] = useState<boolean[]>([true, true, true, false, false, false]);
  const handleConditionClick = (index: number) => {
    setIsClicked((prevState) => {
      const newClickedState = [...prevState];
      newClickedState[index] = !prevState[index];
      return newClickedState;
    });
  };
  //텍스트 영역 변화시 CTA 활성화
  const [textAreaValue, setTextAreaValue] = useState('');

  const handleTextAreaChange = (value: string) => {
    setTextAreaValue(value);
  };

  const isActive = isClicked.some((clicked) => clicked) && textAreaValue !== '';

  const postApplication = usePostApplication(applicationId, textAreaValue, isClicked);

  //페이지 이동
  const navigate = useNavigate();
  const handleClickConfirm = () => {
    postApplication();
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <Header isBackBtnExist={true} isCloseBtnExist={true} title="모델 제안" closeFn={() => navigate('/')} />
      <S.ModelOfferLayout>
        <S.ModelOfferBox>
          <TitleBox title="희망 제안 조건" subtitle="원하는 조건을 모두 선택해주세요" isNeccessary={true} />
          <S.ContainerGridBox>
            {CONDITION_DATA.map((data, index) => (
              <ConditionBox
                key={index}
                icon={data.icon}
                activeIcon={data.activeIcon}
                condition={data.condition}
                onClick={() => handleConditionClick(index)}
                index={index}
                isSelected={isClicked[index]}
              />
            ))}
          </S.ContainerGridBox>
        </S.ModelOfferBox>
        <S.ModelOfferBox>
          <TitleBox title="상세 제안" subtitle="자세히 적을수록 매칭 성공률이 높아져요" isNeccessary={true} />
          <TextArea200
            placeholderText="내용을 입력해주세요 &#13;&#10;예시) 상세 가격조건, 구체적인 스타일 제안, 시술 시간 등"
            onChangeFn={handleTextAreaChange}
          />
        </S.ModelOfferBox>
      </S.ModelOfferLayout>
      <Button text="완료" isFixed={true} onClickFn={handleModal} disabled={!isActive} />

      {isModalOpen && (
        <Modal
          title="제안서를 전송할까요?"
          description="제안한 모델에게는<br/>문자를 통해 알림이 가요"
          leftBtnFn={handleModal}
          leftBtnText="취소"
          rightBtnFn={handleClickConfirm}
          rightBtnText="확인"
        />
      )}
    </>
  );
};

const S = {
  ModelOfferLayout: styled.section`
    margin-top: 8.1rem;
    padding: 0 1.6rem;
  `,

  ModelOfferBox: styled.div`
    margin-bottom: 3.85rem;
  `,

  ContainerGridBox: styled.div`
    display: grid;
    /* stylelint-disable-next-line unit-allowed-list */
    grid-template-columns: repeat(3, 1fr);

    gap: 0.75rem 0.6rem;
  `,
};

export default ModelOfferPage;
