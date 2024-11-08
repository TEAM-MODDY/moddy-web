import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { UserProps } from '../hooks/type';

import { IcRightGrey } from '@/views/@common/assets/icons';
import ImgMdModel from '@images/img_mdprofile.png';
import ImgMyLogo from '@images/img_mylogo.png';

interface MyInfoProps {
  data: UserProps;
  isModel: boolean;
}
const MyInfo = ({ data, isModel }: MyInfoProps) => {
  const navigate = useNavigate();

  return (
    <S.MyInfoLayout>
      <S.MyInfoBox>
        <img src={data ? data.profileImgUrl : ImgMdModel} alt="마이페이지 프로필" />
        {data && (
          <S.MyInfoTextBox>
            <S.NameTextBox>
              <h1>{data.name}님, 안녕하세요!</h1>
              <button type="button" onClick={() => navigate('/edit-profile', { state: isModel })}>
                <IcRightGrey />
              </button>
            </S.NameTextBox>
            <p>헤어 {isModel ? '모델' : '디자이너'}</p>
          </S.MyInfoTextBox>
        )}
      </S.MyInfoBox>
      <img src={ImgMyLogo} alt="마이페이지 로고" className="mylogo" />
    </S.MyInfoLayout>
  );
};

export default MyInfo;

const S = {
  MyInfoLayout: styled.section`
    position: relative;

    width: 100%;
    margin-top: 4.9rem;
    padding: 2.6rem 1.6rem;

    background-color: ${({ theme }) => theme.colors.moddy_blue6};

    .mylogo {
      position: absolute;
      right: 0;
      bottom: 0;

      width: 8rem;
      height: 4rem;
      margin: 1.2rem 1.5rem;
    }
  `,
  MyInfoBox: styled.div`
    display: flex;
    gap: 1.6rem;

    & > img {
      width: 8rem;
      height: 8rem;
      border: 1.5px solid ${({ theme }) => theme.colors.moddy_blue};
      border-radius: 8px;
      object-fit: cover;

      background-color: ${({ theme }) => theme.colors.moddy_wt};
    }
  `,
  MyInfoTextBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    width: 100%;

    & > p {
      color: ${({ theme }) => theme.colors.moddy_gray50};
      ${({ theme }) => theme.fonts.Body01};
    }
  `,

  NameTextBox: styled.div`
    display: flex;
    justify-content: space-between;

    & > h1 {
      color: ${({ theme }) => theme.colors.moddy_blue};
      ${({ theme }) => theme.fonts.Title03};
    }
  `,
};
