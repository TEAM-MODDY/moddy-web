import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useStatusBarColor = () => {
  const location = useLocation();
  const [themeColor, setThemeColor] = useState<string>('#3287FF'); // 초기 상태바 색상 설정 (메인화면)

  useEffect(() => {
    const handleScroll = () => {
      const colors = [
        { offset: 0, color: '#3287FF' },
        { offset: 60, color: '#337bFF' },
        { offset: 80, color: '#236FFF' },
        { offset: 140, color: '#4879FF' },
        { offset: 200, color: '#7282FF' },
        { offset: 210, color: '#FFFFFF' },
        { offset: 217, color: '#FFFFFF' },
      ];

      const currentScrollY = window.scrollY;
      let startColor: { offset: number; color: string } = { offset: 0, color: '#3287FF' };
      let endColor: { offset: number; color: string } = { offset: 0, color: '#3287FF' };

      // 현재 스크롤 위치에 따라 시작 색상과 끝 색상 설정
      for (let i = 0; i < colors.length - 1; i++) {
        if (currentScrollY >= colors[i].offset && currentScrollY < colors[i + 1].offset) {
          startColor = colors[i];
          endColor = colors[i + 1];
          break;
        }
      }

      // 보간법을 사용하여 현재 스크롤 위치에 따른 상태바 색상 계산
      const progress = (currentScrollY - startColor.offset) / (endColor.offset - startColor.offset);
      const interpolatedColor = interpolateColor(startColor.color, endColor.color, progress);

      setThemeColor(interpolatedColor);
    };

    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      const metaElement = document.getElementById('status-bar') as HTMLMetaElement;
      if (metaElement) metaElement.content = '#FFFFFF';
    };
  }, [location.pathname]);

  useEffect(() => {
    const metaElement = document.getElementById('status-bar') as HTMLMetaElement;
    if (metaElement) metaElement.content = themeColor;
    document.body.style.backgroundColor = themeColor;
  }, [themeColor]);

  // 보간 함수: 두 색상 사이를 보간하여 중간 색상 계산
  const interpolateColor = (startColor: string, endColor: string, progress: number): string => {
    const start = hexToRgb(startColor);
    const end = hexToRgb(endColor);
    const r = Math.round(start.r + (end.r - start.r) * progress);
    const g = Math.round(start.g + (end.g - start.g) * progress);
    const b = Math.round(start.b + (end.b - start.b) * progress);
    return rgbToHex(r, g, b);
  };

  // 16진수 색상을 RGB로 변환
  const hexToRgb = (hex: string) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  };

  // RGB 색상을 16진수로 변환
  const rgbToHex = (r: number, g: number, b: number) => {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
};

export default useStatusBarColor;
