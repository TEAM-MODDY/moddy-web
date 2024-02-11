export const SELECT_LENGTH = ['SHORT', 'ABOVE_SHOULDER', 'UNDER_SHOULDER', 'UNDER_WAIST'];

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
