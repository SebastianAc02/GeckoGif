
import { PRIVATE_API_URL } from "../settings/settings";
const ENDPOINT = `${PRIVATE_API_URL}/db/login`


export default function LoginService({ username, password }) {
  return fetch(`${ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({username:username, password:password})
  })
    .then((res) => {
    
      if (!res.ok) { throw new Error("Response is not ok");}
      return res.json();
    })
    .then((res) => {
      const { token: jwt } = res;
      return jwt;
    });
}
