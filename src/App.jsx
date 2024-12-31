import { useState } from 'react';
import Header from './componets/Header';
import Home from './componets/Home';
import PhoneNumber from './componets/PhoneNumber';
import OTP from './componets/OTP';
import './App.css'

function App() {
  const [loginStep, setLoginStep] = useState(false);
  const [otpStep, setOtpStep]= useState(false)

  const handleLoginChange = (event) => {
    setLoginStep(event);
    setOtpStep(false);
  };

  const handleLogoChange = (event) => {
    setLoginStep(event);
    setOtpStep(false)
  
  };

  const handleOtpChange = (event) => {
    setOtpStep(event);
  };

  return (
    <>
      <Header setLogin={handleLoginChange} setHome={handleLogoChange} />
      {/* {loginStep ? <PhoneNumber setOtp={handleOtpChange}/> : <Home />}
      {otpStep && <OTP/>} */}

      {otpStep ? <OTP/> : loginStep ? <PhoneNumber setOtp={handleOtpChange}/> : <Home />}
    </>
  );
}

export default App;
