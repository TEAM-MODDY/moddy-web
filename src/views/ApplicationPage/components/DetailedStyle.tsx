import { useState } from 'react';
import { styled } from 'styled-components';

import Button from '../../@common/components/Button';
import Header from '../../@common/components/Header';
import ProgressBar from '../../@common/components/ProgressBar';
import TextArea200 from '../../@common/components/TextArea200';

const DetailedStyle = () => {
  const [hairDetail, setHairDetail] = useState('');

  return (
    <S.ServiceHistoryLayout>
      <Header isBackBtnExist={true} isCloseBtnExist={true} title="모델 지원하기" />
      <ProgressBar whole={4} current={2} />
      <S.Title>
        <h2>상세 희망 스타일</h2>
        <h3>자세히 적을수록 디자이너의 이해도를 높일 수 있어요</h3>
      </S.Title>
      <TextArea200
        placeholderText="원하시는 스타일을 자세하게 설명해주세요"
        onChangeFn={(value) => {
          setHairDetail(value);
        }}
      />
      <Button
        text="다음"
        isFixed={true}
        onClickFn={() => {
          console.log(hairDetail);
        }}
      />
    </S.ServiceHistoryLayout>
  );
};

const S = {
  ServiceHistoryLayout: styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    margin-top: 7.54rem;
    padding: 0 1.5rem;
  `,

  Title: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    width: 100%;
    margin: 2.2rem 0 1.2rem;

    & > h2 {
      color: ${({ theme }) => theme.colors.moddy_bk};

      ${({ theme }) => theme.fonts.Headline01};
    }

    & > h3 {
      color: ${({ theme }) => theme.colors.moddy_gray50};

      ${({ theme }) => theme.fonts.Body02};
    }
  `,
};

export default DetailedStyle;
