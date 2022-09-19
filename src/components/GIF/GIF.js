


import React from "react";
import { Link } from "wouter";
import Fav from "../Fav";
import "./GIF.css"
 function Gif({title, id , url , keyword}){


    return (
        <div className="Gif">
     
      <Fav id={id} title={title} url={url}/>
        <h1> {title}</h1>
        <p> {id }</p>
        <Link to={`/gif/${id}`}>
        <img loading= 'lazy' src={url} alt={title}/>
        </Link>
       
        </div>
       ) 



}

export default React.memo(Gif,(prevProps, nextProps)=>{
    return prevProps.id === nextProps.id
})