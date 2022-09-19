


import React, { useEffect, useState } from "react";
import GetFavs from "../services/getFavs";

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [favs, setfavs] = useState([])
  const [jwt, setjwt] = useState(
    ()=>
    window.sessionStorage.getItem('jwt')
  )


  useEffect(()=>{
if(!jwt||jwt===null) return setfavs([])


GetFavs({jwt})
.then(ans =>
{

  setfavs(ans?.gifs)})
  },[jwt, setfavs])

  return (
    <Context.Provider value={{ jwt, 
    setjwt ,
    favs,
    setfavs
    }}>
        {children}
        </Context.Provider>
  );
}

export default Context;
