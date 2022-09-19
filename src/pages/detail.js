import React from "react";
import { Redirect } from "wouter";
import useSIngleGif from "../hooks/useSinglegif";

import { Helmet } from "react-helmet";


export default function Detail({params}){

  
const {gif, isLoading, isError} = useSIngleGif({id: params.id})

 // const [loading, gifos] = 

  const title = gif? gif.title : ""

//   useTitle({description: `Detail of ${title}`,title})

 if(isLoading) return(
  <>
  <Helmet>
    <title>
      Cargando...
    </title>
  </Helmet>
  </>
 )
 if(isError) return <Redirect to='/404' />
if(!gif) return null;

       return(
        <div>
          <Helmet>
            <title>{title} || Giffy</title>
          </Helmet>
          <h1 > {gif.title}</h1>
          <img src={gif.url} alt='-' />

        </div>
       )

}