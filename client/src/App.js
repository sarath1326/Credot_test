

import React from 'react'
import Home from './Componets/home/Home'
import Signup from './Componets/account/signup/Signup'
import {Routes , Route} from "react-router-dom"
import Login from './Componets/account/login/Login'

function App() {
  return (
    <div>

      <Routes >

        <Route element={<Home />} path='/' />
        <Route element={<Signup />} path='/signup' />
        <Route element={<Login />} path='/login' />



      </Routes>

      
      
    </div>
  )
}

export default App

