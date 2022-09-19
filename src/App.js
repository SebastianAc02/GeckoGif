import "./App.css";
import React from "react";
import Detail from "./pages/detail";
import { Link, Redirect, Route } from "wouter";
import Home from "./pages/home";
import SearchResults from "./pages/SearchResults";
import { GifsContextProvider } from "./context/GifContext";
import Header from "./Header/Header";

import { UserContextProvider } from "./context/UserContext";

import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import ErrorPage from "./pages/404PageError/pageError";
import AllFavs from "./pages/AllFavs";

function App() {
  //const HomePage = React.lazy(()=>import('./ home '))

  // replace component of home yo home page



  return (
    <UserContextProvider>
      <div className="App">
        <Header />

        <Link to="/">
          <h1 style={{cursor:'pointer' }}> App</h1>
        </Link>

     


        <GifsContextProvider>
          <Route path="/gif/:id" component={Detail} />


    
      
          <Route
            path="/search/:keyword/:rating?"
            component={SearchResults}
          ></Route>

          <Route component={AllFavs} path={"/favs"}/>

          <Route component={LoginPage} path={"/login"} />
          <Route component={RegisterPage} path={'/register'}/>
          <Route path="/" component={Home} />
          <Route path="/Home" component={Home} />

         
          <Route component={ErrorPage} path='*'/>
          

        </GifsContextProvider>
      </div>
    </UserContextProvider>
  );
}

export default App;
