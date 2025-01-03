// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY4MmMsKteq_xIlDg0xaXYWO-9lQLAkU8",
  authDomain: "mhb-datab.firebaseapp.com",
  projectId: "mhb-datab",
  storageBucket: "mhb-datab.firebasestorage.app",
  messagingSenderId: "403043534002",
  appId: "1:403043534002:web:d51b84385d48e4289eb5ab",
  measurementId: "G-T8M734TBVH"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth()

export {auth} 
export {db}
export default app