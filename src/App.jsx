import { useState } from 'react'
import Header from './componets/Header'
import Home from './componets/Home'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
    </>
  )
}

export default App
