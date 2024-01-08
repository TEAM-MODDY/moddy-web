import { useNavigate } from 'react-router-dom';

import Header from '../../@common/components/Header';

const ModelOffer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header
        isBackBtnExist={true}
        isCloseBtnExist={true}
        title="헤어 모델 제안하기"
        backFn={() => {
          navigate(-1);
        }}
      />
      오퍼페이지
    </div>
  );
};

export default ModelOffer;
