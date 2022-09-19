
//const ENDPOINT = "http://localhost:8080";
//const ENDPOINT = "http://mockbin.org/bin/9bd025f3-b46c-4e90-80e6-6948a2d92e15?foo=bar&foo=baz"
import { PRIVATE_API_URL } from "../settings/settings";
const ENDPOINT = `${PRIVATE_API_URL}/db/users`

export default function registerService({ username, password }) {
  
  return fetch(`${ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({username:username, password:password})
  })
    .then((res) => {
    
      if (!res.ok) throw new Error("Response is not ok");
      else return true 
    })
    
}