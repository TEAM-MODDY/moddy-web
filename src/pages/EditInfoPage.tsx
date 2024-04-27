import { useLocation } from 'react-router-dom';

import DesignerEditInfoSection from '@/views/EditInfoPage/components/DesignerEditInfoSection';

const EditInfoPage = () => {
  const isModel = useLocation();

  return <>{isModel.state ? <div>가콩 여기야</div> : <DesignerEditInfoSection />}</>;
};

export default EditInfoPage;
