

import React from "react";
import Gif from "./GIF/GIF";
import "./GIF/GIF.css"






  export default function ListGifs ({gifs}) {


    if(gifs.keyword){
    return  ( 
   
    <h1 id="gif-keyword"> {gifs.keyword}</h1>
 
    )}

    return <div className='ListGifs'>
      
      {
        gifs.map(({id, title, url, keyword, gif_id }={}) =>
       
  
      
          <Gif 
            id={gif_id||id}
            key={gif_id|| id}
            title={title}
            url={url}
            keyword={keyword}
          />
          
      )
  
      }
    </div>
  }



