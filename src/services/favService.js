

import { PRIVATE_API_URL } from "../settings/settings";

const ENDPOINT = `${PRIVATE_API_URL}/db/gifs`

export default function FavService({ id, jwt, title, url  }) {

  return fetch(`${ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${jwt}`
    },
    body: JSON.stringify({  "gif_id":  id , "title": title, "url": url})
  })
    .then((res) => {

      if (!res.ok) throw new Error("Response is not ok ll ", {res} , 'jwt:', {jwt});
      return res.json();
    })
    .then((res) => {

     const {title, url , gif_id} = res

    
      
      return {title, url , gif_id};
    });
}


