import "./App.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";
import { productos } from "./data/getDataProduct";
import { MyContext } from "./context/MyContext";

const App = () => {
  const [dataProducts, setDataProducts] = useState(productos);
  return (
    <div>
      <MyContext.Provider value={{ dataProducts, setDataProducts }}>
        <NavBar />
        <AppRouter />
      </MyContext.Provider>
    </div>
  );
};

export default App;
