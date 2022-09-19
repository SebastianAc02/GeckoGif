

import throttle from "just-throttle";
import { useCallback, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import ListGifs from "../components/ListGifs";

import {GifHook} from "../hooks/GifHook";
import useNearScreen from "../hooks/isNearscreen";
import SearchForm from "./SearchForm";



export default function SearchResults({params}){


    const {keyword, rating = 'g'}= params

  

    const {loading, gifos, setPage} = GifHook({keyword, rating})

    // Infinite scroll

    const externalRef = useRef()

    const {show } = useNearScreen({externalRef : loading? null: externalRef,
    once:false})

    //titlte SEO
const title = gifos? `Results of ${keyword}`: ""
    // useTitle({title})

   
    const debounceHandleNextpage = useCallback( throttle(
        () =>setPage(prevPage => prevPage+ 1)
        , 200
    ), [setPage])

    
    // change debounce to turtle 

    useEffect(()=>{

    //console.log(show)
        if(show) debounceHandleNextpage();
    } , [show, debounceHandleNextpage])

 

    return (
        <div>
          
            {loading?
            <h1>Loading from search results</h1>
        :
       <>
         <Helmet>
                <title> {title}  | Giffy </title>
                <meta name="description" content={title} />
            </Helmet>
       <h1> {decodeURIComponent(params.keyword)} </h1>
       <div>
       <SearchForm initialKeyword={params.keyword} initialRating={rating}/>
       </div>
       <ListGifs gifs={gifos} />
       <div id="visor" ref={externalRef}></div>
       </>   
         }

             
      
        </div>
    );
}