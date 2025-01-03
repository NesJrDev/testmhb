import React from 'react'
import { Header } from './Header'
import { LoginF } from '../functions/registration-login/loginFGoogle'
import '../styles-of-components/loginCss.css'
const Login = () => {
  return (
    <div>
      <Header />
      <div className="containerLogIn">
        <LoginF />
      </div>
    </div>
  )
}

export default Login