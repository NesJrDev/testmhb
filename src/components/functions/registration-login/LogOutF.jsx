import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../../firebase'
import { useNavigate } from 'react-router-dom'

export const LogOutF = () => {

    const navigateLog = useNavigate()
    const [valueButton, setValueButton] = useState("Log in?")

    const trapUserData = async (user) => {
        if(user) {
            const docRefUser = doc(db, "Users", user.uid);
            const dataUser = await getDoc(docRefUser)
            if(dataUser.exists()) {
                setValueButton("Log out")
            }
        }else {
            setValueButton('Log in?') 
        }
      }
    
    
      useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          trapUserData(user);
        });
      
        return () => unsubscribe();
      }, []);

    const logOutF = async () => {
      try {
        await auth.signOut()
        navigateLog('/logIn')
       }catch(e) {
        console.log(e)
      }
    }
  return (
    <button onClick={logOutF} className="user_button">{valueButton}</button>
  )
}
