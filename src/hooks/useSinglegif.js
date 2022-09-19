import { useEffect, useState } from "react";
import getSingleGif from "../services/getSingleGif";
import { GifHook } from "./GifHook";




export default function useSIngleGif({id}){


    const {gifos} = GifHook()

    const gifFromCache = gifos.find(singleGif=> 
        singleGif.id === id)

        const [gif, setGif] = useState(gifFromCache)
        const [isLoading, setIsloading] = useState(false)

        const [isError, setIsError] = useState(false)


        useEffect(()=>{
            if(!gif){

                setIsloading(true)

                // llamar al servicio
                getSingleGif({gif_id: id})
                .then(gif=>{
                    setGif(gif)
                    setIsloading(false)
                }).catch(err=>{
                    setIsloading(false)
                    setIsError(true)
                })



            }
        },[gif, id ])

        return {gif, isError, isLoading}

    
}