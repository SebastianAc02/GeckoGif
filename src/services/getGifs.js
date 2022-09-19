const key = "rQTX6ScmQjCQOMr1xm1FBbMSTHRKO1MC"



export default function getGifs({limit =8 ,keywordTouse = 'morty', page = 0, rating='g' } = {}){

  var numberofGifs = page+ 1
  // changes i made:
  // limit i added * x , and i change offset to 0 
  // i had offset : limit * page and limit : limit 
  
    const apiurl = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${keywordTouse}&limit=${limit* numberofGifs }&offset=${0}&rating=${rating}&lang=en`


   return fetch(apiurl)
  .then(img => img.json())
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
