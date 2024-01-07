import { useNavigate } from 'react-router-dom';

import Button from '../views/@common/components/Button';
import Header from '../views/@common/components/Header';
import AgreementList from '../views/AgreementPage/components/AgreementList';

const AgreementPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header title="이용약관" isBackBtnExist backFn={() => navigate(-1)} />
      <AgreementList />
      <Button text="다음" isFixed onClickFn={() => navigate('/sign-up')} />
    </div>
  );
};

export default AgreementPage;
