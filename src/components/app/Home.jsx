import React from 'react'
import { Header } from './Header'
import ProfileData from '../functions/registration-login/profileData'
import '../styles-of-components/profileData.css'
export const Home = () => {
  return (
    <div>
      <Header />
      <div className="userInfo">
        <ProfileData />
      </div>
    </div>
  )
}
