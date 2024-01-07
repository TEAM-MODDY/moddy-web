import { styled } from 'styled-components';

import slickperm from '../assets/images/img_homecontents1.png';
import wavyperm from '../assets/images/img_homecontents2.png';
const Contents = () => {
  return (
    <S.ContentsLayout>
      <S.TitleSpan>인기 스타일</S.TitleSpan>
      <S.ContentsBox>
        <S.StyleCardBox>
          <S.InfoBox>
            <S.StyleNameSpan>슬릭펌</S.StyleNameSpan>
            <S.StyleInfoSpan>요즘 인기 최고 펌</S.StyleInfoSpan>
          </S.InfoBox>
          <S.ShowMoreButton type="button">더보기</S.ShowMoreButton>
        </S.StyleCardBox>
        <S.StyleCardBox>
          <S.InfoBox>
            <S.StyleNameSpan>물결펌</S.StyleNameSpan>
            <S.StyleInfoSpan>꾸준한 클래식</S.StyleInfoSpan>
          </S.InfoBox>
          <S.ShowMoreButton type="button">더보기</S.ShowMoreButton>
        </S.StyleCardBox>
      </S.ContentsBox>
    </S.ContentsLayout>
  );
};
export default Contents;

const ContentsLayout = styled.div`
  padding: 0 1.6rem 4rem;
`;

const TitleSpan = styled.span`
  color: ${({ theme }) => theme.colors.moddy_gray50};
  ${({ theme }) => theme.fonts.Body01};
`;

const StyleCardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;

  width: 16.4rem;
  height: 22rem;
  padding: 2.8rem 2rem 2.4rem;
  border-radius: 12px;
`;

const ContentsBox = styled.div`
  display: flex;
  gap: 1.5rem;

  margin-top: 1.2rem;

  & > div:nth-child(1) {
    background:
      linear-gradient(rgb(0 0 0 / 50%), rgb(0 0 0 / 50%)),
      no-repeat center/cover url(${slickperm});
  }

  & > div:nth-child(2) {
    background:
      linear-gradient(rgb(0 0 0 / 50%), rgb(0 0 0 / 50%)),
      no-repeat center/cover url(${wavyperm});
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyleNameSpan = styled.span`
  color: ${({ theme }) => theme.colors.moddy_wt};
  ${({ theme }) => theme.fonts.Headline02};
`;

const StyleInfoSpan = styled.span`
  margin-top: 0.2rem;

  color: ${({ theme }) => theme.colors.moddy_wt};
  ${({ theme }) => theme.fonts.Body04};
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

const S = {
  ContentsLayout,
  ContentsBox,
  TitleSpan,
  StyleCardBox,
  InfoBox,
  StyleNameSpan,
  StyleInfoSpan,
  ShowMoreButton,
};
