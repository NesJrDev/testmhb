import { useEffect, useState } from "react"
import { auth, db } from "../../../firebase"
import { doc, getDoc } from "firebase/firestore"
import '../../styles-of-components/profileData.css'
import { useNavigate } from "react-router-dom"
import noProfileImg from '../../../images/profile/blank-profile-picture-973460_640.png'

const ProfileData = () => {
 
  const navigateLog = useNavigate()

  const [userDetails, setUserDetails] = useState(null)
  const [valueButton, setValueButton] = useState("Log in?")
  
  const trapUserData = async (user) => {
    if(user) {
        const docRefUser = doc(db, "Users", user.uid);
        const dataUser = await getDoc(docRefUser)
        if(dataUser.exists()) {
            setUserDetails(dataUser.data())
            setValueButton("Log out")
            console.log(userDetails)
        }
    }else {
      setUserDetails(null) 
    }
  }


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      trapUserData(user);
    });
  
    return () => unsubscribe();
  }, []);
  if(userDetails == null)  {
    console.log("We didnt find a user")
  }else{
    console.log(userDetails.userPhoto)
  }

  return (
    <div className='profile_data_container'>
        {userDetails ? (
        <div className="Profile_data">
            <img src={userDetails.userPhoto !== null ? userDetails.userPhoto : noProfileImg} alt="User Profile" />
            <h1>Welcome {userDetails.userName}</h1>
            <p>Email: {userDetails.userEmail}</p>
        </div>
      ) : (
        <div className="Profile_data_error">
            <p>You are not Log in,</p>
            <button onClick={()=> navigateLog("/logIn")} className="user_button">{valueButton}</button>
        </div>
      )}
    
    </div>
  )
}

export default ProfileData