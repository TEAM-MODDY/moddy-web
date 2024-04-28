import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import { preferRegionState } from '@/recoil/atoms/signUpState';
import { IcCloseSmBlue, IcDownGrey, IcInformation, IcUpBlue } from '@/views/@common/assets/icons';
import Header from '@/views/@common/components/Header';
import Input from '@/views/@common/components/Input';
import Modal from '@/views/@common/components/Modal';
import RegionItem from '@/views/@common/components/RegionItem';
import TitleField from '@/views/@common/components/TitleField';

const ModelEditInfoSection = () => {
  const regionList = [
    { id: 0, name: '전체' },
    { id: 1, name: '강남구' },
    { id: 2, name: '서초구' },
    { id: 3, name: '관악구' },
    { id: 4, name: '종로구' },
    { id: 5, name: '광진구' },
    { id: 6, name: '송파구' },
  ];
  const isRegionList = useRecoilValue(preferRegionState);
  const [isShowCategory, setIsShowCategory] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);
  const selectorBoxRef = useRef<HTMLDivElement>(null);
  const [isSaveModalOpen, setSaveModalOpen] = useState(false);
  const [isBackModalOpen, setBackModalOpen] = useState(false);
  const navigate = useNavigate();
  const [isChanged] = useState(false);

  const isRegionSelected = isRegionList.every((region) => !region);

  useEffect(() => {
    // 특정 영역 외 클릭 시 발생하는 이벤트
    const handleFocus = (e: MouseEvent) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(e.target as Node) &&
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

  //오른쪽 저장클릭시 동작
  const handleSaveBtn = () => {
    if (isChanged) {
      setSaveModalOpen(true);
    } else {
      navigate('/my-page');
    }
  };

  const handleCloseSaveModal = () => {
    setSaveModalOpen(false);
  };

  //왼쪽 이전으로 버튼 클릭시 동작
  const handleBackBtn = () => {
    if (isChanged) {
      setBackModalOpen(true);
    } else {
      navigate(-1);
    }
  };

  const handleCloseBackModal = () => {
    setBackModalOpen(false);
  };

  //이후 put으로 변경될 예정
  const handleSaveInfo = () => {
    console.log('ㅇㅇ');
  };

  const handleShowCategory = () => {
    setIsShowCategory((prev) => !prev);
  };

  const handleInputChange = (key: string, value: string) => {
    console.log(key, value);
  };

  return (
    <S.ModelEditInfoSectionLayout>
      <Header
        title="프로필 수정"
        isBackBtnExist={true}
        rightBtn={<S.SaveBtn>저장</S.SaveBtn>}
        rightFn={handleSaveBtn}
        backFn={handleBackBtn}
      />
      {isSaveModalOpen && (
        <Modal
          title="프로필을 수정할까요?"
          description="이전에 작성했던 내용은 사라져요"
          leftBtnText="취소"
          leftBtnFn={handleCloseSaveModal}
          rightBtnText="확인"
          rightBtnFn={handleSaveInfo}
        />
      )}
      {isBackModalOpen && (
        <Modal
          title="수정을 취소할까요?"
          description="저장을 누르지 않으면 <br/>수정 중인 내용이 사라져요."
          leftBtnText="계속하기"
          leftBtnFn={handleCloseBackModal}
          rightBtnText="취소하기"
          rightBtnFn={() => {
            navigate(-1);
          }}
        />
      )}

      <S.ModelInfoSection>
        <S.InputBox>
          <TitleField text="이름" isEssential={true} />
          <Input placeholderText="정보" onChangeFn={(value) => handleInputChange('name', value)} />
          <S.HelperBox>
            <IcInformation />
            <S.HelperSpan>실명을 입력해주세요</S.HelperSpan>
          </S.HelperBox>
        </S.InputBox>
        <S.InputBox>
          <TitleField text="출생 연도" isEssential={true} />
          <Input placeholderText="정보" onChangeFn={(value) => handleInputChange('birthYear', value)} />
        </S.InputBox>
        <S.InputBox>
          <TitleField text="성별" isEssential={true} />
          <S.GenderSelectBox>
            <S.GenderRadio type="radio" />
            <S.GenderLabel>여성</S.GenderLabel>
            <S.GenderRadio type="radio" />
            <S.GenderLabel>남성</S.GenderLabel>
          </S.GenderSelectBox>
        </S.InputBox>
        <S.InputBox>
          <TitleField text="전화번호" isEssential={true} />
          <S.DisabledInputBox>정보</S.DisabledInputBox>
        </S.InputBox>
        <S.InputBox>
          <TitleField text="시술희망 지역" isEssential={true} />
          <S.SelectorBox
            $isShowChecked={isShowCategory.toString()}
            $isRegionSelected={isRegionSelected}
            onClick={handleShowCategory}
            ref={selectorBoxRef}>
            {isRegionSelected
              ? '희망 지역 선택 안내'
              : isRegionList.map((region, index) =>
                  region ? (
                    <S.SelectedRegionBox key={index}>
                      <S.RegionName>{regionList[index].name}</S.RegionName>
                      <IcCloseSmBlue />
                    </S.SelectedRegionBox>
                  ) : null,
                )}
            {!isShowCategory ? <IcDownGrey /> : <IcUpBlue />}
          </S.SelectorBox>
          {!isShowCategory ? (
            <S.HelperBox>
              <IcInformation />
              <S.HelperSpan>지금은 서울특별시에서만 운영하고 있어요.</S.HelperSpan>
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
        </S.InputBox>
      </S.ModelInfoSection>
    </S.ModelEditInfoSectionLayout>
  );
};

const S = {
  ModelEditInfoSectionLayout: styled.section`
    display: flex;
    justify-content: center;

    margin: 6.7rem 0 15rem;
    padding: 0 1.6rem;
  `,
  SaveBtn: styled.span`
    cursor: pointer;
    ${({ theme }) => theme.fonts.Body02};
  `,
  ModelInfoSection: styled.section`
    display: flex;
    flex-direction: column;
    gap: 3.6rem;
  `,
  InputBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  `,
  GenderSelectBox: styled.div`
    display: flex;
    gap: 1.6rem;
  `,
  GenderRadio: styled.input`
    display: none;

    &:checked + label {
      border: 1.5px solid ${({ theme }) => theme.colors.moddy_blue};

      box-shadow: ${({ theme }) => theme.effects.shadow2};

      color: ${({ theme }) => theme.colors.moddy_bk};
    }
  `,
  GenderLabel: styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    width: 16.4rem;
    padding: 1.2rem 0;
    border: 1.5px solid ${({ theme }) => theme.colors.moddy_gray20};
    border-radius: 8px;

    background: ${({ theme }) => theme.colors.moddy_wt};

    color: ${({ theme }) => theme.colors.moddy_gray50};
    ${({ theme }) => theme.fonts.Body01};
  `,
  DisabledInputBox: styled.div`
    width: 100%;
    height: 4.2rem;
    padding: 1.2rem 1.5rem;
    border: 1.5px solid ${({ theme }) => theme.colors.moddy_gray20};
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.moddy_gray05};

    color: ${({ theme }) => theme.colors.moddy_gray50};
    ${({ theme }) => theme.fonts.Body02};
  `,

  SelectorBox: styled.div<{ $isShowChecked: string; $isRegionSelected: boolean }>`
    display: flex;
    gap: 1rem;
    position: relative;

    width: 100%;
    padding: ${({ $isRegionSelected }) => ($isRegionSelected ? '1.2rem 1.6rem' : '0.4rem')};
    border: 1.5px solid
      ${({ theme, $isShowChecked }) =>
        $isShowChecked === 'true' ? theme.colors.moddy_blue : theme.colors.moddy_gray20};
    ${({ theme }) => theme.colors.moddy_gray20};

    border-radius: 8px;
    ${({ theme }) => theme.fonts.Body02};

    color: ${({ theme }) => theme.colors.moddy_gray50};

    & > svg {
      position: absolute;
      top: 1.1rem;
      right: 1.3rem;
    }
  `,

  SelectedRegionBox: styled.div`
    display: flex;
    gap: 0.4rem;
    align-items: center;

    width: fit-content;
    padding: 0.7rem 1.2rem;
    border: 1.5px solid ${({ theme }) => theme.colors.moddy_blue};
    border-radius: 6px;

    background-color: ${({ theme }) => theme.colors.moddy_blue4};
  `,
  RegionName: styled.span`
    height: fit-content;

    color: ${({ theme }) => theme.colors.moddy_blue};
    ${({ theme }) => theme.fonts.Headline04};
  `,

  HelperBox: styled.div`
    display: flex;
    gap: 0.4rem;

    margin-top: -0.4rem;
  `,

  HelperSpan: styled.span`
    color: ${({ theme }) => theme.colors.moddy_blue2};
    ${({ theme }) => theme.fonts.Body04};
  `,

  CategoryBox: styled.div`
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
  `,
  InnerBox: styled.div`
    width: 100%;

    ${({ theme }) => theme.commons.scrollbar};
  `,

  CitySpan: styled.span`
    color: ${({ theme }) => theme.colors.moddy_blue2};
    ${({ theme }) => theme.fonts.Body03};
  `,

  RegionList: styled.ul`
    margin-top: 0.4rem;
    padding: 0.6rem 2rem;
  `,
};

export default ModelEditInfoSection;
