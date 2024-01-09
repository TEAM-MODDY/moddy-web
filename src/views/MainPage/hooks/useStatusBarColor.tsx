import { useEffect } from 'react';

const useStatusBarColor = () => {
  useEffect(() => {
    document.body.style.background = '#3287FF';
    const handleScroll = () => {
      if (window.scrollY > 217) {
        document.body.style.backgroundColor = '#ffffff';
      } else {
        if (window.scrollY > 200) {
          document.body.style.backgroundColor = '#7282FF';
        } else if (window.scrollY > 140) {
          document.body.style.backgroundColor = '#4879FF';
        } else if (window.scrollY > 80) {
          document.body.style.backgroundColor = '#236FFF';
        } else if (window.scrollY > 60) {
          document.body.style.backgroundColor = '#337bff';
        } else {
          document.body.style.backgroundColor = '#3287FF';
        }
      }
    };
    window.addEventListener('scroll', handleScroll, false);
  }, []);
};

export default useStatusBarColor;
