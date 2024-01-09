import {
  IcCamera,
  IcCameraact,
  IcModdyhearts1,
  IcModdyhearts1act,
  IcGift,
  IcGiftact,
  IcMask,
  IcMaskact,
  IcPhotoshop,
  IcPhotoshopact,
  IcHearthand,
  IcHearthandact,
} from '../assets/icons/';

export const conditionData = [
  { icon: <IcCamera />, activeIcon: <IcCameraact />, condition: '얼굴 촬영' },
  { icon: <IcModdyhearts1 />, activeIcon: <IcModdyhearts1act />, condition: 'SNS 게시' },
  { icon: <IcGift />, activeIcon: <IcGiftact />, condition: '얼굴 촬영' },
  { icon: <IcMask />, activeIcon: <IcMaskact />, condition: '마스크 착용' },
  { icon: <IcPhotoshop />, activeIcon: <IcPhotoshopact />, condition: '포토샵 보정' },
  { icon: <IcHearthand />, activeIcon: <IcHearthandact />, condition: '소정의 약값' },
];
