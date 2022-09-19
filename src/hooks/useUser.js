import { useCallback, useContext, useState } from "react";
import Context from "../context/UserContext";
import DeleteFavs from "../services/deletefav";
import FavService from "../services/favService";
import GetFavs from "../services/getFavs";
import LoginService from "../services/loginService";

export default function useUser(){

const {jwt, setjwt, setfavs, favs} = useContext(Context)
const [state,setState] = useState({loading:false, error: false});

const [isLoggedout, setIsLoggedout] = useState(false)

const login = useCallback(({username,password}) => {
  setIsLoggedout(false)
    setState({loading:true, error:false})
  LoginService({username, password})
  .then(jwt => {
  //  jwt = 'response'

  window.sessionStorage.setItem('jwt', jwt)
    setState({loading:false, error :false})
    setjwt(jwt)
    //setjwt(window.sessionStorage.getItem('jwt'))
  })
  .catch(err =>{
    window.sessionStorage.removeItem('jwt')
    setState({loading:false, error:true})
    console.log(err)
  })
},[ setjwt])

const addfav = useCallback( ({id, title, url }) =>{

FavService({id, jwt, title, url })
.then(ans => setfavs((prev)=> prev.concat(ans)))

},[jwt, setfavs])

const logout = useCallback(()=>{
  setIsLoggedout(true)
    window.sessionStorage.removeItem('jwt')
    setjwt(null)
    setfavs([])
}, [setjwt, setfavs])

const deletefav = useCallback(({id}) =>{
DeleteFavs({id, jwt})
GetFavs({jwt})
.then(ans => setfavs(ans.gifs))

}, [jwt, setfavs])



return{
    addfav,
    favs,
    isLogged: Boolean(jwt),
    isLogingLoading: state.loading,
    isLoadingError: state.error,
    login,
    logout,
    state,
    setState,
    isLoggedout,
    deletefav

}
}