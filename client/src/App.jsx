import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import Home from './Components/Home'
import ProfilesHub from './Components/ProfilesHub'
import Login from './Components/Login'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<ProfilesHub />} />
      </Routes>
    </div>
  )
}

export default App
