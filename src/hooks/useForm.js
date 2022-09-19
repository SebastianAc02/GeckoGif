const { useReducer } = require("react");


const ACTIONS ={
    UPDATE_KEYWORD: 'update_keyword',
    UPDATE_RAITING: ' update_raiting'
  }
  
  
  
 const reducer  = (state, action) =>{
    switch(action.type){
      case ACTIONS.UPDATE_KEYWORD:
        return {
          ...state,
          keyword:  action.payload,
          time: state.times+1
        }
        case ACTIONS.UPDATE_RAITING:
          return{
            ...state,
            rating: action.payload
          }
    
   
  default : return state;
        }
  
    }
     
    export  function useForm ({initialKeyword= '', initialRating = 'g'}={}) {



        const [state , dispatch ]    =    useReducer(reducer, {
         keyword: decodeURIComponent(initialKeyword),
         rating: initialRating,
         times: 0,
        })
   
        const {keyword, rating, times} = state
        return{
         keyword,
         rating,
         times,
         update_keyword: keyword=>  dispatch({          type : ACTIONS.UPDATE_KEYWORD,           payload:  keyword   }),
         update_rating: (rating)=>   dispatch(   { type : ACTIONS.UPDATE_RAITING,       payload:  rating})
   
        }
       }
   