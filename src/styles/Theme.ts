import { css, DefaultTheme } from 'styled-components';

const colors = {
  ModdyBlue: '#236fff',
  ModdyBlue2: '#91b7ff',
  ModdyBlue3: '#d3e2ff',
  ModdyBlue4: '#F4f8ff',
  ModdySky: '#6ae4ff',
  ModdyPurple: '#a38eff',
  Kakao: '#f3dd24',
  ModdyGradient3: 'linear-gradient(152deg, #6AE4FF -45.76%, #236FFF 25.9%, #236FFF 50.94%, #A38EFF 120.01%)',

  ModdyBk: '#1d2330',
  ModdyWt: '#ffffff',
  ModdyGray50: '#8e9197',
  ModdyGray20: '#d2d3d6',
  ModdyGray10: '#e8e9ea',
  ModdyGray05: '#f4f4f5',
  ModdyBk50: 'rgba(0, 0, 0, 0.50)',
  ModdyWt30: 'rgba(255, 255, 255, 0.30)',
};

const effects = {
  Shadow1: '0px 0px 8px 0px rgba(0, 0, 0, 0.24)',
  Shadow2: '0px 0px 8px 0px rgba(35, 111, 255, 0.24)',
  Shadow3: '0px 0px 4px 0px rgba(35, 111, 255, 0.24)',
  Shadow4: '0px 0px 4px 0px rgba(0, 0, 0, 0.24)',
  ShadowHome: '0px 3px 10px 0px rgba(0, 0, 0, 0.20)',
  MainCtaShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.24)',
  MainCtaBlur: 'blur(5px);',
  Graphic: '0px 0px 30px 0px rgba(35, 111, 255, 0.70)',
};

const fonts = {
  Title01: css`
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 2.2rem;
    line-height: 2.8rem;
  `,
  Title02: css`
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 2.2rem;
    line-height: 2.8rem;
  `,
  Title03: css`
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.8rem;
  `,
  Title04: css`
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.8rem;
  `,

  Headline01: css`
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1.8rem;
  `,

  Headline02: css`
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.6rem;
  `,
  Headline03: css`
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1.6rem;
  `,
  Headline04: css`
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.8rem;
  `,

  Body01: css`
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.8rem;
  `,
  Body02: css`
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.8rem;
  `,
  Body02_En: css`
    font-family: 'MuseoModerno', sans-serif;
    font-style: italic;
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 1.8rem;
  `,
  Body03: css`
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.6rem;
  `,
  Body04: css`
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.8rem;
  `,

  Caption01: css`
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
  `,
  Caption02: css`
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
  `,
  Caption03: css`
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
  `,
  Caption03_En: css`
    font-family: 'MuseoModerno', sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 1rem;
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
  effects,
};
export default theme;
