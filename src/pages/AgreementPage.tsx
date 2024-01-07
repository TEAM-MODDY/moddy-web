import { useNavigate } from 'react-router-dom';

import Button from '../views/@common/components/Button';
import Header from '../views/@common/components/Header';

const AgreementPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header title="이용약관" isBackBtnExist backFn={() => navigate(-1)} />
      <Button text="다음" isFixed onClickFn={() => console.log('임시 클릭함수')} />
    </div>
  );
};

export default AgreementPage;
