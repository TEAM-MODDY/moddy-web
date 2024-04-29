import { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import { IcDownGrey, IcInformation, IcUpBlue, IcCloseSmBlue } from '../../../@common/assets/icons';
import Button from '../../../@common/components/Button';
import ProgressBar from '../../../@common/components/ProgressBar';
import { PREFER_REGION_MIN_COUNT } from '../../constants/constants';
import { HELPER_MESSAGE, PLACE_HOLDER_MESSAGE } from '../../constants/message';
import useGetRegion from '../../hooks/useGetRegion';
import usePostModelSignUp from '../../hooks/usePostModelSignUp';
import Field from '../@common/Field';

import RegionItem from './RegionItem';

import { preferRegionState, regionState } from '@/recoil/atoms/signUpState';
import Modal from '@/views/@common/components/Modal';

const PreferRegion = () => {
  useGetRegion();
  const regionList = useRecoilValue(regionState);
  const postModelSignUp = usePostModelSignUp();
  const [isShowCategory, setIsShowCategory] = useState(false);
  const [isCheckedList, setIsCheckedList] = useRecoilState(preferRegionState);
  const [isShowBottomSheet, setIsShowBottomSheet] = useState(false);
  const [isOpenModal, setOpenModal] = useState(false);

  const categoryRef = useRef<HTMLDivElement>(null);
  const bottomSheetRef = useRef<HTMLDivElement>(null);
  const selectorBoxRef = useRef<HTMLDivElement>(null);

  const handleSignUp = async () => {
    await postModelSignUp();
  };

  useEffect(() => {
    // 특정 영역 외 클릭 시 발생하는 이벤트
    const handleFocus = (e: MouseEvent) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(e.target as Node) &&
        bottomSheetRef.current &&
        !bottomSheetRef.current.contains(e.target as Node) &&
        selectorBoxRef.current &&
        !selectorBoxRef.current.contains(e.target as Node)
      ) {
        setIsShowCategory(false);
      }
    };

    document.addEventListener('mouseup', handleFocus);

    return () => {
      document.removeEventListener('mouseup', handleFocus);
    };
  }, [categoryRef]);

  const handleShowCategory = () => {
    setIsShowCategory((prev) => !prev);
  };

  const handleSelectedList = (index: number) => {
    setIsCheckedList((prevState) => {
      const updatedData = prevState.map((item, idx) => (idx === index ? !item : item));
      return updatedData;
    });
  };

  useEffect(() => {
    isCheckedList.filter((value) => value === true).length > 0
      ? setIsShowBottomSheet(true)
      : setIsShowBottomSheet(false);
  }, [isCheckedList]);

  return (
    <>
      <ProgressBar whole={3} current={3} />
      <S.SelectPreferRegionLayout>
        <Field name="시술희망 지역" isEssential={true} />
        <S.SelectorBox $isshowchecked={isShowCategory.toString()} onClick={handleShowCategory} ref={selectorBoxRef}>
          {PLACE_HOLDER_MESSAGE.SELECT_PREFER_REGION}
          {!isShowCategory ? <IcDownGrey /> : <IcUpBlue />}
        </S.SelectorBox>
        {!isShowCategory ? (
          <S.HelperBox>
            <IcInformation />
            <S.HelperSpan>{HELPER_MESSAGE.NOW_ONLY_SEOUL_AVAILABE}</S.HelperSpan>
          </S.HelperBox>
        ) : (
          <S.CategoryBox ref={categoryRef}>
            <S.InnerBox>
              <S.CitySpan>서울특별시</S.CitySpan>
              <S.RegionList>
                {regionList.map((region, index) => (
                  <RegionItem key={index} region={region.name} index={region.id} regionList={regionList} />
                ))}
              </S.RegionList>
            </S.InnerBox>
          </S.CategoryBox>
        )}
        <S.BottomSheetBox ref={bottomSheetRef} $isopen={isShowBottomSheet.toString()}>
          <S.SelectedListBox>
            {isCheckedList
              .map((isChecked, index) => (isChecked ? index : -1)) // 체크 된 경우에만 해당 인덱스 반환
              .filter((index) => index !== -1) // 유효한 인덱스만 필터링
              .map((index) => {
                return (
                  <S.SelectedRegionBox key={index}>
                    <SelectedRegionSpan>{regionList[index].name}</SelectedRegionSpan>
                    <button onClick={() => handleSelectedList(index)}>
                      <IcCloseSmBlue />
                    </button>
                  </S.SelectedRegionBox>
                );
              })}
          </S.SelectedListBox>
        </S.BottomSheetBox>
      </S.SelectPreferRegionLayout>
      <Button
        id="ga-prefer-region-btn"
        text="완료"
        isFixed={true}
        onClickFn={() => {
          setOpenModal(true);
        }}
        disabled={isCheckedList.length < PREFER_REGION_MIN_COUNT}
      />
      {isOpenModal && (
        <Modal
          id="ga-model-sign-up-btn"
          title="이대로 가입하시겠어요?"
          description="가입 후에는 수정이 어려워요"
          leftBtnText="돌아가기"
          rightBtnText="확인"
          leftBtnFn={() => setOpenModal(false)}
          rightBtnFn={() => handleSignUp()}
        />
      )}
    </>
  );
};
export default PreferRegion;

