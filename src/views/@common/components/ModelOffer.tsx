// import Header from './Header';
import { styled } from 'styled-components';

import TitleBox from '../../ModelInfoPage/components/TitleBox';

const ModelOffer = () => {
  return (
    <S.ModelOfferLayout>
      <S.ModelOfferBox>
        <TitleBox title="희망 제안 조건" subtitle="원하시는 조건을 모두 선택해주세요" isNeccessary={true} />
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
};

export default ModelOffer;
