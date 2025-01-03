import React, { useState } from 'react'
import RegisterFGoogle from './registerFGoogle'
import '../../styles-of-components/registration.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../../firebase'
import { doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const RegisterMail = () => {

  const navigateAfSignin = useNavigate()
  const [msj, setMsj] = useState('')

  const [name, setName] = useState('')
  const [Lname, setLName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')

  const mailRegister = async (e) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user)
        if(user) {
          await setDoc(doc(db, "Users", user.uid), {
            userName: name,
            userLastName: Lname,
            userEmail: email,
            userNumber: number,
            userPassword: password,
            userPhoto: null,
            isAdmin: false,
          });
          setMsj("User registered succefully")
          navigateAfSignin('/')
        }
    }catch(e) {
      console.log(e)
    }
  }
  return (
    <div className='register_area'>
        <h1>Sign up</h1>
        <div className="register_info_area">
            <input type="text" name="userFirstName" id="register_info_first_name" placeholder='First Name' onChange={(e)=> setName(e.target.value)}/>
            <input type="text" name="userLastName" id="register_info_last_name" placeholder='Last Name' onChange={(e)=> setLName(e.target.value)}/>
            <input type="email" name="userEmail" id="register_info_email" placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>
            <input type="number" name="userNumber" id="register_info_number" placeholder='Phone Number' onChange={(e)=> setNumber(e.target.value)}/>
            <input type="text" name="userPassword" id="register_info_password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)}/>
            <input type="submit" value="Sign up" onClick={mailRegister}/>
        </div>
        <div className="googleRegister">
            <RegisterFGoogle />
            <p>{msj}</p>
        </div>
    </div>
  )
}

export default RegisterMail