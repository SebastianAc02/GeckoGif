import { useEffect, useState } from "react";
import React from "react";
import { useLocation } from "wouter";
import useUser from "../../hooks/useUser";
import "./Login.css"

export default function Login({onLogin}) {
  const [, navigate] = useLocation();

  const [username, setUserName] = useState("");

  const [password, setPassword] = useState("");



  const {  isLogingLoading    ,    login   , state,  setState,  isLogged } = useUser();



  useEffect(() => {
    if (isLogged === true)
    { navigate("/")
     onLogin && onLogin()}

  }, [isLogged, navigate]);

  const OnSubmit = (event) => {
    event.preventDefault();
    login({username, password})
    
  };

 const setError = ()=>{

  setTimeout(()=>{
    setState({error:false})
  }, 2000)
 }

  return (
    < div className="LoginPage">
    {(isLogingLoading)&& <h1 className="Success"> Checking credentials</h1>}
    

{!isLogingLoading&&
     ( 
     <form onSubmit={OnSubmit} >
      <h1 className="LoginTitle"> Login </h1>
        <label className="LabelForms" > Username  <input className="InputForm onPage"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          type="text"
          placeholder="USERNAME"
          value={username}
        />
        </label>
        
        <label className="LabelForms">password <input className="InputForm"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="PASSWORD"
          value={password}
        /></label>
        
        <button id="Test-Button-Login" className="buttonForm"> Login </button>
        {state.error &&  <>  <p className="Errors"> Credentials are wrong </p> {setError()}  </> }
      </form>
)}
    </div>
  );
}
