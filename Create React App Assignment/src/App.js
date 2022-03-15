import React, { Component } from "react";
import "./App.css";
import Buttons from "./Componentss/Molecules/Button";
import ButtonAppBar from "./Componentss/Molecules/ButtonAppBar";
//import PrimarySearchAppBar from "./Componentss/ButtonAppBar";
class App extends Component {
  render() {
    return (
      <div className="App">
        
        <ButtonAppBar/>
        <Buttons />
      </div>
    );
  }
}
export default App;
