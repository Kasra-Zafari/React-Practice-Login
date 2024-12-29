import { useState } from 'react'
import Header from './componets/Header'
import Home from './componets/Home'
import PhoneNumber from './componets/PhoneNumber'
// import './App.css'

function App() {
  const [login, setLogin] = useState(false);

  const handleLoginChange = (event)=>{
    setLogin(event)
  }

  return (
    <>
      <Header setLogin={handleLoginChange}/>
      {login ? <PhoneNumber/>: <Home/>}
    </>
  )
}

export default App
