

import { PRIVATE_API_URL } from "../settings/settings";
const ENDPOINT = `${PRIVATE_API_URL}/db/gifs`
export default function DeleteFavs({ id  , jwt}) {
    return fetch(`${ENDPOINT}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`
      }})
      .then((res) => {
        if (!res.ok) throw new Error("Response is NOT ok");
        return res;
      })
     
    ;
  }