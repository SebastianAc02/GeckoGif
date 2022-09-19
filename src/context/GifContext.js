import React, { useState } from "react";

const Context = React.createContext({});

export function GifsContextProvider({ children }) {
  const [gifos, setGifs] = useState([]);

  return (
    <Context.Provider value={{ gifos, setGifs }}>{children}</Context.Provider>
  );
}

export default Context;
