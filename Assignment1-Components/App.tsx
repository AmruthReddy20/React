import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from './Greet'
//import Person from "./Components/Person";
function App() {
    const list = [
        {
          first: "Amruth",
          last: "Reddy",
        },
        {
          first: "Ram",
          last: "Rao",
        },
      ];
  return (
    <div className="App">
       <Greet list={list} /> 
    </div>
  );
}

export default App;
