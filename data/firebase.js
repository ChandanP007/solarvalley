// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDrgo4ID-4QvpFBi1aYlzeMWGqB2-ypc4s",
  authDomain: "login-81308.firebaseapp.com",
  projectId: "login-81308",
  storageBucket: "login-81308.appspot.com",
  messagingSenderId: "404052183214",
  appId: "1:404052183214:web:62c870ff90ea2bd646c53f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};