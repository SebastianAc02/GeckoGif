import { Link } from "wouter";
import FavBar from "../../components/favBar";
import ListGifs from "../../components/ListGifs";
import useUser from "../../hooks/useUser";
import SearchForm from "../SearchForm";

export default function AllFavs(){


    const {favs} = useUser()

    return (
        <>

   

    <SearchForm  />

        <FavBar/>
        <ListGifs gifs={favs }/>
        {
            favs?.length === 0 && <h3> Start searching for gifs you may like  <Link to='/'>here</Link></h3> 
        }
        </>
    )
}