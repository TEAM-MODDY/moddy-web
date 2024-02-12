import shortDefault from '../../@common/assets/images/btn_hair1_default.png';
import shortSelected from '../../@common/assets/images/btn_hair1_selected.png';
import mediumDefault from '../../@common/assets/images/btn_hair2_default.png';
import mediumSelected from '../../@common/assets/images/btn_hair2_selected.png';
import longDefault from '../../@common/assets/images/btn_hair3_default.png';
import longSelected from '../../@common/assets/images/btn_hair3_selected.png';
import rapunzelDefault from '../../@common/assets/images/btn_hair4_default.png';
import rapunzelSelected from '../../@common/assets/images/btn_hair4_selected.png';

export const SELECT_LENGTH = [
  { LENGTH: 'SHORT', IMAGES: { DEFAULT: shortDefault, SELECTED: shortSelected } },
  { LENGTH: 'ABOVE_SHOULDER', IMAGES: { DEFAULT: mediumDefault, SELECTED: mediumSelected } },
  { LENGTH: 'UNDER_SHOULDER', IMAGES: { DEFAULT: longDefault, SELECTED: longSelected } },
  { LENGTH: 'UNDER_WAIST', IMAGES: { DEFAULT: rapunzelDefault, SELECTED: rapunzelSelected } },
];

export const SELECT_TYPE = {
  CUT: '커트',
  COLOR: '컬러',
  PERM: '펌',
};

export const SELECT_STYLE = [
  { TITLE: '커트', CONTENT: { '일반 커트': 'NORMAL_CUT' } },
  {
    TITLE: '컬러',
    CONTENT: {
      '전체 염색': 'ALL_COLOR',
      '전체 탈색': 'ALL_DECOLOR',
    },
  },
  {
    TITLE: '펌',
    CONTENT: {
      셋팅펌: 'SETTING_PERM ',
      일반펌: 'NORMAL_PERM',
      매직: 'STRAIGHTENING ',
    },
  },
];

export const SELECT_SERVICE = {
  펌: 'PERM',
  탈색: 'DECOLOR',
  '블랙 염색': 'BLACK',
  '컬러 염색': 'COLOR',
};

export const SELECT_PERIOD = {
  '1 개월 미만': 'UNDER_ONE',
  '1 - 3개월': 'ONE_THREE',
  '4 - 6개월': 'FOUR_SIX',
  '7 - 12개월': 'SEVEN_TWELVE',
  '12 개월 초과': 'ABOVE_TWELVE',
};
