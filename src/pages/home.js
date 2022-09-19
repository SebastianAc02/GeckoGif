


import { Helmet } from "react-helmet";
import { Link } from "wouter";
import ListGifs from "../components/ListGifs";
import TrendingSearches from "../components/trendingSearches";
import { GifHook } from "../hooks/GifHook";
import SearchForm from "./SearchForm";

import "./home.css"
import FavBar from "../components/favBar";




export default function Home(){
   

   // eslint-disable-next-line no-unused-vars
   const {loading, gifos} =    GifHook()


   //     useTitle({title: '|GIFS'})

    return (
        <div>
            <Helmet>
                <title> Home | Giffy </title>
            </Helmet>
     
     
      
        


       <SearchForm  />

       <FavBar/>

        <ListGifs gifs= {gifos} />

        


           
        <TrendingSearches />



            </div> 
    );
}