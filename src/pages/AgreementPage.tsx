import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import Button from '../views/@common/components/Button';
import Header from '../views/@common/components/Header';
import AgreementList from '../views/AgreementPage/components/AgreementList';

import { agreementState } from '@/recoil/atoms/agreementState';

const AgreementPage = () => {
  const [isChecked, setChecked] = useRecoilState<boolean[]>(agreementState);
  const navigate = useNavigate();

  useEffect(() => {
    const tempChecked = [...isChecked];
    tempChecked[0] = isChecked[1] && isChecked[2] && isChecked[3];
    setChecked(tempChecked);
  }, [isChecked[1], isChecked[2], isChecked[3]]);

  return (
    <div>
      <Header title="이용약관" isBackBtnExist backFn={() => navigate(-1)} />
      <AgreementList />
      <Button text="다음" isFixed onClickFn={() => navigate('/sign-up')} disabled={!isChecked[1] || !isChecked[2]} />
    </div>
  );
};

export default AgreementPage;
