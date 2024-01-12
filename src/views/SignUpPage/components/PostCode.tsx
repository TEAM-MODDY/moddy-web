import DaumPostcode from 'react-daum-postcode';

interface PostCodeProps {
  setIsAddressModal: React.Dispatch<React.SetStateAction<boolean>>;
  setAddress: (value: string) => void;
}

interface PostCodeStyleProps {
  maxWidth?: string;
  width?: string;
  height?: string;
}

const style: PostCodeStyleProps = {
  maxWidth: '44rem',
  width: '100%',
  height: '100dvh',
};

const PostCode = ({ setIsAddressModal, setAddress }: PostCodeProps) => {
  const themeObj = {
    bgColor: '#f4f4f5', //바탕 배경색
    searchBgColor: '#ffffff', // 검색창 배경색
    contentBgColor: '#ffffff', // 본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
    pageBgColor: '#f4f8ff', // 페이지 배경색
    textColor: '#000000', // 기본 글자색
    queryTextColor: '#000000', // 검색창 글자색
    postcodeTextColor: '#236fff', // 우편번호 글자색
    emphTextColor: '#91b7ff', // 강조 글자색
    outlineColor: '#d2d3d6',
  };

  const completeHandler = (data: { address: string }): void => {
    const { address } = data;
    setAddress(address);
    setIsAddressModal(false);
  };

  const handleAddressModalClose = (): void => {
    setIsAddressModal(false);
  };

  return (
    <div>
      <DaumPostcode theme={themeObj} onComplete={completeHandler} onClose={handleAddressModalClose} style={style} />
    </div>
  );
};

export default PostCode;
