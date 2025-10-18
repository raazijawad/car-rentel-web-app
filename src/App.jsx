import { useState } from 'react'

import './App.css'
import NavBar from './Components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Contact from './Components/Contact'
import ContactPage from './Pages/ContactPage'
import Cars from './Components/Cars'
import CarsPage from './Pages/CarsPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/contacts' element={<ContactPage />} />
        <Route path='/cars' element={<CarsPage />} />
      </Routes>
    </>
  )
}

export default App
