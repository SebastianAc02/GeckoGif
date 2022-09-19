

import {key, API_URL} from "../settings/settings"



// haver la funcion/\

/*

conseguir de los parametros esa respuesta  ( ans.data)

*/

export default function getTrending(){


  
  
    const apiurl = `${API_URL}/trending?api_key=${key}&limit=20&rating=g`


   return fetch(apiurl)
  .then(answer => answer.json())
  .then(ans => {

    const data  = ans.data 

    if(Array.isArray(ans.data))
   {
    const gifs = data.map((single)=>
  { const {images, title,id} = single;
  const {url} = images.downsized_medium
  return {title, id, url }
  })

  return gifs

  } } )
 

   

}
