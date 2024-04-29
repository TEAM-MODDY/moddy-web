import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { RegionData, RegionListResponse } from './type';

import api from '@/views/@common/hooks/api';

const useGetRegionList = () => {
  const navigate = useNavigate();
  const [regionList, setRegionList] = useState<RegionData[]>([]);

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
