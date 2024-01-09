import { styled } from 'styled-components';

import { MODEL_INFO_DATA } from '../constants/MODEL_INFO_DATA';

import OfferDetailBox from './OfferDetailBox';

const DetailBox = () => {
  const ApplicationInfo = MODEL_INFO_DATA.data.applicationInfo;
  return (
    <>
      <S.DetailWrapperBox>
        {ApplicationInfo.hairServiceRecords.map((record, idx) => (
          <OfferDetailBox key={idx} hairServiceTerm={record.hairServiceTerm} hairService={record.hairService} />
        ))}
      </S.DetailWrapperBox>
      <h2>상세 희망 스타일</h2>
      <S.DetailWrapperBox>
        <p>{ApplicationInfo.hairDetail}</p>
      </S.DetailWrapperBox>
    </>
  );
};

const S = {
  DetailWrapperBox: styled.div`
    width: 100%;
    margin-bottom: 2rem;
    padding: 1.3rem 1.65rem;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.colors.moddy_gray05};

    & > p {
      color: ${({ theme }) => theme.colors.moddy_bk};

      ${({ theme }) => theme.fonts.Body02};

      word-break: keep-all;
    }
  `,
};

export default DetailBox;
