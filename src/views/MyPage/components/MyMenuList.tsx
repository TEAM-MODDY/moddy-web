import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { IcContactus, IcContactus1, IcDocument, IcModdypin, IcModdyusers2, IcMyApplication } from '../assets/icons';
import { LINK } from '../constants/link';

import MyMenuItem from './MyMenuItem';

interface MyMenuListProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModel: boolean;
}
const MyMenuList = ({ setModalOpen, isModel }: MyMenuListProps) => {
  const navigate = useNavigate();
  return (
    <S.MyMenuListLayout>
      {isModel && (
        <>
          <S.MyMenuListBox>
            <S.MyMenuListParagraph>이용내역</S.MyMenuListParagraph>
            <MyMenuItem
              icon={<IcMyApplication />}
              text="나의 지원서"
              onClickFn={() =>
                navigate('/model-info', {
                  state: {
                    applicationId: 18, // 임시 state
                    from: location.pathname,
                  },
                })
              }
            />
          </S.MyMenuListBox>
          <S.MyMenuListLine />
        </>
      )}
      <S.MyMenuListBox>
        <S.MyMenuListParagraph>고객센터</S.MyMenuListParagraph>
        <a href={LINK.CONTACT}>
          <MyMenuItem icon={<IcContactus1 />} text="문의하기" />
        </a>
      </S.MyMenuListBox>
      <S.MyMenuListLine />
      <S.MyMenuListBox>
        <S.MyMenuListParagraph>서비스 정보</S.MyMenuListParagraph>
        <a href={LINK.TERM}>
          <MyMenuItem icon={<IcDocument />} text="약관 및 정책" />
        </a>
        <a href={LINK.VERSION}>
          <MyMenuItem icon={<IcContactus />} text="버전 정보" />
        </a>
      </S.MyMenuListBox>
      <S.MyMenuListLine />
      <S.MyMenuListBox>
        <S.MyMenuListParagraph>계정 관리</S.MyMenuListParagraph>
        <MyMenuItem icon={<IcModdypin />} text="로그아웃" onClickFn={() => setModalOpen(true)} />
        <MyMenuItem icon={<IcModdyusers2 />} text="회원탈퇴" onClickFn={() => navigate('/my-quit')} />
      </S.MyMenuListBox>
    </S.MyMenuListLayout>
  );
};

export default MyMenuList;

const S = {
  MyMenuListLayout: styled.section`
    display: flex;
    flex-direction: column;

    padding: 1.6rem;
  `,
  MyMenuListBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    margin: 1.6rem 0;
  `,
  MyMenuListParagraph: styled.p`
    margin-bottom: 0.4rem;

    color: ${({ theme }) => theme.colors.moddy_gray50};
    ${({ theme }) => theme.fonts.Body03};
  `,
  MyMenuListLine: styled.div`
    width: 100%;
    height: 0.1rem;

    background-color: ${({ theme }) => theme.colors.moddy_gray10};
  `,
};
