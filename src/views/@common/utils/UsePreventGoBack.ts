import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UsePreventGoBack = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const handlePopState = () => navigate('/');
    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', handlePopState);

    return () => window.removeEventListener('popstate', handlePopState);
  }, [navigate]);
};

export default UsePreventGoBack;
