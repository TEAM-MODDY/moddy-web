import Header from '@/views/@common/components/Header';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import DesignerInfoSection from './DesignerInfoSection';

const EditInfoPage = () => {
  const isModel = useLocation();

  const handleRightBtn = () => {
    if (isModel.state) {
      console.log('post 보내기');
    } else {
      console.log('디자이너');
    }
  };

  return (
    <>
      <Header title="프로필 수정" isBackBtnExist={true} rightBtnText="저장" rightFn={handleRightBtn} />
      <S.InfoSection>{isModel.state ? <div>가콩 여기야</div> : <DesignerInfoSection />}</S.InfoSection>
    </>
  );
};

const S = {
  InfoSection: styled.div`
    margin: 6.7rem 0 15rem;
    padding: 0 1.6rem;
  `,
};

export default EditInfoPage;
