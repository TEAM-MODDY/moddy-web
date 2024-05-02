import { useLocation } from 'react-router-dom';

import DesignerEditInfoSection from '@/views/EditInfoPage/components/DesignerEditInfoSection';
import ModelEditInfoSection from '@/views/EditInfoPage/components/ModelEditInfoSection';

const EditInfoPage = () => {
  const isModel = useLocation();

  return <>{isModel.state ? <ModelEditInfoSection /> : <DesignerEditInfoSection />}</>;
};

export default EditInfoPage;
