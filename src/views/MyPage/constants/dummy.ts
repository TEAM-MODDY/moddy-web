export const DUMMY_DATA = {
  code: 200,
  message: '디자이너 상세프로필 조회성공',
  data: {
    profileImg: '디자이너이미지',
    introduction: '여기에는 설명이 들어가요',
    designerInfo: {
      name: '강민서',
      gender: 'FEMALE',
      phoneNumber: '01024755640',
      hairShop: {
        name: '모디헤어',
        address: '서울특별시 관악구 남부순환로 1811',
        detailAddress: '1209호',
      },
      dayOffs: ['MON', 'TUE'],
      portfolio: {
        instagramUrl: 'www.instagram.com',
        naverPlaceUrl: 'www.naver.com',
      },
      kakaoOpenChatUrl: 'www.kakaotalk.com',
    },
  },
};
