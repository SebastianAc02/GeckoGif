
import React from "react";
import { Suspense } from "react";
import useNearScreen from "../hooks/isNearscreen";

//mport TrendingSearches from "./TrendingSearch";


const TrendingSearches = React.lazy(
    ()=>import("./TrendingSearch")

    // Asyncrono y devuelve una promesa
)



export default function LazyTrending(){

   


const {show, ref} = useNearScreen()

return( <div ref={ref}>

<Suspense fallback={'I am loading'}>
{show ? <TrendingSearches/> : null}
</Suspense>
</div>);

};