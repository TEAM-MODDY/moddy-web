import { useState } from 'react';

import EnterProfile from '../views/SignUpPage/components/EnterProfile';
import UserType from '../views/SignUpPage/components/UserType';

const SignUpPage = () => {
  const [isInitialStep, setIsInitialStep] = useState(true);
  return (
    <>
      {isInitialStep ? <UserType setStep={setIsInitialStep} /> : <EnterProfile setIsInitialStep={setIsInitialStep} />}
    </>
  );
};

export default SignUpPage;
