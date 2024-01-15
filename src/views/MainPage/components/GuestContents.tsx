import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import detailContent1 from '../assets/images/img_content1.png';
import detailContent2 from '../assets/images/img_content2.png';
import contentImg1 from '../assets/images/img_maincont1.png';
import contentImg2 from '../assets/images/img_maincont2.png';

import { IcCloseBlack } from '@/views/@common/assets/icons';

interface DetailPageProps {
  imgSrc: string;
}
const GuestContents = () => {
  const [isOpenDetail, setOpenDetail] = useState(0);

  useEffect(() => {
    isOpenDetail > 0
      ? (document.body.style.backgroundColor = '#FFFFFF')
      : (document.body.style.backgroundColor = '#3287FF');
  }, [isOpenDetail]);

  const DetailPage = ({ imgSrc }: DetailPageProps) => {
    return (
      <>
        <S.DetailLayout>
          <S.DetailHeaderBox>
            <S.CloseButton onClick={() => setOpenDetail(0)}>
              <IcCloseBlack />
            </S.CloseButton>
          </S.DetailHeaderBox>
          <img src={imgSrc} alt="상세 페이지" />
        </S.DetailLayout>
      </>
    );
  };
  return (
    <S.ContentsLayout>
      <S.TitleSpan>모디 둘러보기</S.TitleSpan>
      <S.ContentsBox>
        <S.StyleCardBox title="모디를 소개합니다" onClick={() => setOpenDetail(1)}>
          <S.CardInnerBox>
            <S.InfoBox>
              <S.InfoSubTitleSpan>모디가 모지?</S.InfoSubTitleSpan>
              <S.InfoTitleSpan>모디를 소개합니다</S.InfoTitleSpan>
            </S.InfoBox>
          </S.CardInnerBox>
        </S.StyleCardBox>
        <S.StyleCardBox title="요즘 핫한 스타일" onClick={() => setOpenDetail(2)}>
          <S.CardInnerBox2>
            <S.InfoBox>
              <S.InfoSubTitleSpan>2024 헤어 트렌드</S.InfoSubTitleSpan>
              <S.InfoTitleSpan>요즘 핫한 스타일</S.InfoTitleSpan>
            </S.InfoBox>
          </S.CardInnerBox2>
        </S.StyleCardBox>
      </S.ContentsBox>
      {isOpenDetail === 1 ? (
        <DetailPage imgSrc={detailContent1} />
      ) : isOpenDetail === 2 ? (
        <DetailPage imgSrc={detailContent2} />
      ) : null}
    </S.ContentsLayout>
  );
};
export default GuestContents;

const ContentsLayout = styled.div`
  padding: 0 1.6rem 3rem;
`;

const TitleSpan = styled.span`
  color: ${({ theme }) => theme.colors.moddy_gray50};
  ${({ theme }) => theme.fonts.Body01};
`;

const CardInnerBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.8rem 2rem 2.4rem;
  border-radius: 12px;

  background: no-repeat center/cover url(${contentImg1});
`;

const CardInnerBox2 = styled(CardInnerBox)`
  background: no-repeat center/cover url(${contentImg2});
`;

const StyleCardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;

  width: 16.4rem;
  height: 22rem;
  border: 1.5px solid transparent;
  border-radius: 12px;

  background-image: linear-gradient(#fff, #fff), linear-gradient(180deg, #c3f4ff 0%, #a8c7ff 52.5%, #dad2ff 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;

  box-shadow: ${({ theme }) => theme.effects.shadow4};
`;

const ContentsBox = styled.div`
  display: flex;
  gap: 1.5rem;

  margin-top: 1.2rem;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoSubTitleSpan = styled.span`
  color: ${({ theme }) => theme.colors.moddy_blue2};
  ${({ theme }) => theme.fonts.Caption01};
`;

const InfoTitleSpan = styled.span`
  margin-top: 0.7rem;

  color: ${({ theme }) => theme.colors.moddy_bk};
  ${({ theme }) => theme.fonts.Headline02};
`;

const ShowMoreButton = styled.button`
  width: 6rem;
  height: 2.2rem;
  border: 1px solid ${({ theme }) => theme.colors.moddy_wt};
  border-radius: 4px;

  background: rgb(255 255 255 / 30%);
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 24%);

  color: ${({ theme }) => theme.colors.moddy_wt};
  line-height: 0;
`;

const DetailLayout = styled.div`
  overflow-y: scroll;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  width: 100%;
  max-width: 43rem;
  height: 100%;
  margin: 0 auto;

  background: ${({ theme }) => theme.colors.moddy_wt};

  & > img {
    width: 100%;
  }
`;

const CloseButton = styled.button`
  float: right;

  padding: 1rem 1.6rem 0 0;
`;

const DetailHeaderBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  width: 100%;
  max-width: 43rem;
  margin: 0 auto;
`;

const S = {
  ContentsLayout,
  ContentsBox,
  TitleSpan,
  StyleCardBox,
  InfoBox,
  InfoSubTitleSpan,
  InfoTitleSpan,
  ShowMoreButton,
  CardInnerBox,
  CardInnerBox2,
  DetailLayout,
  CloseButton,
  DetailHeaderBox,
};
