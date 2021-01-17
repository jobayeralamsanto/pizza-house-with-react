import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Shop from "./components/Shop";
import Clients from "./components/Clients";
import Menu from "./components/Menu";
import Prices from "./components/Prices";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Shop />
      <Clients />
      <Menu />
      <Prices />
      
    </div>
  );
}

export default App;