const SelectPreferRegionLayout = styled.div`
  position: relative;

  margin-top: 8.6rem;
  padding: 0 1.6rem;
`;

const SelectorBox = styled.div<{ $isshowchecked: string }>`
  position: relative;

  width: 100%;
  padding: 1.2rem 1.6rem;
  border: 1.5px solid
    ${({ theme, $isshowchecked }) => ($isshowchecked === 'true' ? theme.colors.moddy_blue : theme.colors.moddy_gray20)};
  ${({ theme }) => theme.colors.moddy_gray20};

  border-radius: 8px;
  ${({ theme }) => theme.fonts.Body02};

  color: ${({ theme }) => theme.colors.moddy_gray50};

  & > svg {
    position: absolute;
    top: 1.1rem;
    right: 1.3rem;
  }
`;

const HelperBox = styled.div`
  display: flex;
  gap: 0.4rem;

  margin-top: 0.8rem;
`;

const HelperSpan = styled.span`
  color: ${({ theme }) => theme.colors.moddy_blue2};
  ${({ theme }) => theme.fonts.Body04};
`;

const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;

  width: 100%;
  height: 25.8rem;
  margin-top: 0.4rem;
  padding: 1.2rem;
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.moddy_wt};
  box-shadow: ${({ theme }) => theme.effects.shadow4};
`;
const InnerBox = styled.div`
  width: 100%;

  ${({ theme }) => theme.commons.scrollbar};
`;

const CitySpan = styled.span`
  color: ${({ theme }) => theme.colors.moddy_blue2};
  ${({ theme }) => theme.fonts.Body03};
`;

const RegionList = styled.ul`
  margin-top: 0.4rem;
  padding: 0.6rem 3.2rem;
`;

const BottomSheetBox = styled.div<{ $isopen: string }>`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;

  width: 100%;
  max-width: 43rem;
  height: ${({ $isopen }) => ($isopen === 'true' ? '16.2rem' : '0')};
  margin: 0 auto;

  box-shadow: ${({ theme }) => theme.effects.shadow4};

  transition: height 0.3s ease-in-out;
`;

const SelectedListBox = styled.div`
  display: flex;
  gap: 1rem;

  padding: 1.8rem 1.6rem;
`;

const SelectedRegionBox = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;

  padding: 0.7rem 0.6rem 0.7rem 1.2rem;
  border: 1.5px solid ${({ theme }) => theme.colors.moddy_blue};
  border-radius: 6px;

  background: ${({ theme }) => theme.colors.moddy_blue4};
`;

const SelectedRegionSpan = styled.span`
  color: ${({ theme }) => theme.colors.moddy_blue};
  ${({ theme }) => theme.fonts.Headline04};
`;

const BackGroundBox = styled.div`
  position: ab;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100dvh;
`;
const S = {
  SelectPreferRegionLayout,
  SelectorBox,
  HelperBox,
  HelperSpan,
  CategoryBox,
  CitySpan,
  RegionList,
  InnerBox,
  BottomSheetBox,
  SelectedListBox,
  SelectedRegionBox,
  BackGroundBox,
};
