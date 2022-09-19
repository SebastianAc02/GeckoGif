


import { useContext } from "react";
import GifsContex from "../context/GifContext";



export default function useGlobalGif(){

  // Reading context just reading one thing fromt the context

    return useContext(GifsContex).gifos

}