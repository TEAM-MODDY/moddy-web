import { useState } from 'react';

import EnterProfile from '../views/SignUpPage/components/EnterProfile';
import SelectUserType from '../views/SignUpPage/components/SelectUserType';

const SignUpPage = () => {
  const [isInitialStep, setIsInitialStep] = useState(true);
  return (
    <>
      {isInitialStep ? (
        <SelectUserType setStep={setIsInitialStep} />
      ) : (
        <EnterProfile setIsInitialStep={setIsInitialStep} />
      )}
    </>
  );
};

export default SignUpPage;
