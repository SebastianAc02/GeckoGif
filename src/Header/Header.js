import { Link, useLocation } from "wouter";
import "./Header.css"
import useUser from "../hooks/useUser";

export default function Header(){

    //const isLogged = false;

    const {isLogged, logout} = useUser()


   

    const HandleClick = (e) =>{
        e.preventDefault();
        logout();
     

    }

    return(
        <header className="header">
          {  isLogged? 
         <>
         <Link to="/favs" >
            Favs 
         </Link>
         <Link to="/" onClick={HandleClick}>
            Logout
            </Link>
            </>

         :
          <>
          <Link to="/login">
            Login 
            </Link>
            <Link to ='/register'>
                Register</Link></>}
        </header>
    )
}