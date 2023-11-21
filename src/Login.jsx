import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "./firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {

   const navigate = useNavigate();

   const handlesubmit = async () => {
      try {
         const result = await signInWithPopup(auth, googleAuthProvider);
         console.log(result.user);
         localStorage.setItem('token', result.user.accessToken);
         localStorage.setItem('user', JSON.stringify(result.user));
         navigate('/home');
      } catch (err) {
         console.log(err);
      }
   }

   const user = JSON.parse(localStorage.getItem('user'));
   useEffect(() => {
      if (user) {
         navigate('/');
      }
   }, [])
   return (
      <center>
         <h1>Google Authentication</h1>
         <button onClick={() => handlesubmit()}>Google</button>
      </center>
   )
}
export default Login;