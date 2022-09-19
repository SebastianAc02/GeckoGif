

const key = "rQTX6ScmQjCQOMr1xm1FBbMSTHRKO1MC"


const fromApiResponse =(apiResponse) =>{

    const {data} = apiResponse

    const {images, title, id } = data

    const {url } = images.downsized_medium

    return {title, id, url}



}




export default function getSingleGif({gif_id}){

return fetch(`https://api.giphy.com/v1/gifs/${gif_id}?api_key=${key}`)
.then(ans => ans.json())
.then( fromApiResponse)




}