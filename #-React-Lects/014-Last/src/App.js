import "./App.css";
import React, { createContext, useState } from "react";
import Sidebar from "./components/Sidebar";
import Widget from "./components/Widget";

export const ProductContenxt = createContext();

function App() {
  const [product, setProduct] = useState("Laptop");

  return (
    <ProductContenxt.Provider value={product}>
        <div className="App">
          <h1>Hooks [ useReducer ]</h1>
          <Sidebar />
          <Widget />
        </div>
    </ProductContenxt.Provider>
  );
}
export default App;
