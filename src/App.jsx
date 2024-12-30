import { useState } from 'react';
import Header from './componets/Header';
import Home from './componets/Home';
import PhoneNumber from './componets/PhoneNumber';

function App() {
  const [login, setLogin] = useState(false);

  const handleLoginChange = (event) => {
    setLogin(event);
  };

  const handleLogoChange = (event) => {
    setLogin(event);
  };

  return (
    <>
      <Header setLogin={handleLoginChange} setHome={handleLogoChange} />
      {login ? <PhoneNumber /> : <Home />}
    </>
  );
}

export default App;
