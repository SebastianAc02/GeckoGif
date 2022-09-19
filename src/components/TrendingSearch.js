
import { useState, useEffect } from "react"
import { Link } from "wouter"
import getTrending from "../pages/getTrendingService"

import "./Trending.css"



function TrendingSearches(){

    const [trending, setTrends] = useState([])

    useEffect(()=>{
        getTrending()
        .then(gifs => {
           
            setTrends(gifs)
        })
    }
    ,[])

  
    const trends = trending.slice(0,20)


    function chooseColor (index){

        if(index  % 3 === 0   ){
            return "#8EC5FC"
        }
        if(index % 3 === 1)
        return "#D9AFD9"
    
    if(index % 3 === 2){
        return '#8BC6EC'
    }

}

const chooseBg = (index ) => {

    if(index  % 3 === 0   ){
        return "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)"
    }
    if(index % 3 === 1)
    return "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)"

if(index % 3 === 2){
    return 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)'
}

}


  const listItems =   trends.map((singleGif, index) =>{
        return(
            
            <Link  key={index } to ={`/search/${singleGif.title}` }>
            <li   style={{'--bgTrending':`${chooseColor(index)}`, '--bgImageTrending': `${chooseBg(index)}`}}>
           
           
            <small > {singleGif.title} </small>
            
         
            </li>
            </Link>
            
        )
    })

  

    return (

        
       
        <div className="Trending">
        <h1 className="trendingTitle"> Trending <span>Searches</span></h1>
            <ul > {listItems } </ul>
          
        </div>
        


    );

}

export default TrendingSearches;