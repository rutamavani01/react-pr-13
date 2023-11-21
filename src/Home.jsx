import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";


const Home = () => {

    const navigate = useNavigate();

    const handlaLogout = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }

    const user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        if (user) {
            navigate('/home');
        }
    }, [])
    return (
        <center>
            <h1>Welcome to react firebase goolge authentication</h1>
            <hr />
            <h2>{user && user.email}</h2>
            {user && (<img src={user.photoURL} />)}
            <hr />
            <button onClick={handlaLogout}>Logout</button>
        </center>
    )
}
export default Home;