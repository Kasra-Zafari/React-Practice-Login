import { useState } from 'react';
import Header from './componets/Header';
import Home from './componets/Home';
import PhoneNumber from './componets/PhoneNumber';
import Otp from './componets/OTP';
import './App.css'


function App() {
  const [loginStep, setLoginStep] = useState(false);
  const [otpStep, setOtpStep] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("")

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
      {otpStep && <Otp/>} */}

      {otpStep ? <Otp phoneNumber={phoneNumber} /> : loginStep ? <PhoneNumber setOtp={handleOtpChange} setPhoneNumber={setPhoneNumber} /> : <Home />}
    </>
  );
}

export default App;
