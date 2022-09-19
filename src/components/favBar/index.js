import { useState } from "react"
import { useLocation } from "wouter";
import useUser from "../../hooks/useUser";
import'./index.css'

export default function FavBar () {



    const { isLogged} = useUser();

    const [location ,navigate] = useLocation()

    const [navBar, setNavBar] = useState(location)

    const handleClick = (route) => {


        if(route === 'gifs'){


            setNavBar('/')

            navigate(`/`)
        }

        if(route === 'favs'){

           

            setNavBar('/favs')

            navigate(`/favs`)


        }

    }

    return(
        <div className="fav-selector">


        <div className={`active-section ${navBar ==='/' ? 'active':''}`} onClick={()=>{handleClick('gifs')}}>
          <h1>Gifs</h1>
            <div ></div>
        </div>
        
        {isLogged&&
        
        <div className={`active-section ${navBar === '/favs'? 'active':''}`} onClick={()=>{handleClick('favs')}}>
          <h1>Favs</h1>
          <div></div>
        </div>
        
        }
        
        
        </div>
    )
}