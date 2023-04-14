// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFUm7R0yeEyOrCap31vM7TusY9wa5QF3s",
  authDomain: "auth-ecom-784d0.firebaseapp.com",
  projectId: "auth-ecom-784d0",
  storageBucket: "auth-ecom-784d0.appspot.com",
  messagingSenderId: "504089800703",
  appId: "1:504089800703:web:887936599c14b6fe5d01ca",
  measurementId: "G-XR59G2DCZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()

export {auth,app}