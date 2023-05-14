import React from "react";
import "./App.css";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Cart />
      <Shop />
    </div>
  );
}

export default App;
