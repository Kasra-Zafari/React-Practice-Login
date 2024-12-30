import { useState } from 'react';
import Header from './componets/Header';
import Home from './componets/Home';
import PhoneNumber from './componets/PhoneNumber';
import OTP from './componets/OTP';

function App() {
  const [loginStep, setLoginStep] = useState(false);
  const [otoStep, setOtpStep]= useState(false)

  const handleLoginChange = (event) => {
    setLoginStep(event);
  };

  const handleLogoChange = (event) => {
    setLoginStep(event);
  };

  const handleOtpChange = (event) => {
    setOtpStep(event);
  };

  return (
    <>
      <Header setLogin={handleLoginChange} setHome={handleLogoChange} />
      {loginStep ? <PhoneNumber setOtp={handleOtpChange}/> : <Home />}
      {otoStep && <OTP/>}
    </>
  );
}

export default App;
