import { useState, useEffect, useRef } from 'react'

export  default  function useNearScreen({distance= '100px', 
externalRef, once = true }= {}){

    const [show , setShow] = useState(false)

    const ref = useRef()

    

    
    useEffect(function(){

        let observer ;

       const el = externalRef? externalRef.current: ref.current

     

      

        const onChange = (entries,observer) =>{
        
            const element = entries[0]


            
            if (element.isIntersecting)
            {
                setShow(true)

               once && observer.disconnect()
            }else{
                !once && setShow(false)
            }
         
        
        }

    

    Promise.resolve(
        typeof IntersectionObserver !== 'undefined'
        ?
        IntersectionObserver
        :
        import ('intersection-observer')
    ).then(()=>{
        observer = new IntersectionObserver(onChange, {
            rootMargin: distance
        })

        //
        observer.observe(el)

        //  observer.observe(ref.current)
    })

    return () => observer && observer.disconnect()

    })

    
   
    
    

     return {show, ref}
}