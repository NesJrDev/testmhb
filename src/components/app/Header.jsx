import { Link } from "react-router-dom"
import '../styles-of-components/HeaderCss.css'
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import { IconProfile } from "../functions/iconProfile";
export const Header = () => {
  const [userLogin, setUserLogin] = useState(false)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if(user) {
        setUserLogin(true)
      }else {
        setUserLogin(false)
      }
    });
  
    return () => unsubscribe();
  }, []);
  return (
    <div className='Header'>
        <h1>Header Logo</h1>
        <div className='Header-navBar'>
            <Link to={'/'}>Home</Link>
            <Link to={'/logIn'}>Log in</Link>
            {!userLogin ? <Link to={'/register'}>Register</Link> :
             <>
             <IconProfile />
             </>}
        </div>
    </div>
  )
}
