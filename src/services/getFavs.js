
import { PRIVATE_API_URL } from "../settings/settings";
const ENDPOINT = `${PRIVATE_API_URL}/db/users`

export default function GetFavs({ jwt  }) {
  


 

    return fetch(`${ENDPOINT}`, {
      method: "GET",
      headers: {
        'Content-Type':' application/json',
        "Authorization": `bearer ${jwt}`
      }})
      .then((res) => {
        if (!res.ok) throw new Error(`Response is NOT ok`);

        return res.json();
      })
      .then((res) => {
        const  gifs = res;

        return gifs;
      });
  }
  