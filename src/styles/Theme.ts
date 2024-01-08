import { css, DefaultTheme } from 'styled-components';

const colors = {
  moddy_blue: '#236fff',
  moddy_blue2: '#91b7ff',
  moddy_blue3: '#d3e2ff',
  moddy_blue4: '#F4f8ff',
  moddy_blue5: '#D0DEF4',
  moddy_blue6: '#E9F1FF',
  moddy_sky: '#6ae4ff',
  moddy_purple: '#a38eff',
  moddy_sora: '#3287FF',
  kakao: '#f3dd24',
  moddy_gradient3: 'linear-gradient(152deg, #6AE4FF -45.76%, #236FFF 25.9%, #236FFF 50.94%, #A38EFF 120.01%)',
  moddy_gradient4: 'linear-gradient(180deg, #3287FF 18.47%, #236FFF 49.02%, #236FFF 75.03%, #A38EFF 115.44%)',

  moddy_bk: '#1d2330',
  moddy_wt: '#ffffff',
  moddy_gray50: '#8e9197',
  moddy_gray20: '#d2d3d6',
  moddy_gray10: '#e8e9ea',
  moddy_gray05: '#f4f4f5',
  moddy_bk50: 'rgba(0, 0, 0, 0.50)',
  moddy_wt30: 'rgba(255, 255, 255, 0.30)',
  moddy_bk20: 'rgba(0, 0, 0, 0.20)',
};

const effects = {
  shadow1: '0px 0px 8px 0px rgba(0, 0, 0, 0.24)',
  shadow2: '0px 0px 8px 0px rgba(35, 111, 255, 0.24)',
  shadow3: '0px 0px 4px 0px rgba(35, 111, 255, 0.24)',
  shadow4: '0px 0px 4px 0px rgba(0, 0, 0, 0.24)',
  shadow_home: '0px 3px 10px 0px rgba(0, 0, 0, 0.20)',
  main_cta_shadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.24)',
  main_cta_blur: 'blur(5px);',
  graphic: '0px 0px 30px 0px rgba(35, 111, 255, 0.70)',
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
    font-size: 2.2rem;
    font-weight: 700;
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
    font-size: 2.2rem;
    font-weight: 400;
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
    font-size: 2rem;
    font-weight: 700;
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
    font-size: 2rem;
    font-weight: 400;
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
    font-size: 1.8rem;
    font-weight: 600;
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
    font-size: 1.6rem;
    font-weight: 700;
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
    font-size: 1.6rem;
    font-weight: 600;
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
    font-size: 1.6rem;
    font-weight: 400;
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
    font-size: 1.4rem;
    font-weight: 600;
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
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.8rem;
  `,
  Body02_En: css`
    font-family: MuseoModerno, sans-serif;
    font-style: italic;
    font-size: 1.4rem;
    font-weight: 300;
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
    font-size: 1.2rem;
    font-weight: 600;
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
    font-size: 1.2rem;
    font-weight: 400;
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
    font-size: 1rem;
    font-weight: 600;
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
    font-size: 1rem;
    font-weight: 500;
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
    font-size: 1rem;
    font-weight: 400;
  `,
  Caption03_En: css`
    font-family: MuseoModerno, sans-serif;
    font-style: italic;
    font-size: 1rem;
    font-weight: 400;
  `,
};

const theme: DefaultTheme = {
  colors,
  effects,
  fonts,
};
export default theme;
