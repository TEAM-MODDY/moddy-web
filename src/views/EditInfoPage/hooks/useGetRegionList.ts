import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { RegionListResponse } from './type';

import api from '@/views/@common/hooks/api';

interface RegionDataProps {
  id: number;
  name: string;
}

const useGetRegionList = () => {
  const navigate = useNavigate();
  const [regionList, setRegionList] = useState<RegionDataProps[]>([]);

  const fetchData = async () => {
    try {
      const response: RegionListResponse = await api.get('/model/regions');
      setRegionList(response.data.data);
    } catch (err) {
      navigate('/error');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return regionList;
};

export default useGetRegionList;
