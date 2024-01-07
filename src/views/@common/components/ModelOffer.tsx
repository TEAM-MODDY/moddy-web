// import Header from './Header';
import { styled } from 'styled-components';

import {
  IcCamera,
  IcModdyhearts1,
  IcGift,
  IcMask,
  IcPhotoshopact,
  IcHearthand,
} from '../../ModelInfoPage/assets/icons';
import ConditionBox from '../../ModelInfoPage/components/ConditionBox';
import TitleBox from '../../ModelInfoPage/components/TitleBox';

const ModelOffer = () => {
  return (
    <S.ModelOfferLayout>
      <S.ModelOfferBox>
        <TitleBox title="희망 제안 조건" subtitle="원하시는 조건을 모두 선택해주세요" isNeccessary={true} />
        <S.ContainerGridBox>
          <ConditionBox icon={<IcCamera />} condition="얼굴 촬영" isClicked={false} />
          <ConditionBox icon={<IcModdyhearts1 />} condition="SNS 게시" isClicked={false} />
          <ConditionBox icon={<IcGift />} condition="얼굴 촬영" isClicked={false} />
          <ConditionBox icon={<IcMask />} condition="마스크 착용" isClicked={false} />
          <ConditionBox icon={<IcPhotoshopact />} condition="포토샵 보정" isClicked={false} />
          <ConditionBox icon={<IcHearthand />} condition="소정의 약값" isClicked={false} />
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
