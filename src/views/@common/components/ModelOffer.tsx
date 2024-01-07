// import Header from './Header';
import { useState } from 'react';
import { styled } from 'styled-components';

import {
  IcCamera,
  IcCameraact,
  IcModdyhearts1,
  IcModdyhearts1act,
  IcGift,
  IcGiftact,
  IcMask,
  IcMaskact,
  IcPhotoshop,
  IcPhotoshopact,
  IcHearthand,
  IcHearthandact,
} from '../../ModelInfoPage/assets/icons';
import ConditionBox from '../../ModelInfoPage/components/ConditionBox';
import TitleBox from '../../ModelInfoPage/components/TitleBox';

const ModelOffer = () => {
  const [isClicked, setIsClicked] = useState<boolean[]>([false, false, false, false, false, false]);
  const handleConditionClick = (index: number) => {
    setIsClicked((prevState) => {
      const newClickedState = [...prevState];
      newClickedState[index] = true;
      console.log(newClickedState);
      return newClickedState;
    });
  };

  return (
    <S.ModelOfferLayout>
      <S.ModelOfferBox>
        <TitleBox title="희망 제안 조건" subtitle="원하시는 조건을 모두 선택해주세요" isNeccessary={true} />
        <S.ContainerGridBox>
          <ConditionBox
            icon={<IcCamera />}
            activeIcon={<IcCameraact />}
            condition="얼굴 촬영"
            onClick={() => handleConditionClick(0)}
            index={0}
            isActive={isClicked[0]}
          />
          <ConditionBox
            icon={<IcModdyhearts1 />}
            activeIcon={<IcModdyhearts1act />}
            condition="SNS 게시"
            onClick={() => handleConditionClick(1)}
            index={1}
            isActive={isClicked[1]}
          />
          <ConditionBox
            icon={<IcGift />}
            activeIcon={<IcGiftact />}
            condition="얼굴 촬영"
            onClick={() => handleConditionClick(2)}
            index={2}
            isActive={isClicked[2]}
          />
          <ConditionBox
            icon={<IcMask />}
            activeIcon={<IcMaskact />}
            condition="마스크 착용"
            onClick={() => handleConditionClick(3)}
            index={3}
            isActive={isClicked[3]}
          />
          <ConditionBox
            icon={<IcPhotoshop />}
            activeIcon={<IcPhotoshopact />}
            condition="포토샵 보정"
            onClick={() => handleConditionClick(4)}
            index={4}
            isActive={isClicked[4]}
          />
          <ConditionBox
            icon={<IcHearthand />}
            activeIcon={<IcHearthandact />}
            condition="소정의 약값"
            onClick={() => handleConditionClick(5)}
            index={5}
            isActive={isClicked[5]}
          />
        </S.ContainerGridBox>
      </S.ModelOfferBox>
      <S.ModelOfferBox>
        <TitleBox title="상세 제안" subtitle="자세히 적을 수록 매칭 성공률이 높아져요" isNeccessary={true} />
      </S.ModelOfferBox>
    </S.ModelOfferLayout>
  );
};

const S = {
  ModelOfferLayout: styled.section`
    margin-top: 5.7rem;
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

export default ModelOffer;
