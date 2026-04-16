import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Admin from './pages/Admin'

function App() {
  
  return (
    <>
       <NavBar/>
       <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/admin" element={<Admin/>} />
       </Routes>
      
    </>
  )
}

export default App
