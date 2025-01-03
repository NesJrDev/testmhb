import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/app/Home'
import { Register } from './components/app/Register'
import { Appointments } from './components/app/Appointments'
import Login from './components/app/Login'
import { RegLoginAdmin } from './components/app/regLoginAdmin'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/appointments' element={<Appointments />}/>
        <Route path='/loginAdmin' element={<RegLoginAdmin />}/>
      </Routes>
    </Router>
  )
}

export default App