
import { useEffect, useState } from "react";
import { useLocation } from "wouter";

import useUser from "../hooks/useUser";
import Login from "./Login";
import Modal from "./modal";


export default  function  Fav({ id , title, url }) {
  const { isLogged, addfav, favs ,deletefav} = useUser();

  const [, navigate] = useLocation(false);

  const [showModal, setShowModal ] = useState()




const  isFaved =  favs.some(fav => {

 if(fav === id) return true 
 else{
  return fav.gif_id === id
 }




}, [favs, id])




  let [label,emoji] =  isFaved
  ? ["Remove Gif from fav", "❌"]
  : ["Add gif to favs", "❤️"];


  const HandleFav = () => {
 

    if (!isLogged) return setShowModal(true);

    isFaved? deletefav({id}):
    addfav({ id, title, url  });
  };


  const handleClose = () => {
    setShowModal(false)
  }

  const handleLogin = () => {
    setShowModal(false)
  }

  return (
    <>
    <button onClick={HandleFav}>
      <span role={"img"} className="testingheart" aria-label={label}>
        {emoji}
      </span>
    </button>
    {(showModal  )? <Modal onClose={handleClose}><Login onLogin={handleLogin}/></Modal> : null}
    </>
  );
}
