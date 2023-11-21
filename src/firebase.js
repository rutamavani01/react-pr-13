import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { NavigationType } from 'react-router-dom';


const firebaseConfig = {
    apiKey: "AIzaSyBov9ZSMjwH-QNAn9JhOaZ1P0segipvOMA",
    authDomain: "ruta-bcc41.firebaseapp.com",
    databaseURL: "https://ruta-bcc41-default-rtdb.firebaseio.com",
    projectId: "ruta-bcc41",
    storageBucket: "ruta-bcc41.appspot.com",
    messagingSenderId: "876690532508",
    appId: "1:876690532508:web:ed63c574d4dac0b44aa559",
    measurementId: "G-LEVEWT7QFJ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
export default app;