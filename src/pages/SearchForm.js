

import { useLocation } from "wouter";
import React from "react";
import {useForm} from "../hooks/useForm"

import './searchForm.css'

const RATINGS = ["g", "pg", "pg-13", "r"];




 function SearchForm({initialKeyword = '', initialRating='g'}) {

    

    const {keyword, rating, times, update_keyword, update_rating} = useForm({initialKeyword, initialRating})


     const [ , pushLocation] = useLocation();


  const evsubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };



  function handleChange(evt) {
    update_keyword(evt.target.value)
   
  }

  const HandleChangeRating =(evt) =>{

  update_rating(evt.target.value)
  }

  return (
    <>
      <form onSubmit={evsubmit}>
        <button className="form-search-general buttonSearch" style={{'--bgsearchform':'white'}}> Search </button>
        <input  className="form-search-general" style={{'--bgsearchform':'#DA22FF '}}
          placeholder="search here"
          onChange={handleChange}
          type="text"
        ></input>
        <select  style={{'--bgsearchform':'white '}} className="form-search-general selectSearch"  onChange={HandleChangeRating}value={rating}>
            <option disabled> Rating Type </option>
          {RATINGS.map((rating) => {
            return <option key={rating}> {rating} </option>;
          })}
        
        </select>
      </form>
 
    </>
  );
        }


     //   export default  SearchForm

export default React.memo(SearchForm);

//use memo es para un valor podriamos usarlo dentro de la home  pero no en cualquier sitio si no  enla home

// independiente con react memo podemos tener que searhcform se guarda

// component de order superior y devuelve otro componente
