// import Header from './Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import Button from '../../@common/components/Button';
import Header from '../../@common/components/Header';
import TextArea200 from '../../@common/components/TextArea200';
import ConditionBox from '../../ModelInfoPage/components/ConditionBox';
import TitleBox from '../../ModelInfoPage/components/TitleBox';
import { conditionData } from '../../ModelInfoPage/constants/conditionData';

const ModelOfferPage = () => {
  const [isClicked, setIsClicked] = useState<boolean[]>([false, false, false, false, false, false]);
  const handleConditionClick = (index: number) => {
    setIsClicked((prevState) => {
      const newClickedState = [...prevState];
      newClickedState[index] = !prevState[index];
      return newClickedState;
    });
  };
  const navigate = useNavigate();
  const handleClickConfirm = () => {
    navigate('/model-info/model-offer/sent-complete');
  };
  return (
    <>
      <Header isBackBtnExist={true} isCloseBtnExist={true} title="헤어 모델 제안하기" />
      <S.ModelOfferLayout>
        <S.ModelOfferBox>
          <TitleBox title="희망 제안 조건" subtitle="원하시는 조건을 모두 선택해주세요" isNeccessary={true} />
          <S.ContainerGridBox>
            {conditionData.map((data, index) => (
              <ConditionBox
                key={index}
                icon={data.icon}
                activeIcon={data.activeIcon}
                condition={data.condition}
                onClick={() => handleConditionClick(index)}
                index={index}
                isActive={isClicked[index]}
              />
            ))}
          </S.ContainerGridBox>
        </S.ModelOfferBox>
        <S.ModelOfferBox>
          <TitleBox title="상세 제안" subtitle="자세히 적을 수록 매칭 성공률이 높아져요" isNeccessary={true} />
          <TextArea200 placeholderText="내용을 입력해주세요" />
        </S.ModelOfferBox>
      </S.ModelOfferLayout>
      <Button text="확인하기" isFixed={true} onClickFn={handleClickConfirm} />
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
