import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../views/@common/components/Button';
import Header from '../views/@common/components/Header';
import MyQuitCheck from '../views/MyQuit/components/MyQuitCheck';
import MyQuitText from '../views/MyQuit/components/MyQuitText';

const MyQuitPage = () => {
  const [isChecked, setChecked] = useState(false);
  const navigate = useNavigate();

  return (
    <S.MyQuitPageLayout>
      <Header title="회원탈퇴" isBackBtnExist backFn={() => navigate(-1)} />
      <MyQuitText />
      <MyQuitCheck isChecked={isChecked} setChecked={setChecked} />
      <Button text="확인하기" onClickFn={() => console.log('test')} isFixed disabled={!isChecked} />
    </S.MyQuitPageLayout>
  );
};

export default MyQuitPage;

const S = {
  MyQuitPageLayout: styled.div`
    display: flex;
    flex-direction: column;
  `,
};
