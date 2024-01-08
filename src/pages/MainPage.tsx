import Button from '../views/@common/components/Button';
import ProgressBar from '../views/@common/components/ProgressBar';

const MainPage = () => {
  return (
    <div>
      <ProgressBar whole={5} current={2} />
      <Button text="다음" onClickFn={() => console.log('test')} isFixed shadow />
    </div>
  );
};

export default MainPage;
